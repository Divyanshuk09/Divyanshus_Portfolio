import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/project.routes.js'
import bodyParser from 'body-parser';
import './configs/cloudinary.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Server is up and running 🚀");
});

app.use("/api/projects", projectRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
}).catch(err => console.error("MongoDB Error:", err));