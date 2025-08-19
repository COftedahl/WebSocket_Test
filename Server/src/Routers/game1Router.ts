import express from 'express';
import { WebSocketServer } from 'ws';
import { game1Route } from '../Constants/routes';
import { server } from '../public/appRouter';

const game1Router = express.Router();

const game1WSServer = new WebSocketServer({ server: server, path: game1Route });

game1WSServer.on('connection', (socket: any) => {
  console.log('Client connected');

  // Listen for messages from the client
  socket.on('message', (message: any) => {
    console.log(`Received: ${message}`);
    socket.send(`Echo: ${message}`); // Echo the message back
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

//function to display that router has been found
game1Router.get("", async (req: any, res) => {
  res.json({message: "You found game 1", server: req.server});
})

export default game1Router;