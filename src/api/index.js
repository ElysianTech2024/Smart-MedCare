// src/api/index.js
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { HttpAgent } from "@dfinity/agent";
import authRoutes from "./routes/authRoutes.js";
import { authenticateToken } from "./utils/authUtils.js";

dotenv.config();

const app = express();
app.use(express.json()); // For parsing application/json

const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const host = "http://127.0.0.1:4943";
const agent = HttpAgent.createSync({ host });

(async () => {
  if (process.env.NODE_ENV !== "production") {
    try {
      await agent.fetchRootKey();
    } catch (err) {
      console.error(
        "Unable to fetch root_key, ensure the local replica is running:",
        err
      );
    }
  }

  // Connect to MongoDB
  // try {
  //   await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  //   console.log('Connected to MongoDB');
  // } catch (err) {
  //   console.error('Error connecting to MongoDB:', err);
  // }

  // Use authentication routes
  app.use("/api/auth", authRoutes);

  app.listen(3001, () => {
    console.log("Server listening on port 3001!");
  });
})();
