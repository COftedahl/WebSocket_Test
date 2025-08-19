"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const routes_1 = require("../Constants/routes");
const appRouter_1 = require("../public/appRouter");
const game1Router = express_1.default.Router();
const game1WSServer = new ws_1.WebSocketServer({ server: appRouter_1.server, path: routes_1.game1Route });
game1WSServer.on('connection', (socket) => {
    console.log('Client connected');
    // Listen for messages from the client
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        socket.send(`Echo: ${message}`); // Echo the message back
    });
    // Handle client disconnection
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
//function to display that router has been found
game1Router.get("", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "You found game 1", server: req.server });
}));
exports.default = game1Router;
