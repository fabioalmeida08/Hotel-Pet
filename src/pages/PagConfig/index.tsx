import DashboardConfig from "../../components/DashboardConfig"
import DasboardHeader from "../../components/HeaderDashboard"
import UserNav from "../../components/UserNav"
import { Container, CardUser } from "./styles"

const PagConfig = () => {
    return (
      <Container>
        <DasboardHeader />
        <CardUser>
          <UserNav />
          <DashboardConfig />
        </CardUser>
      </Container>
    )   
  }
  
  export default PagConfig