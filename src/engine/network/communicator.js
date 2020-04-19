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

    this.socket.on('countUpdated', (data) => {
      console.log('Count updated.', data)
    })

    this.socket.on('looper', (data) => {
      console.log(data)
    })

    this.socket.on('tank left', (data) => {
      this.game.tank.setPosition(data)
      // console.log(this.game.tank.position.x)
      // console.log('what come in', data)
    })

    this.socket.on('tank right', (data) => {
      this.game.tank.setPosition(data)
      // console.log(this.game.tank.position.x)
      // console.log('what come in', data)
    })
  }

  submitNewPlayer() {
    this.socket.emit('new player')
    // console.log('New player method', this.socket.id)
  }

  tankLeft(position) {
    this.socket.emit('tank left', position)
    // console.log('Client says: tank moved left', position)
  }

  tankRight(position) {
    this.socket.emit('tank right', position)
    // console.log('Client says: tank moved right', position)
  }
}
