
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
}

const AuthContext = createContext<AuthProviderValue>(
  {} as AuthProviderValue
)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()

  const [admin, setAdmin] = useState(false)
 
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem('@hotelPet:token') || ''
  )
  const [userName , setUserName] = useState(
    () => localStorage.getItem('@hotelPet:userName') || ''
  )
  
  const [userId , setUserId] = useState<number | string>(
    () => localStorage.getItem('@hotelPet:userId') || ''
  )

  const signIn = (userData: IFormData) => {
    hotelPetApi
      .post('/login', userData)
      .then((res) => {
        const admin = res.data.user.admin
        const name = res.data.user.name
        const id = res.data.user.id
        
        setUserId(id)
        setUserName(name)
        
        localStorage.setItem(
          '@hotelPet:token',
          JSON.stringify(res.data.accessToken)
        )

        localStorage.setItem(
          '@hotelPet:userName',
          JSON.stringify(name)
        )

        localStorage.setItem(
          '@hotelPet:userId',
          JSON.stringify(id)
        )
        
        setAuthToken(res.data)
        
        if(admin) setAdmin(true)
        
        
        navigate(`/dashboard/${id}`)
      })
      .catch((err) => console.log(err))
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
      value={{ signIn, authToken, logOut ,admin , userId , userName}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }