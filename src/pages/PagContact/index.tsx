import DashboardContacts from "../../components/DashboardContacts"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"

const PagContacts = () => {
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          <DashboardContacts />
        </CardUser>
      </Container>
    )   
  }
  
  export default PagContacts