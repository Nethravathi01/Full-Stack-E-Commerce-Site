import express from "express";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
connectDB();

// Proper CORS setup BEFORE anything else
app.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// __dirname workaround for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/products", ProductRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("E-commerce Backend is running...");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});