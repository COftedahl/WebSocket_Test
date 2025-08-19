import express from 'express';
import testRouter from './Routers/testRouter';

const appRouter = express();
const WebSocket = require('ws');

//**********  WEBSOCKET SERVER SETUP  **************//

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket: any) => {
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

console.log('WebSocket server is running on ws://localhost:8080');

//**********  BACKEND NODE SERVER SETUP  **************//

const PORT = 5000;

appRouter.use(express.json());
appRouter.use("/", testRouter);

appRouter.listen(PORT, () => {
  console.log("Server is running on port " + PORT); 
});

export default appRouter;
