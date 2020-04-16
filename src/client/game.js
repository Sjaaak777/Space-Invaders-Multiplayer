import * as NJIN from '../engine/njin'
import Socket from 'socket.io-client'
import '../engine/renderer/display'

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    //
    console.log('The game has started!')
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
