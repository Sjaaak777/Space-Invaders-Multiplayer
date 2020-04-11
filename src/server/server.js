import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)
const port = 3000

server.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

app.get('/', (reg, res )=>{
    res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', socket =>{
    console.log(`Connection:${socket.id}`)
})