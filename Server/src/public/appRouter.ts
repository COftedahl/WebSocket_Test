import express from 'express';
import { createServer } from 'http';

export const appRouter = express();
export const server = createServer(appRouter);