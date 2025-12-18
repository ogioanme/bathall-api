import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors({
  origin: [
    "http://localhost",
    "http://localhost:3000",
    "https://bathall.co.kr"
  ],
  credentials: true
}));
app.use(express.json());

// test routes
app.get("/", (req, res) => {
  res.send("BathAll API Server is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
