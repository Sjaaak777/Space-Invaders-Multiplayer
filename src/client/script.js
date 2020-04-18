import * as NJIN from '../engine/njin'
import Socket from 'socket.io-client'
import '../engine/display/display'

const audio = new NJIN.Audio()
new NJIN.Keyboard()
new NJIN.Mouse()
const nj = new NJIN.Njin()
const scene = new NJIN.Scene()

console.log(scene.createScene())
console.log(audio.getSound())
console.log(audio.setVolume(40))
console.log(nj.testFunction())
console.log(nj.value)

const socket = Socket('localhost:3000')
const canvas = document.getElementsByTagName('canvas')[0]
const context = canvas.getContext('2d')
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
      break
    case 87: // W
      movement.up = true
      break
    case 68: // D
      movement.right = true
      break
    case 83: // S
      movement.down = true
      break
  }
})

document.addEventListener('keyup', (event) => {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false
      break
    case 87: // W
      movement.up = false
      break
    case 68: // D
      movement.right = false
      break
    case 83: // S
      movement.down = false
      break
  }
})

socket.emit('new player')

let lastTime = 0

const gameLoop = (timeStamp) => {
  let deltaTime = lastTime - timeStamp
  lastTime = timeStamp
  socket.emit('movement', movement)


  requestAnimationFrame(gameLoop)
}

socket.on('state', (players) => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'orange'
  for (let id in players) {
    const player = players[id]

    context.beginPath()
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI)
    context.fill()
  }
})

gameLoop()
