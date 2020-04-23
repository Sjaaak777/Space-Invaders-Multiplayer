import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)
const port = 3000

server.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get('/', (reg, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

let count = 0

io.on('connection', (socket) => {


  //- If new player connects

  //  -- store new player

  //  -- send 'new player connected' to all other players

  socket.on('new player', () => {
    // players[socket.id]
    console.log(`New player: ${socket.id}`)
    io.emit('store player', socket.id)

    // socket.emit('countUpdated', count)
  })

  socket.on('tank position', (position) => {
    io.emit('tank position', position)
    // console.log(position)
    
  })

  setInterval(() => {
    io.sockets.emit('state', 'status')

    // io.sockets.emit('state', players)
    count++
    // io.sockets.emit('looper', 'broem')

    // io.sockets.emit('tank left', 'steering left')

    // console.log('looping from server')
  }, 1000 / 60)
})
