"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testRouter_1 = __importDefault(require("./Routers/testRouter"));
const game1Router_1 = __importDefault(require("./Routers/game1Router"));
const routes_1 = require("./Constants/routes");
const appRouter_1 = require("./public/appRouter");
//**********  BACKEND NODE SERVER SETUP  **************//
const PORT = 5000;
appRouter_1.appRouter.use(express_1.default.json());
// Make the server object accessible from the routers
// code adapted from https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
// appRouter.use((req: any, _res, next) => {
//     req.server = server;
//     return next();
// });
appRouter_1.appRouter.use("/", testRouter_1.default);
appRouter_1.appRouter.use(routes_1.game1Route, (req, _res, next) => {
    req.server = appRouter_1.server;
    return next();
});
appRouter_1.appRouter.use(routes_1.game1Route, game1Router_1.default);
appRouter_1.server.listen(PORT, "", 0, () => {
    console.log("Server is running on port " + PORT);
});
exports.default = appRouter_1.appRouter;
