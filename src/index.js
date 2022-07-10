import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'express';
import booksRouter from './routes/booksRouter.js';
import routes from "./routes.js"



dotenv.config()

const app = express();
app.use(json());
app.use(cors());

app.use(routes);
app.use(booksRouter);



app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server on port ${process.env.PORT}`)
});