import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'
import Players from './storage/players'
import Tanks from './storage/tanks'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)
const port = 3000

const players = new Players()
const tanks = new Tanks()

server.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get('/', (reg, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

let count = 0

io.on('connect', (socket) => {
  // ### STEP 1 ###
  socket.emit('getSocketId', socket.id)

  // NOTIFY: players
  socket.emit('message', `Your Id: ${socket.id}`)
  socket.broadcast.emit('message', `New Player: ${socket.id}`)

  console.log('srv:', socket.id)

  // CREATE: player in players array
  players.addPlayer(socket.id)

  players.listPlayers()

  // ### STEP 6 ####
  socket.on('addTankToArray', (tank) => {
    tanks.addTank(tank)
  })

  socket.on('getAllTanks', () => {
    let tankArray = tanks.getTanks()
    console.log('srv: getAllTanks()', tankArray)
    io.emit('sendAllTanks', tankArray)
  })

  tanks.listTanks()
  // socket.emit('addPlayerToList', socket.id)

  socket.on('disconnect', () => {
    io.emit('message', `Player: ${socket.id} disconnected.`)
    players.removePlayer(socket.id)
    tanks.removeTank(socket.id)
    console.log('srv: disconnect', socket.id)
  })

  // update Score 10 times per second
  setInterval(() => {
    // console.log('Interval: srv')
  }, 1000 / 0.5)
})
