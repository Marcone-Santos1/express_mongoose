import express from 'express'
import fruitController from "./router/FruitsController.js";

const app = express();
app.use(express.json());

app.use('/fruits/', fruitController)

export default app;