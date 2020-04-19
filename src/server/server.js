import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)
const port = 3000

// const players = {}

server.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get('/', (reg, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

let count = 0

io.on('connection', (socket) => {
  socket.on('new player', () => {
    // players[socket.id]
    console.log(`New player: ${socket.id}`)

    socket.emit('countUpdated', count)
  })

  socket.on('tank left', (position) => {
    io.sockets.emit('tank left', position)
    // console.log('Server says: the tank moved left', position)
  })

  socket.on('tank right', (position) => {
    io.sockets.emit('tank right', position)
    // console.log('Server says: the tank moved right', position)
  })

  setInterval(() => {
    // io.emit('tank left')

    // io.sockets.emit('state', players)
    count++
    // io.sockets.emit('looper', 'broem')

    // io.sockets.emit('tank left', 'steering left')

    // console.log('looping from server')
  }, 1000 / 60)
})
