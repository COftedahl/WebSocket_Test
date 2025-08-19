import express from 'express';
import testRouter from './Routers/testRouter';
import game1Router from './Routers/game1Router';
import { game1Route } from './Constants/routes';
import { appRouter, server } from './public/appRouter';


//**********  BACKEND NODE SERVER SETUP  **************//

const PORT = 5000;

appRouter.use(express.json());
// Make the server object accessible from the routers
// code adapted from https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
// appRouter.use((req: any, _res, next) => {
//     req.server = server;
//     return next();
// });

appRouter.use("/", testRouter);
appRouter.use(game1Route, (req: any, _res, next) => {
  req.server = server;
  return next();
});
appRouter.use(game1Route, game1Router);

server.listen(PORT, "", 0, () => {
  console.log("Server is running on port " + PORT); 
});

export default appRouter;
