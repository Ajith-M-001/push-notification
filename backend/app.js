import express from "express";
import bodyParser from "body-parser";
import firebaseRoute from "./routes/firebaseRoute.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to push notification server");
});

app.use("/api/firebase", firebaseRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
