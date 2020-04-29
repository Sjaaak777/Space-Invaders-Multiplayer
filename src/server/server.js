import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'
import Players from './storage/players'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)
const port = 3000

const players = new Players()

server.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get('/', (reg, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

let count = 0

io.on('connect', (socket) => {
  console.log('New connection :', socket.id)
  socket.emit('message', `Connected: ${socket.id}`)
  players.addPlayer(socket.id)
  players.listPlayers()



  socket.emit('addPlayerToList', socket.id)

  socket.on('disconnect', () => {
    io.emit('message', `Player: ${socket.id} disconnected.`)
    players.removePlayer(socket.id)
    console.log('Connection lost:', socket.id)
  })

  //
})
