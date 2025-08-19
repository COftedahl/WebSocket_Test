"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
exports.appRouter = (0, express_1.default)();
exports.server = (0, http_1.createServer)(exports.appRouter);
