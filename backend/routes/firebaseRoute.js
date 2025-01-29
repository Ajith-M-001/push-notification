import express from "express";
import { sendFirebaseNotification, sendMultipleFirebaseNotification } from "../controllers/firebaseController.js";

const router = express.Router();

router.post("/send-notification", sendFirebaseNotification)
router.post("/send-multiple-notification", sendMultipleFirebaseNotification)


export default router;