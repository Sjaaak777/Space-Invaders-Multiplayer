let width = 800
let height = 600

let firePower = 50
let speed = 7

export default class Tank {
  constructor( id, color) {

    this.id = id
    this.name = 'Tank'
    this.gameWidth = width
    this.gameHeight = height
    this.width = 70
    this.height = 15
    this.color = color
    this.firePower = firePower
    this.speed = 0
    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height - 1,
    }
    this.markedForDeletion = false
  }



  spawnTank(id) {
    console.log('tankId', id)
  }

  getPosition() {
    return this.position.x
  }

  setPosition(position) {
    console.log('from tankie', position)
    this.game.tank.position.x = position
  }

  moveLeft() {
    this.speed = -speed
  }
  moveRight() {
    this.speed = +speed
  }
  stop() {
    this.speed = 0
  }
  shoot() {
    this.game.bullets.push(new Bullet(this.game, firePower))
    this.game.ui.updateBulletCount()
    this.game.sound.playLaser()
  }

  changeColor(color) {
    this.color = color
  }
  upgradeSpeed() {
    speed = 10
  }
  upgradeFirepower() {
    firePower += 50
  }

  reset() {
    speed = 5
    firePower = 50
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.fillRect(
      this.position.x + 20,
      this.position.y - 10,
      this.width - 40,
      this.height
    )
    ctx.fillRect(
      this.position.x + 30,
      this.position.y - 20,
      this.width - 60,
      this.height
    )
  }

  update(deltaTime) {
    this.position.x += this.speed

    if (this.position.x <= 0) {
      this.position.x = 0
    }

    if (this.position.x + this.width >= this.gameWidth) {
      this.position.x = this.gameWidth - this.width
    }
  }
}
