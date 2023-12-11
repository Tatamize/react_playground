import express, { Request, Response } from 'express';
import { createServer } from 'node:http';
import {Server} from 'socket.io';
import cors from 'cors';

// make a server by express
const app = express();
const server = createServer(app);

// make this server as a socket.io WebSockets protocol server
// cors option is needed to accept the request from other server without warning 
const ioserver = new Server(server, {
  cors: {
    origin: "http://localhost:3030"
  }
});

app.use(cors());

let usernum : number = 1; // dummy user number (1 or 2)
let pos_a : number = 0;
let pos_b : number = 0;


ioserver.on('connection', (socket) => {
  usernum++;
  if (usernum == 3)
    usernum = 1;

  // to let the client his name (usernum)
  socket.emit('get name', usernum); // 

  // handle 'move paddle' event (just send the same message to every one)
  // pos: [number, number] = [usernum, position]
  socket.on('move paddle', (pos: [number, number]) => {
    console.log("move paddle");
    console.log(pos[0]);
    if (pos[0] == 1)
    {
      console.log("A "+ pos[1]);
      if ((pos_a += pos[1]) > 100)
        pos_a = 100;
      if (pos_a < 0)
        pos_a = 0;
      console.log("A "+ pos_a);
      ioserver.emit('move paddle', [1 , pos_a]); // broadcast A paddle
    }
    if (pos[0] == 2)
    {
      console.log("B " + pos[1]);
      if ((pos_b += pos[1]) > 100)
        pos_b = 100;
      if (pos_b < 0)
        pos_b = 0;
      console.log("B " + pos_b);
      ioserver.emit('move paddle', [2 , pos_b]); // broadcast B paddle
    }
    
  });


  // disconnect event is reserved by socket.io
  socket.on("disconnect", (reason) => {
    pos_a = 50;
    pos_b = 50;
  });
});


server.listen(8080, () => {
  console.log('server running at http://localhost:8080');
});