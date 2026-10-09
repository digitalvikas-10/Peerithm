
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Peerithm API is running",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;