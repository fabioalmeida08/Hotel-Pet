import { useEffect, useState, useRef } from 'react'
import {
  DivWrapper,
  DivInput,
  DivChat,
  UlStyled,
} from './style'
import { socket } from '../../services/chat'

const AdminChat = () => {

   const chat = useRef()
  const io = socket
  const [message, setMessage] = useState('')
  const sendMessage = {
    from: 'admin',
    to: 2,
    message: message,
  }
  useEffect(() => {
    io.emit('join_room', 'admin')
    io.on('message', (data) => {
      const li = document.createElement('li')
      li.textContent = data.message
      li.classList.add(
        data.from === 'admin' ? 'admin' : 'user'
      )
       chat.current?.appendChild(li)
    })
  }, [io])
  const handleSubmit = () => {
    io.emit('message', sendMessage)
    setMessage('')
  }
  return (
    <DivWrapper>
      <div className='superDiv'>
        <h2>Contate-nos</h2>
      </div>
      <DivChat>
        <UlStyled ref={chat} ></UlStyled>
      </DivChat>
      <DivInput>
        <input
          placeholder='Nova mensagem'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>
          Enviar mensagem
        </button>
      </DivInput>
    </DivWrapper>
  )
}
export default AdminChat
