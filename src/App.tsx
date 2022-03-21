import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import CardPetsStatus from './components/CardPetsStatus'

function App() {
  return (
    <>
      <CssBaseline/>
      <CardPetsStatus idPet={'13'}/>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
