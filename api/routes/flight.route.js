import express from 'express';
import { CreateFlight } from '../controllers/flight.controller.js';

const router = express.Router();

router.post('/create',CreateFlight);

export default router;