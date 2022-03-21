import { Container, ContainerInfo, ContainerHotel, ContainerAll, ContainerChat }  from "./stylesDashboardContacts"
import map from "../../assets/svg/map.svg"
const DashboardContacts = () => {
    return ( 
      <ContainerAll>
          <h2>Contatos</h2>
        <Container>
          <ContainerHotel>
            <ContainerInfo>
              <h3>Telefone:</h3>
              <p>(00) 0000-0000</p>
            </ContainerInfo>
            <ContainerInfo>
              <h3>Whatsapp:</h3>
              <p>(00) 99999-9999</p>
            </ContainerInfo>
            <ContainerInfo>
              <h3>Endereço:</h3>
              <p>Av. Parana, do outro lado de lá, nº1</p>
            </ContainerInfo>
            <img src={map} alt="" />
            
          </ContainerHotel>
          <ContainerChat></ContainerChat>
        </Container>
      </ContainerAll>
    )
  }
  
  export default DashboardContacts