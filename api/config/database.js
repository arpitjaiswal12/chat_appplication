import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


const ConnectDB = ()=>{
    mongoose.connect(process.env.DATA_BASE_URL)
    .then(()=>{
        console.log("Data base Connection is Successfull !!")
    })
    .catch((error)=>{
        console.log("Error while Connecting to database");
        console.log(error);
        process.exit(1);
    })
}

export default ConnectDB;