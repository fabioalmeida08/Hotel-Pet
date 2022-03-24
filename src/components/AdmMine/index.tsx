import { useState } from "react"
import hotelPetApi from "../../services"
import CardMimesAdmin from "../CardMimesAdminControl"
import { Container,DivOrganizer } from "./stylesAdmMine"
interface  TypedObj{
    age: number
    hospedado: boolean
    id: number
    mimos: [
        {
            type: string,
            done: true
        }
    ]
    name: string
    race: string
    size: string
    specie: string
    status:  [{
        emoji: string,
        activity: string,
        description: string,
        time: string
    }]
    userId: number
}
const AdmMine = () => {
    const [hosted, setIsHosted] = useState([])

       if(hosted.length <= 0 ){
           hotelPetApi.get("/pets", {
   
           }).then((response) => {
              const isHosted = response.data.filter((pet : TypedObj) => pet.hospedado === true && pet.mimos.length > 0)
              setIsHosted(isHosted)
           }).catch((err) => console.log(err))

       }

        
       
           
    return (
        <>
            <Container>
                <h3>Controle de Mimos</h3>
               <DivOrganizer>
                   <h2>Pet</h2>
                   <h2>Serviço</h2>
                   <h2 className="SizeBtn" >Feito</h2>
                   <span></span>
               </DivOrganizer>
                 {hosted.length > 0 && hosted.map((pet) => {
                     return  <CardMimesAdmin  pet={pet}/>
                 })} 
    
            </Container>
        </>
    )

}
export default AdmMine