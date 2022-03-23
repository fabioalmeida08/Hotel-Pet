import DashboardMime from "../../components/DashboardMime"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"

const PagMine = () => {
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          <DashboardMime />
        </CardUser>
      </Container>
    )   
  }
  
  export default PagMine