import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import ModalPetStatusAdmin from './components/ModalPetStatusAdmin'

function App() {
  return (
    <>
      <CssBaseline/>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
