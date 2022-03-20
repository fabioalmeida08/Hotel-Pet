import DashboardPets from "../DashboardPets"
import UserNav from "../UserNav"
import { Container } from "./styles"

const CardUser = () => {

    return (
      <Container>
          <UserNav />
          <DashboardPets />
      </Container>
    )
  }
  
  export default CardUser