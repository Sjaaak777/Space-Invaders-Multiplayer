import Socket from 'socket.io-client'

const movement = {
  up: false,
  down: false,
  left: false,
  right: false,
}

export class Communicator {
  constructor(game) {
    this.socket = Socket('localhost:3000')
    console.log('Communication established.')
  }

  submitNewPlayer() {
    this.socket.emit('new player')
  }

  submitMoveLeft(movement) {
    this.socket.emit('movement', movement)
    console.log('Move Left submitted', movement)
  }

  submitMoveRight(movement) {
    this.socket.emit('movement', movement)
    console.log('Move Right submitted')
  }

  updateScore() {
    //
  }
}
