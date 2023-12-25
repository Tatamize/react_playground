import express, { Request, Response } from 'express';
import { createServer } from 'node:http';
import {Server} from 'socket.io';
import cors from 'cors';

// make a server by express
const app = express();
const server = createServer(app);

// make this server as a socket.io WebSockets protocol server
// cors option is needed to accept the request from other server without warning 
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3030"
  }
});

app.use(cors());


io.on('connection', (socket) => {
  console.log('user connected');
  console.log(socket.rooms);

  // handle message on 'join a room' event
  // [string, string] = [roomID, userID]
  socket.on('join a room', (msg: [string, string]) => {
    socket.join(msg[0]);
    io.to(msg[0]).emit('general', msg[1]+" joined this room");
    console.log(socket.rooms);
  });

  // handle message on 'chat message' event
  // [string, string, string] = [roomID, userID, message]
  socket.on('chat message', (msg: [string, string, string]) => {
    io.to(msg[0]).emit('chat message', [msg[1], msg[2]]);
    console.log('message: ' + msg[2]);
  });

  // disconnect event is reserved by socket.io
  socket.on("disconnect", (reason) => {
    console.log("user disconnected");
  });
});


server.listen(3333, () => {
  console.log('server running at http://localhost:3333');
});