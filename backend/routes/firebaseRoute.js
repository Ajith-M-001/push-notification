import express from "express";
import { sendFirebaseNotification } from "../controllers/firebaseController.js";

const router = express.Router();

router.post("/send-notification", sendFirebaseNotification )


export default router;