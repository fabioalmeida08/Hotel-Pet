import CardMimos from "../CardMimos"
import DashHeader from "../DashHeader"
import Container from "./stylesDashboardMime"

const DashboardMime = () => {

  return (
    <>
      <Container>
        <DashHeader paramn="Mimos" />
        <CardMimos title="Sortido" description="Um novo brinquedo aleatorio para o seu pet se divertir e brincar" img="asd" />
        <CardMimos title="Spa" description="Todos os cuidados que seu pet merece" img="asd" />
      </Container>
    </>
  )
}

export default DashboardMime