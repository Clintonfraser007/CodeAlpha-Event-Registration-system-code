import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import eventRoutes from './routes/eventRoutes.js';
import registrationRoutes from './routes/registrationRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
connectDB();

// Use routes
app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
