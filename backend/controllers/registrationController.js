import Registration from '../models/registrationModel.js';

// Register for an event
export const registerForEvent = async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json(registration);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get registrations for an event
export const getRegistrationsByEventId = async (req, res) => {
    try {
        const registrations = await Registration.find({ eventId: req.params.eventId });
        res.json(registrations);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get all the registrations for an event
export const getAllRegistrationEvent = async(req,res)=>{
    try{
        const registrations = await Registration.find();
        res.json(registrations);
    }catch(err){
        res.status(500).send(err.message);
    }
};

