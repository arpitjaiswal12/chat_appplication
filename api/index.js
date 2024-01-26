import express from 'express'
import  dotenv  from 'dotenv';
import cookieParser from 'cookie-parser';
import dbConnect from "./config/database.js"
import path from "path";


import authRoute from "./routes/auth_route.js"


dotenv.config();
dbConnect(); //connection with database

const __dirname = path.resolve();
const app = express();

// middleware to parse json request body
app.use(express.json());

app.use(cookieParser());

//mounts (adding/ appending the ) todo API routes :: when user hits the user the bydefault path is atteached with the entered request

app.use("/api/auth", authRoute); 



app.listen(3001,()=>{
    console.log(`Server is started at port 3001`);
})