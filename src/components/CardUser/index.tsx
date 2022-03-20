import CardPet from "../CardPets"
import UserNav from "../UserNav"
import { Container } from "./styles"

const CardUser = () => {
    return (
      <Container>
          <UserNav />
          <CardPet />
      </Container>
    )
  }
  
  export default CardUser