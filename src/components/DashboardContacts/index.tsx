import { Container, ContainerInfo, ContainerHotel, ContainerAll }  from "./stylesDashboardContacts"
import DashHeader from "../DashHeader"
import UserChat from "../ChatUser"
const DashboardContacts = () => {
    return ( 
      <ContainerAll>
        <DashHeader paramn="Contato" /> 
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
            <UserChat/>
          </ContainerHotel>
         
        
        </Container>
      </ContainerAll>
    )
  }
  
  export default DashboardContacts