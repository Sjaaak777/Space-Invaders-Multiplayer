export class Keyboard {
  constructor(game) {
    console.log('Keyboard listener created.')

    const movement = {
      up: false,
      down: false,
      left: false,
      right: false,
    }

    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 65: // A
          movement.left = true
          game.tank.moveLeft()
          // console.log('Moving Left')
          break
        case 87: // W
          movement.up = true
          break
        case 68: // D
          movement.right = true
          game.tank.moveRight()
          break
        case 83: // S
          movement.down = true
          break
      }
      this.displayKeycode(movement)
    })

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 65: // A
          game.tank.stop()
          movement.left = false
          break
        case 87: // W
          movement.up = false
          break
        case 68: // D
          game.tank.stop()
          movement.right = false
          break
        case 83: // S
          movement.down = false
          break
      }
    })
  }

  displayKeycode() {
    console.log(event)
  }
  // Methods
}
