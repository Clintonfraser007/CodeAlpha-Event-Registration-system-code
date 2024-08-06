# Event Registration System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)
  
## Introduction

The Event Registration System is a web application where users can register for events, view event details, and manage their registrations. The backend is built with Node.js and Express.js, and MongoDB is used to store event and registration data.

## Features

- User registration for events
- View event details
- Manage user registrations

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for API testing)
- Git (for version control)

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/event-registration-system.git
2. Navigate to the project directory:
   cd event-registration-system
3. Install the dependencies:
   npm install
   
**Configuration**
1. Create a .env file in the root directory of your project and add the following environment variables:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   
   Replace your_mongodb_connection_string with your actual MongoDB connection string.
   
**Running the Application**
Start the development server:
npm start
The server will start on http://localhost:5000.

**API Endpoints**
Event Routes
GET /events

Fetch all events
POST /events

Create a new event
Request Body:
{
  "name": "Event Name",
  "description": "Event Description",
  "date": "2024-08-01T00:00:00.000Z"
}

GET /events/

Fetch a single event by ID

**Registration Routes**
GET /registrations

Fetch all registrations
POST /registrations

Create a new registration
Request Body:
{
  "eventId": "event_id",
  "userName": "User Name",
  "userEmail": "user@example.com"
}

GET /registrations/

Fetch a single registration by ID

**Testing the API**
Using Postman
Create a New Event:

POST /events
URL: http://localhost:5000/events
Body:
{
  "name": "Sample Event",
  "description": "This is a sample event.",
  "date": "2024-08-01T00:00:00.000Z"
}

**Fetch All Events:**

GET /events
URL: http://localhost:5000/events

**Register for an Event:**
POST /registrations
URL: http://localhost:5000/registrations
Body:
{
  "eventId": "event_id", // Replace with actual event ID
  "userName": "John Doe",
  "userEmail": "john.doe@example.com"
}

**Fetch All Registrations:**
GET /registrations
URL: http://localhost:5000/registrations

**Contributing**
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.
