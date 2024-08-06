// src/api/routes/authRoutes.js
import express from "express";
import { signUp, logIn, logOut } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

export default router;
