import CardMimos from "../CardMimos"
import Container from "./stylesDashboardMime"

const DashboardMime = () => {

  return (
    <>
      <Container>
        <div>
          <h2 className="title">Mimos</h2>
          <span></span>
        </div>
        <CardMimos title="Sortido" description="Um novo brinquedo aleatorio para o seu pet se divertir e brincar" img="asd" />
        <CardMimos title="Spa" description="Todos os cuidados que seu pet merece" img="asd" />
      </Container>
    </>
  )
}

export default DashboardMime