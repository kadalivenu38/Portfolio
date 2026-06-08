import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import dbConn from "./config/db.js";
import msgRouter from "./routes/contactRoutes.js";

const app = express();
await dbConn();

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/contact", msgRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});