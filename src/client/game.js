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
    this.gameObjects = []
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
  }
  // ### STEP 3 ###
  spawn(socketId) {
    this.tank = new Tank(socketId)

    // console.log('A new tank', socketId)
    console.log('game:', this.tank)

    // ### STEP 4 ###
    this.communicator.addTankToTankArray(this.tank)
  }

  boem(tnk) {
    this.tank = new Tank(tnk.id, tnk.color)
    this.gameObjects.push(this.tank)
    console.log('game: boem()', this.gameObjects)
  }

  addReceivedObjectsToObjectsArray(receivedArray) {
    console.log('game:', this.gameObjects)
    this.gameObjects = receivedArray
    receivedArray.forEach((object) => {})
    console.log('game:', receivedArray)
  }

  getAllTanksFromTanksArray() {
    this.communicator.getAllTanksFromTanksArray()
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx))
  }

  update(deltaTime) {
    this.communicator.update(deltaTime)
    this.keyboard.update(deltaTime)
    // this.tank.update(deltaTime)

    this.gameObjects.forEach((object) => object.update(deltaTime))
  }
}
