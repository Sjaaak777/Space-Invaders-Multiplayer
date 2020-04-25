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
    console.log('I am:', this.socket.id)



    this.socket.on('message', (msg)=>{
      console.log(msg)
    })

    this.socket.on('countUpdated', (count) => {
      console.log('The count has been updated:', count)
    })

   

    this.socket.on('savePlayer', (data) => {
      // this.game.storage.addPlayer(this.socket.id)
      // this.game.storage.listPlayers()
    })

    this.socket.on('looper', (data) => {
      console.log(data)
    })
  }

  incrementCounter() {
    // console.log('Client: incrementing')
     this.socket.emit('increment')
  }

  incrementScore() {
    this.socket.emit('updateScore', this.socket.id)
  
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
