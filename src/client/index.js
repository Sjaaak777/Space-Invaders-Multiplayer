import World from '../engine/renderer/world'
import Game from './game'

let world = new World()
let ctx = world.context
let game = new Game(world.width, world.height)

game.start()

let lastTime = 0

function gameLoop(timeStamp) {
  let deltaTime = lastTime - timeStamp
  lastTime = timeStamp

  ctx.clearRect(0, 0, world.width, world.height)

  game.update(deltaTime)
  game.draw(ctx)

  requestAnimationFrame(gameLoop)
}

gameLoop()
