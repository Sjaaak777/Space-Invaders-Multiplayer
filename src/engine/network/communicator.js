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

    this.socket.on('message', (msg) => {
      console.log(msg)
    })
  }

  incrementCounter() {
    this.socket.emit('increment')
  }

  incrementScore() {
    this.socket.emit('updateScore', this.socket.id)
  }

  removePlayer() {
    this.socket.emit('removePlayer', this.socket.id)
  }

  listPlayers() {
    this.socket.emit('listPlayers')
  }

  tankPosition() {
    this.socket.emit('tank position', this.tp)
  }

  update(deltaTime) {
    if (this.game.tank) {
      this.tp = this.game.tank.getPosition()
    }

    this.tankPosition()
  }
}
