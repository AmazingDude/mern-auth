import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ['https://mern-auth-chi-dun.vercel.app']

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use((req, res, next) => {
    console.log("Incoming Origin:", req.headers.origin);
    next();
});

// Handle preflight requests explicitly
app.options("*", cors({
    origin: allowedOrigins,
    credentials: true,
}));


app.use(express.json());
app.use(cookieParser());

// API Endpoints
app.get('/', (req, res) => res.send("API WORKING!"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => console.log(`Server started on PORT: ${port}`));