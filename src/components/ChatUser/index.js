import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { DivWrapper,DivInput, DivChat } from "./style";
import { socket } from "../../services/chat";

const UserChat = () => {
  const chat = useRef()
  const io = socket;
  const [message, setMessage] = useState("");
  const { userId } = useAuth();
  const [receivedMessage, setReceivedMessage] = useState([]);
  const sendMessage = {
    from: "1",
    to: "admin",
    message: message,
  };
  const messages = []
  useEffect(() => {
    io.emit("join_room", "1");
    io.on("message", (data) => {
      messages.push(data)
      setReceivedMessage(prev => [...prev, data])
      console.log(data)
      const li = document.createElement('li')
      li.textContent = data.message
      li.classList.add(data.from === 'admin' ? 'admin' : 'user')
      chat.current.appendChild(li)
    });
  }, [io]);

  const handleSubmit = () => {

    io.emit("message", sendMessage);

  };

  return (
    <DivWrapper>
        <div className="superDiv">
        <h2>Chat</h2>
        </div>
      <DivChat>
        <ul ref={chat}>{messages.map((per) => console.log(per))}</ul>
      </DivChat>

      <DivInput>
        <input onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => handleSubmit()}>Enviar mensagem</button>
      </DivInput>
    </DivWrapper>
  );
};
export default UserChat;
