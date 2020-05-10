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
    this.communicator = new NJIN.Communicator(this)
    this.keyboard = new NJIN.Keyboard(this)
    this.mouse = new NJIN.Mouse(this)
  }

  start() {
    console.log('The game is running.')
  }

  // ### STEP 3 ###
  spawn(socketId) {
    this.tank = new Tank(socketId)

    // ### STEP 4 ###
    this.communicator.addTankToTankArray(this.tank)
  }

  boem(tnk) {
    this.tank = new Tank(tnk.id, tnk.color)
    this.gameObjects.push(this.tank)
  }

  addReceivedObjectsToObjectsArray(receivedArray) {
    this.gameObjects = receivedArray
    receivedArray.forEach((object) => {})
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

    this.gameObjects.forEach((object) => object.update(deltaTime))

    this.gameObjects = this.gameObjects.filter((obj) => !obj.markedForDeletion)
  }
}
