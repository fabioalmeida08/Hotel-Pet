import CardMimos from "../CardMimos"
import DashHeader from "../DashHeader"
import Container from "./stylesDashboardMime"
import spa from '../../assets/img/spa.jpg'
import toys from '../../assets/img/toys.png'

const DashboardMime = () => {

  return (
    <>
      <Container>
       <DashHeader paramn="Mimos" />
        <CardMimos title="Sortido" description="Um novo brinquedo aleatorio para o seu pet se divertir e brincar" img={toys} />
        <CardMimos title="Spa" description="Todos os cuidados que seu pet merece" img={spa} />
      </Container>
    </>
  )
}

export default DashboardMime