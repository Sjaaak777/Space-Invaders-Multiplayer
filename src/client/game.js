import * as NJIN from '../engine/njin'
import Socket from 'socket.io-client'

const scene = new NJIN.Scene()
const fire = new NJIN.Audio()

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    //
    console.log(scene.createScene())
      console.log('The game is running.')
      console.log(fire.explosion)
      console.log(fire.laser)
    //   scene.createScene()
  }

  draw(ctx) {
    //
    //   console.log('draw method from game')
  }

  update(deltaTime) {
    //
    //   console.log('update method from game')
  }
}
