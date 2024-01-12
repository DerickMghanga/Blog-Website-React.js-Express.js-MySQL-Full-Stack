import express from "express";
import 'dotenv/config'
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";


const app = express();
const PORT = process.env.PORT;



//MIDDLEWARES
app.use(express.json());


//ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(PORT, ()=> {
    console.log(`Server is running: http://localhost:${PORT}`);
})