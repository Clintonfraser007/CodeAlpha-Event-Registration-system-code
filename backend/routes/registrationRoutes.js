import express from 'express';
import { registerForEvent, getRegistrationsByEventId,getAllRegistrationEvent } from '../controllers/registrationController.js';

const router = express.Router();

router.get('/',getAllRegistrationEvent);
router.post('/', registerForEvent); // Handle POST request to register for an event
router.get('/:eventId', getRegistrationsByEventId); // Handle GET request to retrieve registrations by event ID

export default router;
