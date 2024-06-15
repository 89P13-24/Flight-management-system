import mongoose, { model } from "mongoose";

const flightSchema = new mongoose.Schema({
    airline:{
        type:String,
        required: true,
    },
    flightNumber:{
        type:String,
        required:true,
    },
    departureAirport:{
        type:String,
        required:true,
    },
    arrivalAirport:{
        type:String,
        required:true,
    },
    departureDate:{
        type:Date,
        required:true,
    },
    arrivalDate:{
        type:Date,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    duration:{
        type:Number,
        required: true,
    },
    availableSeats:{
        type:Number,
        required: true,
    },
    userRef:{
        type:String,
        required:true,
    },
},{timestamps:true});

const Flight = mongoose.model('Flight',flightSchema);

export default Flight;