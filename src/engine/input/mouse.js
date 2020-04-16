export class Mouse {
  constructor() {
    document.addEventListener('click', (event) => {
      this.displayMsg()
      console.log('Geklikt')
    })
    this.clickCounter = 0
  }

  displayMsg() {
    this.clickCounter++
    console.log(`Counter: ${this.clickCounter}`)
    console.log(event)
  }
}
