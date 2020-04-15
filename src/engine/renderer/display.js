import './style.css'

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600

const knoel = 45

document.body.appendChild(canvas)

let english = {
    basic: 'Hello',
    advanced: 'Good day there'
}

