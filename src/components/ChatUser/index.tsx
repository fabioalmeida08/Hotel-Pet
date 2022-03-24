import { useState } from "react"
import { useAuth } from "../../contexts/AuthProvider"
import { DivWrapper } from "./style"
const UserChat = () => {

    const [message, setMessage] = useState("")
    const { userId } = useAuth()
    const [receivedMessage, setReceivedMessage] = useState([])
      

    
    const handleSubmit = (message : string) => {
         return message
    }

    return (
    <DivWrapper>

    <div>
        <ul>

        </ul>
    </div>
    
    <div>
        <input onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => handleSubmit(message)}>Enviar mensagem</button>
    </div>

    </DivWrapper>
    )
}
export default UserChat 