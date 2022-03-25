import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import {useAuth} from './contexts/AuthProvider'
import {socket} from './services/chat'
import { useEffect } from 'react'
function App() {
    const {setAdmin} = useAuth()
  if(localStorage.getItem('@hotelPet:admin')){
    setAdmin(true)
  }
  return (
    <>
      <CssBaseline/>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
