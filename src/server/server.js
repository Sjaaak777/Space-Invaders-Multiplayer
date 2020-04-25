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

io.on('connection', (socket) => {
  players.addPlayer(socket.id)

  socket.broadcast.emit('message', `User: ${socket.id} connected.`)

  socket.emit('countUpdated', count)


  socket.on('updateScore', (id) => {
    players.updateScore(id)
    console.log('id', id)
  })

  socket.on('increment', () => {
    count++
    console.log('Server Bijteller:', count)
    io.emit('countUpdated', count)
  })

  socket.on('clear players', () => {
    players.clearPlayersList()
  })

  socket.on('new player', () => {
    console.log(`New player: ${socket.id}`)
    io.emit('savePlayer', socket.id)
  })

  socket.on('tank position', (position) => {
    io.emit('tank position', position)
  })

  setInterval(() => {}, 1000 / 60)

  socket.on('disconnect', () => {
    io.emit('message', `User: ${socket.id} left.`)
    console.log(`${socket.id} left.`)
    players.removePlayer(socket.id)
    // players.clearPlayersList()
    players.listPlayers()
  })
})
