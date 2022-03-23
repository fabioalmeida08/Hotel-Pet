import AdmContact from "../../components/AdmContact"
import DashboardContacts from "../../components/DashboardContacts"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { useAuth } from "../../contexts/AuthProvider"
import { Container, CardUser } from "./styles"

const PagContacts = () => {
  const { admin } = useAuth()
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