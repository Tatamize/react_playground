"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_http_1 = require("node:http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
// make a server by express
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
// make this server as a socket.io WebSockets protocol server
// cors option is needed to accept the request from other server without warning 
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3030"
    }
});
app.use((0, cors_1.default)());
io.on('connection', (socket) => {
    console.log('user connected');
    console.log(socket.rooms);
    // handle message on 'join a room' event
    // [string, string] = [roomID, userID]
    socket.on('join a room', (msg) => {
        socket.join(msg[0]);
        io.to(msg[0]).emit('general', msg[1] + " joined this room");
        console.log(socket.rooms);
    });
    // handle message on 'chat message' event
    // [string, string, string] = [roomID, userID, message]
    socket.on('chat message', (msg) => {
        io.to(msg[0]).emit('chat message', [msg[1], msg[2]]);
        console.log('message: ' + msg[2]);
    });
    // disconnect event is reserved by socket.io
    socket.on("disconnect", (reason) => {
        console.log("user disconnected");
    });
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
