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
                type: string,
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
}

const CardMimesAdmin = ({ pet }: typedCard) => {

    const [done, setIsDone] = useState(pet.mimos[0].done)



    const data = {
        "age": pet.age,
        "hospedado": pet.hospedado,
        "id": pet.id,
        "mimos": [
            {
                "type": pet.mimos[0].type,
                "done": true
            }
        ],
        "name": pet.name,
        "race": pet.race,
        "size": pet.size,
        "specie": pet.specie,
        "status": [{
            "emoji": pet.status[0].emoji,
            "activity": pet.status[0].activity,
            "description": pet.status[0].description,
            "time": pet.status[0].time
        }],
        "userId": pet.userId

    }

    const handleSubmit = () => {

        if (done === false) {
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

            setIsDone(true)
        }

    }


    return (
        <DivWrapper key={pet.id + pet.name}>

            <h4>{pet.name}</h4>
        
                {pet.mimos.map((pets) => {

                    return <h4>{pets.type}</h4>

                })}
        
            <Button onClick={() => done ? "" : handleSubmit} hoverBackground={done ? "var(--primary-1)" : "#faa200"} background={done ? "var(--primary-1)" : "var(--secundary-1)"} >{done ? "Feito" : "Em espera"}</Button>
        </DivWrapper>
    )
}
export default CardMimesAdmin