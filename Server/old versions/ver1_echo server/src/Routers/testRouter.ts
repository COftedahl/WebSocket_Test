import express from 'express';

const testRouter = express.Router();

testRouter.get("", async (req, res) => {
  res.json("You found the backend server for WebSocket Test");
})

export default testRouter;
