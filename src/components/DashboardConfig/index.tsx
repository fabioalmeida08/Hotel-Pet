import { Container, Header, Main } from "./stylesDashboardConfig"
import pug from "../../assets/img/pugWarning.jpg"
const DashboardConfig = () => {
    return (
      <Container>
        <Header>
          <h2>Configurações</h2>
          <div></div>
        </Header>
        <Main>
          <img src={pug} alt="" />
        </Main>
      </Container>
    )
  }
  
  export default DashboardConfig