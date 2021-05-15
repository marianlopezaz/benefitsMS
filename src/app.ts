import express from 'express';
import cors from 'cors';
import benefitRoutes from './routes/benefitRoutes';
import dotenv from 'dotenv';
import dbConnect from "./database/database";
import { initListenner } from './messages_queue/recieve';

dbConnect();
dotenv.config();
const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/benefit',benefitRoutes);

app.listen(port,()=>{
    initListenner()
})
