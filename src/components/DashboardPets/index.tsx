import Container  from "./stylesDashboardPets"
import CardPet from "../CardPets"
import CardRegisterPet from "../CardRegisterPet"

const DashboardPets = () => {

    // Se não tiver pets, a pagina será diferente

    const handleClick = () => {
        (<CardRegisterPet />)
    }

    return (
      <Container>
          <CardPet />
          <button className="button" onClick={() => handleClick()}>+</button>

      </Container>
    )
  }
  
  export default DashboardPets