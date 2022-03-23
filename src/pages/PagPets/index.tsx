import AdmPets from "../../components/AdmPets"
import DashboardPets from "../../components/DashboardPets"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { useAuth } from "../../contexts/AuthProvider"
import { Container, CardUser } from "./styles"

const PagPets = () => {
    const { admin } = useAuth()
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