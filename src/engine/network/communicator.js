import Socket from 'socket.io-client'

const movement = {
  up: false,
  down: false,
  left: false,
  right: false,
}

export class Communicator {
  constructor(game) {
    this.game = game
    this.socket = Socket('localhost:3000')

    console.log('Communication established.')

    this.socket.on('message', (msg) => {
      console.log(msg)
    })

    // ### STEP 2 ###
    this.socket.on('getSocketId', (socketId) => {
      this.game.spawn(socketId)
      console.log(`Comm: ${socketId}`)
    })

    this.socket.on('sendTankArray', (tankArray) => {
      this.game.addReceivedObjectsToObjectsArray(tankArray)
    })

    this.socket.on('sendAllTanks', (all) => {
      console.log('comm: sendAllTanks', all)
      all.forEach((tnk) => {
        this.game.boem(tnk)
        console.log('tankie spawned')
      })
      console.log(this.game.gameObjects)
    })

    setInterval(() => {
      console.log('com: interval')
      // this.getAllTanksFromTanksArray()
    }, 1000 / 0.1)
  }

  // ### STEP 5 ###
  addTankToTankArray(tank) {
    tank.color = '#990'
    this.socket.emit('addTankToArray', tank)
    console.log('comm:', tank)

    this.getAllTanksFromTanksArray()
  }

  getAllTanksFromTanksArray() {
    console.log('comm: getting all tanks')
    let allTanks = this.socket.emit('getAllTanks')

    console.log('comm: getAllTanksFromTanksArray()', allTanks)
  }

  listPlayers() {}

  update(deltaTime) {
    // console.log(this.game)
  }
}
