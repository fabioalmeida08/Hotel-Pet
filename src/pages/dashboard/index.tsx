import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'        
import { useEffect } from "react"
        

const Dashboard = () => {
  const {authToken, setAdmin} = useAuth()
  
  if (!authToken) {
    return <Navigate to='/login' replace />
  }
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
        </CardUser>
      </Container>
    )   
}

export default Dashboard