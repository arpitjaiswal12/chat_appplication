import express from 'express'
import  dotenv  from 'dotenv';
import dbConnect from "./config/database.js"
import path from "path";


dotenv.config();
dbConnect(); //connection with database

const __dirname = path.resolve();
const app = express();



app.listen(3000,()=>{
    console.log(`Server is started at port 3000`);
})