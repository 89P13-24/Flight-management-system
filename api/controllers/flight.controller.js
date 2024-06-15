import Flight from "../models/flight.model.js";
import { errorHandler } from "../utils/error.js";

export const CreateFlight = async (req,res,next)=>{
    try{
        //console.log(typeof req.body.arrivalDate);
        let arrivalDate = req.body.arrivalDate;
        let departureDate = req.body.departureDate;
        let formattedDateWithoutSeconds = arrivalDate.slice(0, 16);
        req.body.arrivalDate = formattedDateWithoutSeconds;
        console.log(formattedDateWithoutSeconds);
        console.log(req.body.arrivalDate);
        formattedDateWithoutSeconds = departureDate.slice(0, 16);
        req.body.departureDate = formattedDateWithoutSeconds;
        console.log(formattedDateWithoutSeconds);
        const flight = await Flight.create(req.body);
        return res.status(200).json(flight);
    }catch(error){
        next(error);
    }
}

export const DisplayFlights = async(req,res,next)=>{
    
    try{
        const flights = await Flight.find({userRef:req.params.id});
        res.status(200).json(flights);
    }catch(err){
        next(err);
    }

}

export const DeleteFlight = async(req,res,next)=>{
    const listing = await Flight.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
  }

  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const UpdateFlight = async (req, res, next) => {
    const listing = await Flight.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }
  
    try {
      const updatedListing = await Flight.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };

  export const getListing = async (req, res, next) => {
    try {
      const listing = await Flight.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
    
    }