import { stat } from "fs";
import NotificationService from "../service/NotificationService.js";

const sendFirebaseNotification = async (req, res) => {
  const { title, body, token } = req.body;
  try {
    const response = await NotificationService.sendNotification(
      title,
      body,
      token
    );
    res
      .status(200)
      .json({ message: "Notification sent successfully", status: true });
  } catch (error) {
    res.status(500).json({ error: error.message, status: false });
  }
};

export { sendFirebaseNotification };
