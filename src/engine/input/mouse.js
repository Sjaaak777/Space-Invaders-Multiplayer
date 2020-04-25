export class Mouse {
  constructor(game) {
    this.game = game


    document.addEventListener('click', (event) => {
      // this.displayMsg()
      this.incrementCounter()
      // console.log('Geklikt')

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
