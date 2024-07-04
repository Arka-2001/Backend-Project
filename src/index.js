//require('dotenv').config()
//import mongoose from "mongoose";
//import {DB_NAME} from "G:\WEB DEVELOPMENT\Backend Mastery\src\constants.js";

import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: "./.env"
})

connectDB()






/*
import express from "express"
const app=express();


(async()=>{
    try{
        await mongoose.connect(`${process.env.MONOGODB_URI}/{DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ",error);
        throw err
    }
})

*/