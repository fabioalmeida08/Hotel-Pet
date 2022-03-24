import io from 'socket.io-client'

export const socket = io.connect('https://chathotelpet.herokuapp.com/')

socket.emit('join_room', 'teste')
socket.emit('message', {message: 'oie', room: 'teste'})
socket.on('message', data => {
  console.log(data)
})