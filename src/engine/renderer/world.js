export default class World {
  constructor() {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    this.width = 800
      this.height = 600
      this.context = context

    canvas.width = this.width
    canvas.height = this.height

    document.body.appendChild(canvas)
  }
}
