import express from 'express';
import { CreateFlight, DeleteFlight, DisplayFlights, UpdateFlight, getListing } from '../controllers/flight.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create',verifyToken,CreateFlight);
router.get('/display/:id',DisplayFlights);
router.delete('/delete/:id',verifyToken,DeleteFlight);
router.post('/update/:id',verifyToken,UpdateFlight);
router.get('/get/:id', getListing);

export default router;