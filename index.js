const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
io.on('connection',socket =>{
    socket.on('JoinChatRoom',(UserName,RoomName)=>{
        console.log("User:"+UserName)
        console.log("Room:"+RoomName)
       socket.broadcast.emit("GetMyUser",UserName,RoomName,socket.id)  
    });
})
http.listen(1650,function (){
    console.log("Server listening on port 5000")
})
