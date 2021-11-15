const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection',socket =>{
    socket.on('textmessage',({message,name})=>{
        if (socket.broadcast.emit('message',{message,name})) {
            console.log("Message sent: "+message)
            console.log("Sent By: "+name)        
        }
        
        
    } )
})
http.listen(4000,function (){
    console.log("Server listening on port 4000")
})