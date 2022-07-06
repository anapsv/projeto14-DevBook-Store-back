import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'express';

const app = express();
app.use(json());
app.use(cors());
dotenv.config();

app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server on port ${process.env.PORT}`)
});