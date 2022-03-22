import { useState } from "react"
import CardMimos from "../CardMimos"
import ConfirmBuy from "../ConfirmBuy"
import Container from "./stylesDashboardMime"

const DashboardMime = () => {
      const [ modal , setModal] = useState(false)
      const [service , setServiceType] = useState('')
   const alterateState = (param : boolean) => {
     setModal(param)
   }
   const setServie = (serviceType : string) => {
    setServiceType(serviceType)
   }
    return (
      <>
        {modal ? <ConfirmBuy setModal={alterateState} service={service} /> :
         <Container>
          <div>
            <h2 className="title">Mimos</h2>
            <span></span>
          </div>
        <CardMimos title="Sortido" service={setServie} setModal={alterateState} description="Um novo brinquedo aleatorio para o seu pet se divertir e brincar" img="asd"/>
          <CardMimos title="Spa"  service={setServie} setModal={alterateState}  description="Todos os cuidados que seu pet merece" img="asd"/>
        </Container>}
      </>
    )
  }
  
  export default DashboardMime