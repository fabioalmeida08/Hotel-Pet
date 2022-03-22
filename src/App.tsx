import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import CardMimos from './components/CardMimos'
function App() {
  return (
    <>
      <CssBaseline/>
      <Router />
      <CardMimos img="asd" title='sadsad' description='dshudh sadhu ch jhxcxc x'/>
      <ToastContainer />
    </>
  )
}

export default App
