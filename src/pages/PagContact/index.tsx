import AdmContact from "../../components/AdmContact"
import DashboardContacts from "../../components/DashboardContacts"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { useAuth } from "../../contexts/AuthProvider"
import { Container, CardUser } from "./styles"
import { Navigate } from "react-router-dom"

const PagContacts = () => {
  const { authToken, admin } = useAuth()
  if(!authToken) {
    return <Navigate to='/login' replace />
  }
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          {admin ? <AdmContact/> : <DashboardContacts />}
        </CardUser>
      </Container>
    )   
  }
  
  export default PagContacts