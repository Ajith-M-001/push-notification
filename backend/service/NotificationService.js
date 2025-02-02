import admin from "../firebase.js";

class NotificationService {
  static sendNotification = async (title, body, token) => {
    console.log("Sending notification to", token);
    console.log("Title", title);
    console.log("body", body);
    try {
      const payload = {
        notification: {
          title,
          body,
        },
        token,
      };
      const response = await admin.messaging().send(payload);
      console.log("Notification sent successfully", response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  static sendMultipleNotification = async (title, body, tokens) => {
    console.log("Sending notification to", tokens);
    console.log("Title", title);
    console.log("body", body);
    try {
      const payloads = tokens.map((token) => ({
        notification: {
          title,
          body,
        },
        token,
      }))
      const response = await admin.messaging().sendEach(payloads);
      console.log("Notification sent successfully", response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

export default NotificationService;
