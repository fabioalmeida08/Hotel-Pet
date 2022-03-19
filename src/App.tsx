import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import CardPet from './components/CardPets'
import CardPetsStatus from './components/CardPetsStatus'

function App() {
  return (
    <>
      <CssBaseline/>
      <CardPetsStatus/>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
