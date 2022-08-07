import express from "express";
import { signup } from "../controllers/auth-controller.js";

const router = express();

// create User
router.post("/signup", signup);

//Sign in
// router.post("/signin", signup);
//Googlt Auth

// router.post("/google", signup);
//facebook Auth

// router.post("/facebook", signup);

export default router;
