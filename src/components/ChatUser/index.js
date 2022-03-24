import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { DivWrapper,DivInput, DivChat,UlStyled } from "./style";
import { socket } from "../../services/chat";

const UserChat = () => {
  const io = socket;
  const [message, setMessage] = useState("");
  const { userId } = useAuth();
  const [receivedMessage, setReceivedMessage] = useState([]);
  const sendMessage = {
    from: "1",
    to: "admin",
    message: "message",
  };
  useEffect(() => {
      io.emit("join_room", "1");
      io.on("message", (data) => {
      
        setReceivedMessage((prev) => [...prev, data]);
      });
}, []);

  const handleSubmit = () => {

    io.emit("message", sendMessage);

  };

  return (
    <DivWrapper>
        <div className="superDiv">
        <h2>Chat</h2>
        </div>
      <DivChat>
        {/* <ul>{receivedMessage.map((per) => console.log(per))}</ul> */}
        <UlStyled>
            <li>Fabio Back-End</li>
            <li>Front-End que não gosta de Front</li>
            <li>Socorro</li>
            <li>Estilizar cansa</li>
            <li>Igor ajeita rapido ai </li>
        </UlStyled>
      </DivChat>

      <DivInput>
        <input onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => handleSubmit()}>Enviar mensagem</button>
      </DivInput>
    </DivWrapper>
  );
};
export default UserChat;
