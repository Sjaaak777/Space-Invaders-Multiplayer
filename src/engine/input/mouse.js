export class Mouse {
  constructor() {
    document.addEventListener('click', () => {
      this.displayMsg()
    })
    this.clickCounter = 0
  }

  displayMsg() {
    this.clickCounter++
    console.log(`Counter: ${this.clickCounter}`)
    console.log(event)
  }
}
