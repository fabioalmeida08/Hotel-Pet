import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { DivWrapper,DivChat } from "./style";
import { socket } from "../../services/chat";

const UserChat = () => {
  const io = socket;
  const [message, setMessage] = useState("");
  const { userId } = useAuth();
  const [receivedMessage, setReceivedMessage] = useState([]);
  const obj  = {
      from : '1',
      to : "admin",
      message : "salve quebrada"
  }
  useEffect(() => {
    io.emit("join_room", '1');
    io.on("message", (data) => {
      console.log(data);
      setReceivedMessage(prev => [...prev, data])
    });
  }, []);

  const handleSubmit = () => {
    io.emit('message', obj)
  };

  return (
    <DivWrapper>
      <DivChat>
        <ul>
          {receivedMessage.map(message => <li>{message.message}</li>)}
        </ul>
      </DivChat>

      <div>
        <input onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => handleSubmit()}>Enviar mensagem</button>
      </div>
    </DivWrapper>
  );
};
export default UserChat;
