import AdmPets from "../../components/AdmPets"
import DashboardPets from "../../components/DashboardPets"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"
import { useAuth } from '../../contexts/AuthProvider'
import { Navigate } from "react-router-dom"

const PagPets = () => {
  
  const {authToken, admin} = useAuth()

  if(!authToken) {
    return <Navigate to='/login' replace />
  }
  
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          {admin ? <AdmPets/>: <DashboardPets />}
        </CardUser>
      </Container>
    )   
  }
  
  export default PagPets