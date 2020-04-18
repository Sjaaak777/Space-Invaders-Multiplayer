import World from '../engine/display/world'
import Game from './game'

const world = new World(800, 600)
const ctx = world.context
const game = new Game(world.width, world.height)

game.initialization()
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
