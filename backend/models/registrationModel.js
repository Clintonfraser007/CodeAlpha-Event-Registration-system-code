import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
