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
    })

    this.socket.on('sendTankArray', (tankArray) => {})

    this.socket.on('sendAllTanks', (storageTanksArray) => {
      storageTanksArray.forEach((tanksArrayObject) => {
        let tanksObjectId = tanksArrayObject.id
        let gameObjectsArray = this.game.gameObjects
        let tankToAdd = gameObjectsArray.find((obj) => obj.id == tanksObjectId)
        if (typeof tankToAdd === 'undefined') {
          this.game.boem(tanksArrayObject)
          console.log('tta is undefined', tanksObjectId, 'will be added.')
        } else {
          console.log(tanksObjectId, 'is present')
        }
      })
    })

    this.socket.on('updateAllTanks', (all) => {
      let go = this.game.gameObjects

      go.forEach((obj) => {
        all.forEach((element) => {
          if (element.id == obj.id) {
            obj.markedForDeletion = element.markedForDeletion
          }
        })
      })

      go = all.filter((obj) => !obj.id)
    })

    setInterval(() => {
      let go = this.game.gameObjects

      go.forEach((tnk) => {})
    }, 1000 / 0.1)
  }

  // ### STEP 5 ###
  addTankToTankArray(tank) {
    tank.color = '#990'
    this.socket.emit('addTankToArray', tank)

    this.getAllTanksFromTanksArray()
  }

  getAllTanksFromTanksArray() {
    let allTanks = this.socket.emit('getAllTanks')
  }

  listPlayers() {}

  update(deltaTime) {}
}
