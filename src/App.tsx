import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import Button from './components/Buttons'

function App() {
  return (
    <>
      <CssBaseline/>
      <Router />
      <Button>texto</Button>
      <ToastContainer />
    </>
  )
}

export default App
