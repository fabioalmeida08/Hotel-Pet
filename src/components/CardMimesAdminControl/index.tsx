import Button from "../Buttons"
import { DivWrapper } from "./style"

interface typedCard {
    user?: string
    pet?: string
    service?: string
    petId: number
    setDone: Function
    done: boolean
}

const CardMimesAdmin = ({ user, pet, service, setDone,done}: typedCard) => {

    return (
        <DivWrapper>

            <h2>{user || ""}</h2>

            <h2>{pet}</h2>

            <h2>{service}</h2>

            <Button onClick={() => setDone(true)} hoverBackground={done ? "var(--primary-1)" : "#faa200"} background={done ? "var(--primary-1)" : "var(--secundary-1)"} >{done ? "Feito" : "Em espera"}</Button>

        </DivWrapper>
    )
}
export default CardMimesAdmin