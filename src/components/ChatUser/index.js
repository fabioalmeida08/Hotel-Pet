import { useEffect, useState, useRef } from 'react'
import { useAuth } from '../../contexts/AuthProvider'
import {
  DivWrapper,
  DivInput,
  DivChat,
  UlStyled,
} from './style'
import { socket } from '../../services/chat'
const UserChat = () => {
  // const chat = useRef(2)
  const io = socket
  const [message, setMessage] = useState('')
  const { userId } = useAuth()
  const sendMessage = {
    from: userId,
    to: 'admin',
    message: message,
  }
  const messages = []
  useEffect(() => {
    io.emit('join_room', userId)
    io.on('message', (data) => {
      console.log(data)
      messages.push(data)
      const li = document.createElement('li')
      li.textContent = data.message
      li.classList.add(
        data.from === 'admin' ? 'admin' : 'user'
      )
      // chat.current.appendChild(li)
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
        <UlStyled ></UlStyled>
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
export default UserChat
