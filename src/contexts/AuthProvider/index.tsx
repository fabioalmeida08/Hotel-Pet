import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
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
  userPets: [] | typedPets
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
  tutorId: number
}

export const AuthContext = createContext<AuthProviderValue>(
  {} as AuthProviderValue
)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState(false)

  const [userPets, setUserPets] = useState<[]>([])

  const [allUsers , setAllUsers] = useState<[]>([])

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem('@hotelPet:token') || ''
  )

  const [userName, setUserName] = useState(
    () => localStorage.getItem('@hotelPet:userName') || ''
  )

  const [userId, setUserId] = useState<number | string>(
    () => localStorage.getItem('@hotelPet:userId') || ''
  )

  const signIn = (userData: IFormData) => {
    hotelPetApi
      .post('/login', userData)
      .then((res) => {
        const { id, name, admin } = res.data.user
        const token = res.data.accessToken

        setUserId(id)
        setUserName(name)

        localStorage.setItem(
          '@hotelPet:token',
          JSON.stringify(token)
        )

        localStorage.setItem(
          '@hotelPet:userName',
          JSON.stringify(name)
        )

        localStorage.setItem(
          '@hotelPet:userId',
          JSON.stringify(id)
        )

        setAuthToken(token)

        if (admin) setAdmin(true)

        navigate('/dashboard')
      })
      .catch((err) => console.log(err))

    hotelPetApi
      .get(`/users/${userId}?_embed=pets`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((res) => {
        setUserPets(res.data.pets)
        console.log(res.data.pets)
      })
    
    hotelPetApi
       .get(`/users`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(res => {
        setAllUsers(res.data)
      })
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
        allUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
