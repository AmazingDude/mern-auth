# MERN Auth

A full-stack authentication project built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This repository demonstrates user authentication, registration, and protected routes in a production-ready application.

## Live Demo

Check out the live site: [https://mern-auth-chi-dun.vercel.app/](https://mern-auth-chi-dun.vercel.app/)

## Features

- User registration and login
- JWT-based authentication
- Protected routes (frontend & backend)
- Responsive React frontend
- Node.js and Express backend
- MongoDB database integration
- Error handling & validation

## Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** Vercel (frontend), can be configured for backend hosting

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB
  
### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmazingDude/mern-auth.git
   cd mern-auth
   ```

2. **Install server dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the `backend` folder with your MongoDB URI and JWT secret.

5. **Run the application:**
   ```bash
   # In backend/
   npm start

   # In frontend/
   npm start
   ```

## Folder Structure

```
mern-auth/
  ├── backend/
  └── frontend/
```

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT
- `GET /api/protected` — Example of a protected route

## License

MIT

---

Inspired by modern web authentication best practices.
