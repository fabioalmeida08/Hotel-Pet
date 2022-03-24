import { Container, Main } from "./stylesDashboardConfig"
import pug from "../../assets/img/pugWarning.jpg"
import DashHeader from "../DashHeader"
const DashboardConfig = () => {
    return (
      <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px 10px',
        }
    } >
      <Container>
        <DashHeader paramn="Configurações" />
        <Main>
          <img src={pug} alt="" />
        </Main>
      </Container>
      </div>
    )
  }
  
  export default DashboardConfig