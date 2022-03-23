import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import hotelPetApi from '../../services/index'

interface AuthProviderProps {
  children: ReactNode
}

interface IFormData {
  email: string
  password: string
}

interface AuthProviderValue {
  signIn: (userData: IFormData) => void
  authToken: string
  logOut: () => void
  admin: boolean
  userName: string
  userId: string | number
  userPets: [] | typedPets[]
  allUsers: []

}

interface typedPets {
  age: number
  hospedado: boolean
  id: number
  mimos: Array<object>
  name: string
  race: string
  size: string
  specie: string
  status: Array<object>
  userId: number
}

export const AuthContext = createContext<AuthProviderValue>(
  {} as AuthProviderValue
)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState(false)

  const [userPets, setUserPets] = useState<typedPets[]>(
    () => JSON.parse(localStorage.getItem('@hotelPet:userPets') || '[]')
  )
  

  const [allUsers, setAllUsers] = useState<[]>([])

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem('@hotelPet:token') || ''
  )

  const [userName, setUserName] = useState(
    () => localStorage.getItem('@hotelPet:userName') || ''
  )

  const [userId, setUserId] = useState<number | string>(
    () => localStorage.getItem('@hotelPet:userId') || ''
  )

  // console.log(JSON.parse(localStorage.getItem('@hotelPet:userName') || ''))
  
  const login = (data: any) => {
    const { id, name, admin } = data.user
    const token = data.accessToken

    setUserId(id)
    setUserName(name)
    setAuthToken(token)
    
    localStorage.setItem(
      '@hotelPet:token',
      JSON.stringify(token)
    )

    localStorage.setItem(
      '@hotelPet:userName',
      (name)
    )
    
    localStorage.setItem(
      '@hotelPet:userId',
      JSON.stringify(id)
      )
      

    if (admin) setAdmin(true)
    console.log(1)
  }

  const signIn = async (userData: IFormData) => {
    const { data } = await hotelPetApi.post(
      '/login',
      userData
    )

    // const login = () => {
    //   const { id, name, admin } = data.user
    //   const token = data.accessToken
    //   console.log(id)

    //   setUserId(id)
    //   setUserName(name)

    //   localStorage.setItem(
    //     '@hotelPet:token',
    //     JSON.stringify(token)
    //   )

    //   localStorage.setItem(
    //     '@hotelPet:userName',
    //     JSON.stringify(name)
    //   )

    //   localStorage.setItem(
    //     '@hotelPet:userId',
    //     JSON.stringify(id)
    //   )

    //   setAuthToken(token)

    //   if (admin) setAdmin(true)
    //   console.log(1)
    // }

    await login(data)

    const { data: data2 } = await hotelPetApi.get(
      `/users/${localStorage.getItem(
        '@hotelPet:userId'
      )}?_embed=pets`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('@hotelPet:token') || ''
          )}`,
        },
      }
    )

    setUserPets(data2.pets)
    localStorage.setItem(
      '@hotelPet:userPets',
      JSON.stringify(data2.pets)
    )
    console.log(2)

    const { data: data3 } = await hotelPetApi.get(
      `/users`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('@hotelPet:token') || ''
          )}`,
        },
      }
    )
    setAllUsers(data3)
    console.log(3)
    navigate('/dashboard/pets')
  }

  const logOut = () => {
    localStorage.clear()
    setAuthToken('')
    navigate('/')
    setAdmin(false)
    setUserId('')
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        authToken,
        logOut,
        admin,
        userId,
        userName,
        userPets,
        allUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
