const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var publicPath = path.join(__dirname , '/../public');
var port = process.env.PORT || 3000
var app = express();
var server = http.createServer(app);
var io = socketIO(server)

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('one user connected');

  socket.on('disconnect',()=>{
    console.log('user disconnected');
  });
});
server.listen(port,()=>{
  console.log(`server is start up on port ${port}`);
});
