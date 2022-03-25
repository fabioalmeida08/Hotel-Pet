import AdmMine from "../../components/AdmMine"
import DashboardMime from "../../components/DashboardMime"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { useAuth } from "../../contexts/AuthProvider"
import { Container, CardUser } from "./styles"
import { Navigate } from "react-router-dom"

const PagMine = () => {
  const { authToken, admin } = useAuth()
  if(!authToken) {
    return <Navigate to='/login' replace />
  }
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          {admin ? <AdmMine/> : <DashboardMime />}
        </CardUser>
      </Container>
    )   
  }
  
  export default PagMine