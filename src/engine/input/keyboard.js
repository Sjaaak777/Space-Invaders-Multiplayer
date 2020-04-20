export class Keyboard {
  constructor(game) {
    this.game = game
    this.communicator = game.communicator
    console.log('cm', this.communicator)
    console.log('Keyboard listener created.')
    console.log('kb', game)

    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 65: // A
          game.tank.moveLeft()
          break
        case 87: // W
          // movement.up = true
          break
        case 68: // D
          game.tank.moveRight()
          break
        case 83: // S
          // movement.down = true
          break
      }
    })

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 65: // A
          game.tank.stop()
          break
        case 87: // W
          break
        case 68: // D
          game.tank.stop()
          break
        case 83: // S
          break
      }
    })
  }

  update(deltaTime) {}
}
