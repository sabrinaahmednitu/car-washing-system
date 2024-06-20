# Car Wash Booking System
## Description
This is a car wash booking system
## Technology Stack
- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: MongoDB (using Mongoose for ODM)
- **Validation**: Zod Validations
- **Authentication**: JSON Web Tokens (JWT)
- **Error Handling**: Custom middleware
- **Deployment**: Deployed on Vercel


## Installation and Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/sabrinaahmednitu/car-washing-system
   ```

2. Install dependencies:

   ```bash
   cd car-washing-system
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root and use those environment variables:

   ```
   PORT=5000
   DB_URI= Your own mongodb connnection uri
   BCRYPT_SALT_ROUNDS= Any number . like (5)
   JWT_ACCESS_SECRET= Your JWT Secret 
   JWT_ACCESS_EXPIRES= JWT token Expires time
   
   ```

4. Server start command:

   ```bash
   npm run start:dev
   ```

5. Access the application in your browser at `http://localhost:5000`.
