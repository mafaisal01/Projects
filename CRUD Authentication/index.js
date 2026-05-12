import express from 'express';
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config();

import dbConnection from './DBMS/db.js';

import route from './Routes/userRoute.js';
app.use("/api/user", route);


const Host = process.env.Host || '127.0.0.1';
const Port = process.env.Port ||8000;



dbConnection();
app.listen(Port, ()=>{
    console.log(`server running at http://${Host}:${Port}`)
});