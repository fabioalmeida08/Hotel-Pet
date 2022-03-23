import DashboardLodge from "../../components/DashboardLodge"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"

const PagLodge = () => {
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          <DashboardLodge />
        </CardUser>
      </Container>
    )   
  }
  
  export default PagLodge