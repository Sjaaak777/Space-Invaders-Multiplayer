import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)
const port = 3000

const players = {}

server.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get('/', (reg, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', (socket) => {
  socket.on('new player', () => {
    players[socket.id] = {
      x: 300,
      y: 300,
    }
  })
  socket.on('movement', (data) => {
    let player = players[socket.id] || {}
    if (data.left) {
      player.x -= 5
    }
    if (data.up) {
      player.y -= 5
    }
    if (data.right) {
      player.x += 5
    }
    if (data.down) {
      player.y += 5
    }
  })
})

setInterval(() => {
  io.sockets.emit('state', players)
}, 1000 / 60)
