import express from "express";
import mongoose from "mongoose";

mongoose
    .connect("mongodb+srv://ishan:ishan@cluster0.dmvcjur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });

const app = express();

app.listen(3000,()=>{
    console.log("Server listening to port 3000!!!");
});