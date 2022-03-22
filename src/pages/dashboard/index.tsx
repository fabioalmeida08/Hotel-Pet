import DashboardPets from "../../components/DashboardPets"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'        
        

const Dashboard = () => {
  const {authToken} = useAuth()
  
  if (!authToken) {
    return <Navigate to='/login' replace />}
    
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          <DashboardPets />
        </CardUser>
      </Container>
    )   
}

export default Dashboard