import express from 'express';
import { getCustomers, createAppointment } from '../controllers/controlFunctions.js';

const router = express.Router();

router.get('/', getCustomers);
router.post('/', createAppointment);

export default router;