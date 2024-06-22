# Car Washing System

## Description

Welcome to the Car Wash Booking System. This backend system for the Car Washing System provides efficient management 
of user registrations, services, slots, and bookings. With robust error handling and 
authentication mechanisms, users can enjoy a reliable and secure car washing 
service.

## Live URL
this is the live url ( https://car-washing-system-assignment-3.vercel.app )

## Technology Stack

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: MongoDB
- **Validation**: Zod
- **Authentication**: JSON Web Tokens
- **Deployment**: Vercel

## Features

- User Authentication and Authorization
- Secure Booking System with JWT
- Zod Validation for Data Integrity
- Dynamic Booking Slot Management
- MongoDB for Data Storage
- Easy Deployment on Vercel

## Installation and Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/sabrinaahmednitu/car-washing-system
   ```

2. Install dependencies:

   ```bash
   cd car-washing-system
   code .
   npm install
   npm run build
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and use those environment variables:

   ```
   PORT=5000
   DB_URI=your_own_mongodb_connection_uri
   BCRYPT_SALT_ROUNDS=any_number_like_5
   JWT_ACCESS_SECRET=your_jwt_secret
   JWT_ACCESS_EXPIRES=jwt_token_expiration_time


   ```

4. Server start command:

   Run the following command to start the server

   ```bash
   npm run start:dev
   ```

5. Access the Application

   Open your browser and navigate to http://localhost:5000 to access the application.




