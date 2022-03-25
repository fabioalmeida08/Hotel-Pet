import CardMimos from "../CardMimos"
import DashHeader from "../DashHeader"
import Container from "./stylesDashboardMime"
import spa from '../../assets/img/spa.jpg'
import toys from '../../assets/img/toys.png'
import { toast } from "react-toastify"
import axios from "axios"
import { useState } from "react"

const DashboardMime = () => {
  
  return (
    <div style={
      {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px 10px',
      }
  } >
       <DashHeader paramn="Mimos" />
      <Container>
        <CardMimos title="Sortido" description="Um novo brinquedo aleatorio para o seu pet se divertir e brincar" img={toys} />
        <CardMimos title="Spa" description="Todos os cuidados que seu pet merece" img={spa} />
      </Container>
    </div>
  )
}

export default DashboardMime