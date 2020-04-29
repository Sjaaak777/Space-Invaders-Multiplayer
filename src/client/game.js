import * as NJIN from '../engine/njin'
import Tank from './objects/tank'

const fire = new NJIN.Audio()
const scene = new NJIN.Scene()

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  initialization() {
    scene.createScene()
    // Create connection to localhost:3000 via communicator class.
    this.communicator = new NJIN.Communicator(this)
    // this.communicator.submitNewPlayer()
    this.keyboard = new NJIN.Keyboard(this)
    this.mouse = new NJIN.Mouse(this)
  }

  start() {
    console.log('The game is running.')
    // fire.setVolume(40)  // Test msg
    // console.log(fire.explosion) // Test msg
    // console.log(fire.laser) // Test msg
    // this.tank = new Tank(this)
    let tt = Tank
    console.log(Tank)
    this.gameObjects = []
  }

  spawn(newTank) {
    this.tank = new Tank(newTank)

    console.log('new tank', newTank)

    // this.gameObjects.push(this.tank)
    console.log(this.tnk)
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx))
    // console.log('from draw',this.gameObjects)
  }

  update(deltaTime) {
    this.communicator.update(deltaTime)
    this.keyboard.update(deltaTime)
    // this.tank.update(deltaTime)

    this.gameObjects.forEach((object) => object.update(deltaTime))
    // console.log(this.gameObjects)
  }
}
