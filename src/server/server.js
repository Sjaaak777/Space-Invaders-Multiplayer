//########### BEGIN SERVER PART ###########//
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

//########### END SERVER PART ###########//

//########### BEGIN INIT ON CONNECTION ###########//
io.on('connect', (socket) => {
  // ### STEP 1 ###
  // <== SEND SOCKET ID TO CLIENT
  socket.emit('getSocketId', socket.id)

  // <== NOTIFY: players on new connection
  socket.emit('message', `Your Id: ${socket.id}`)
  socket.broadcast.emit('message', `New Player: ${socket.id}`)

  // CREATE: player in players array ==>
  players.addPlayer(socket.id)

  // ### STEP 6 ####
  socket.on('addTankToArray', (tank) => {
    tanks.addTank(tank)
  })

  socket.on('getAllTanks', () => {
    let tankArray = tanks.getTanks()
    io.emit('sendAllTanks', tankArray)
  })

  tanks.listTanks()

  //########### BEGIN ON DISCONNECT ###########//
  socket.on('disconnect', () => {
    io.emit('message', `Player: ${socket.id} disconnected.`)
    players.removePlayer(socket.id)
    tanks.removeTankWithMarkedForDeletion(socket.id)

    tanks.setMarkedForDeletion(socket.id)

    let returnedTanks = tanks.getTanks()
    // console.log('ReturnedTanks', returnedTanks)
  })
  //########### END ON DISCONNECT ###########//

  // update Score 10 times per second
})

setInterval(() => {
  tanks.tanks.forEach((element) => {
    console.log(`Id: ${element.id} MfD: ${element.markedForDeletion}`)
  })
}, 1000 / 0.3)

setInterval(() => {
  let tankArray = tanks.getTanks()
  io.emit('updateAllTanks', tankArray)
}, 1000 / 0.5)

setInterval(() => {
  tanks.removeTank()
}, 1000 / 0.05)
