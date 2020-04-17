import * as NJIN from '../engine/njin'
import Socket from 'socket.io-client'

import Tank from './objects/tank'

const scene = new NJIN.Scene()
const fire = new NJIN.Audio()

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    console.log(scene.createScene())
    console.log('The game is running.')
    console.log(fire.explosion)
    console.log(fire.laser)
    this.tank = new Tank(this)
    this.gameObjects = [this.tank]
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => object.draw(ctx))
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime))
  }
}
