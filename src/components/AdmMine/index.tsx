import { useEffect, useState } from "react"
import hotelPetApi from "../../services"
import CardMimesAdmin from "../CardMimesAdminControl"
import DashHeader from "../DashHeader"
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
    const [hosted, setIsHosted] = useState<TypedObj[]>([])
    useEffect(() => {
        if(hosted.length <= 0 ){
            hotelPetApi.get("/pets", {
                
            }).then((response) => {
                const isHosted = response.data.filter((pet : TypedObj) => pet.hospedado === true && pet.mimos.length > 0)
                console.log(isHosted)
                setIsHosted(isHosted)
            }).catch((err) => console.log(err))
        }
    },[])

        
       
           
    return (
        <>
            <Container>
            <DashHeader paramn="Mimos" /> 

               <DivOrganizer>
                   <h2>Pet</h2>
                   <h2>Serviço</h2>
                   <h2 className="SizeBtn" >Feito</h2>
                   <span></span>
               </DivOrganizer>
                 {hosted?.map((pet) => {
                     console.log(pet)
                     return  <CardMimesAdmin  pet={pet} key={pet.id}/>
                 })} 
    
            </Container>
        </>
    )

}
export default AdmMine