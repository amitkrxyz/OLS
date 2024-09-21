import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware
app.use(
  cors({
    origin: process.env.FRONTED_URI,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
import authRoute from "./routes/auth.route.js";
app.use("/api/v1/auth", authRoute);

// app listen
app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

export { app };
