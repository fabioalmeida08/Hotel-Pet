import CardMimos from "../CardMimos"
import Container from "./stylesDashboardMime"
import spa from '../../assets/img/spa.jpg'
import toys from '../../assets/img/toys.png'

const DashboardMime = () => {

  return (
    <>
      <Container>
        <div>
          <h2 className="title">Mimos</h2>
          <span></span>
        </div>
        <CardMimos title="Sortido" description="Um novo brinquedo aleatorio para o seu pet se divertir e brincar" img={toys} />
        <CardMimos title="Spa" description="Todos os cuidados que seu pet merece" img={spa} />
      </Container>
    </>
  )
}

export default DashboardMime