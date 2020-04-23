import Socket from 'socket.io-client'

const movement = {
  up: false,
  down: false,
  left: false,
  right: false,
}

export class Communicator {
  constructor(game) {
    this.tp = 0
    this.game = game
    this.socket = Socket('localhost:3000')
    console.log('Communication established.')

    this.socket.on('countUpdated', (data) => {})

    this.socket.on('store player', (data) => {
      this.game.storage.addPlayer(this.socket.id)
      this.game.storage.listPlayers()
    })

    this.socket.on('looper', (data) => {
      console.log(data)
    })
  }

  submitNewPlayer() {
    this.socket.emit('new player')
  }

  tankPosition() {
    this.socket.emit('tank position', this.tp)
  }

  update(deltaTime) {
    this.tp = this.game.tank.getPosition()

    this.tankPosition()
  }
}
