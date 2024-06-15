import Flight from "../models/flight.model.js";

export const CreateFlight = async (req,res,next)=>{
    try{
        const flight = await Flight.create(req.body);
        return res.status(200).json(flight);
    }catch(error){
        next(error);
    }
}