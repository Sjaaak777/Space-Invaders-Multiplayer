export class Mouse {
  constructor(game) {
    this.game = game

    document.addEventListener('click', (event) => {
      // this.incrementCounter()
      this.game.communicator.listPlayers()
    })
    this.clickCounter = 0
  }

  displayMsg() {
    this.clickCounter++
    console.log(`Counter: ${this.clickCounter}`)
    console.log(event)
  }

  incrementCounter() {
    this.game.communicator.incrementCounter()
  }
}
