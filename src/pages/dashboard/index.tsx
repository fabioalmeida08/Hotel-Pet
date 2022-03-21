import DashboardPets from "../../components/DashboardPets"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"

const Dashboard = () => {
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