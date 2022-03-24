import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/PagPets'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import PagPets from '../pages/PagPets'
import PagMine from '../pages/PagMine'
import PagContacts from '../pages/PagContact'
import PagLodge from '../pages/PagLodge'
import Error from '../pages/Error'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='dashboard/pets' element={<PagPets />} />
      <Route path='dashboard/mime' element={<PagMine />} />
      <Route path='dashboard/contact' element={<PagContacts />} />
      <Route path='dashboard/lodge' element={<PagLodge />} />
      <Route path='*' element={<Error/>}/>        
    </Routes>
  )
}

export default Router
