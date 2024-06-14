import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import flightRouter from "./routes/flight.route.js";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
    .connect("mongodb+srv://ishan:ishan@cluster0.dmvcjur.mongodb.net/airline-database?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
    console.log("Server listening to port 3000!!!");
});

app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);
app.use('/api/flight',flightRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error" ;
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});