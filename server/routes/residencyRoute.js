import express from 'express';
import { createResidency, getAllResidencies, getResidency } from '../controllers/resdCntrl.js';


const router = express.Router();

// Create a residency
router.post('/', createResidency);

// Get all residencies
router.get('/', getAllResidencies);

// Get a specific residency by id
router.get('/:id', getResidency);

export default router;
