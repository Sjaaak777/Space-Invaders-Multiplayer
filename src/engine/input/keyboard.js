export class Keyboard {
  constructor(game) {
    this.communicator = game.communicator
    console.log('cm', this.communicator)
    console.log('Keyboard listener created.')
    console.log('kb', game)

    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 65: // A
          this.communicator.tankLeft(game.tank.position.x)
          game.tank.moveLeft()
          break
        case 87: // W
          // movement.up = true
          break
        case 68: // D
          this.communicator.tankRight(game.tank.position.x)
          game.tank.moveRight()
          break
        case 83: // S
          // movement.down = true
          break
      }
      // this.displayKeycode(movement)
    })

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 65: // A
          game.tank.stop()
          // movement.left = false
          break
        case 87: // W
          // movement.up = false
          break
        case 68: // D
          game.tank.stop()
          // movement.right = false
          break
        case 83: // S
          // movement.down = false
          break
      }
    })
  }

  // displayKeycode(movement) {
  //   console.log(movement, event)
  // }
  // Methods
  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime))
    console.log('from keyboard')
  }
}
