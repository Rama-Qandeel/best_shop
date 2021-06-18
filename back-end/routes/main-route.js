import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});

export default mainRouter;