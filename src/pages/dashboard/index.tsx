import DasboardHeader from "../../components/HeaderDashboard"
import CardUser from "../../components/CardUser"
import { Container } from "./styles"

const Dashboard = () => {
    return (
      <Container>
        <DasboardHeader />
        <CardUser />
      </Container>
    )   
  }
  
  export default Dashboard