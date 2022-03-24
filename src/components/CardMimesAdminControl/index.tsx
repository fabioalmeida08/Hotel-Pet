import { useState } from "react"
import hotelPetApi from "../../services"
import Button from "../Buttons"
import { DivWrapper } from "./style"

interface typedCard {
    pet: {
        age: number
        hospedado: boolean
        id: number
        mimos: [
            {
                service: string,
                done: boolean
            }
        ]
        name: string
        race: string
        size: string
        specie: string
        status: [{
            emoji: string,
            activity: string,
            description: string,
            time: string
        }],
        userId: number
    }
    update : Function
}
const CardMimesAdmin = ({ pet,update }: typedCard) => {

    const [change, setChange] = useState(false)

    const data = {
        "age": pet.age,
        "hospedado": pet.hospedado,
        "id": pet.id,
        "mimos": pet.mimos,
        "name": pet.name,
        "race": pet.race,
        "size": pet.size,
        "specie": pet.specie,
        "status": pet.status,
        "userId": pet.userId

    }

    const handleSubmit = async (index: number) => {

        data.mimos[index].done = true
        hotelPetApi.put(`/pets/${pet.id}`, data, {
            headers: {
                Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem('@hotelPet:token') || ''
                )}`,
            }
        }).then((response) => {
            console.log(response)
        })
        .catch((err) => console.log(err))
        
       await update(true)

       await update(false)
   
        }

    return (
        <>
            {!change && pet.mimos.map((pets, index) => {   
                return <DivWrapper key={pet.id + pet.name + index}>

                    <h4>{pet.name}</h4>

                    <h4>{pets.service}</h4>

                    <Button onClick={() => pets.done === false && handleSubmit(index)} hoverBackground={pets.done ? "var(--primary-1)" : "#faa200"} 
                    background={pets.done ? "var(--primary-1)" : "var(--secundary-1)"} >
                        {pets.done ? "Feito" : "Em espera"}</Button>

                </DivWrapper>
            })}

        </>
    )
}
export default CardMimesAdmin