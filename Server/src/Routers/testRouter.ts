import express from 'express';

const testRouter = express.Router();

testRouter.get("", async (req: any, res) => {
  res.json({message: "You found the backend server for WebSocket Test", server: req.server ?? "No server found"});
})

export default testRouter;