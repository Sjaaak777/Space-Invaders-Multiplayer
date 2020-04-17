import './world.css'

export default class World {
  constructor(width, height) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    this.width = width
    this.height = height
    this.context = context

    canvas.width = this.width
    canvas.height = this.height

    document.body.appendChild(canvas)
  }
}
