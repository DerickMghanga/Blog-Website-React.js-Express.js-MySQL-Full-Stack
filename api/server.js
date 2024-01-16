import express from "express";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import cors from "cors"

import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/uploads.js";


const app = express();
const PORT = process.env.PORT;



//MIDDLEWARES
app.use(cors({
    origin: ["http://localhost:3000","http://localhost:3001"],
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads")); //serve static files from the folder


//ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/upload", uploadRoutes)


app.listen(PORT, ()=> {
    console.log(`Server is running: http://localhost:${PORT}`);
})