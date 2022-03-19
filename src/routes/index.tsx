import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='dashboard/:id' element={<Dashboard />} />
    </Routes>
  )
}

export default Router
