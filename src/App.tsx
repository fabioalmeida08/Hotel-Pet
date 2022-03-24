import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routes'
import {CssBaseline} from '@mui/material'


function App() {
  const [showModal, setShowModal] = useState<SetStateAction<boolean>>(true)
  return (
    <>
      <CssBaseline/>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
