import * as NJIN from '../engine/njin'
import Socket from 'socket.io-client'
import Tank from './objects/tank'

const fire = new NJIN.Audio()
const scene = new NJIN.Scene()

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.socket = Socket('localhost:3000')
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  initialization() {
    scene.createScene()
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
    this.tank = new Tank(this)
    this.gameObjects = [this.tank]
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx))
  }

  update(deltaTime) {
    this.communicator.update(deltaTime)
    this.keyboard.update(deltaTime)
    this.tank.update(deltaTime)

    this.gameObjects.forEach((object) => object.update(deltaTime))
  }
}
