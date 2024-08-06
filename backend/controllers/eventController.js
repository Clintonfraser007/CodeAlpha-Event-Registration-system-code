import Event from '../models/eventModel.js';

// Get all events
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get event details by ID
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).send('Event not found');
        res.json(event);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
