import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'
import CardPetsStatus from './components/CardPetsStatus'

import ModalPetStatusAdmin from './components/ModalPetStatusAdmin'
import {useState,  Dispatch, SetStateAction } from 'react'



function App() {
  const [showModal, setShowModal] = useState<SetStateAction<boolean>>(true)
  return (
    <>
      <CssBaseline/>

      {showModal && 
      <ModalPetStatusAdmin idPet={'14'} setShowModal={setShowModal} />
}
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
