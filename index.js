import express from "express";
const app = express();
import dotenv from "dotenv";
import {Db_connection} from './src/db/index.js'
import { Routes } from './src/routes/index.js'


dotenv.config()
Db_connection()
app.use(express())
app.use(express.json())
app.use('/api/v1', Routes)
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port  = process.env.port || 4000
app.listen(port, () => {
  console.log('Server listening on port 4000');
});