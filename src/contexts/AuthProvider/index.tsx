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

  const signIn = (userData: IFormData) => {
    hotelPetApi
      .post('/login', userData)
      .then((res) => {
        const admin = res.data.user.admin
        
        const id = res.data.user.id
        localStorage.setItem(
          '@hotelPet:token',
          JSON.stringify(res.data.accessToken)
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
  }

  return (
    <AuthContext.Provider
      value={{ signIn, authToken, logOut ,admin}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
