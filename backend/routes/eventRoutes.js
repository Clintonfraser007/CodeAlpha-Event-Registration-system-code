import express from 'express';
import { getEvents, getEventById, createEvent } from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents);    // Handle GET request to retrieve all events
router.get('/:id', getEventById); // Handle GET request to retrieve event by ID
router.post('/', createEvent); // Handle POST request to create a new event

export default router;
