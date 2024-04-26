import express from "express";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
import cors from "cors"
app.use(cors());

import mongoose from "mongoose";
import router from "./routes/user.route.js";

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`port listening to ${process.env.PORT}`);
});
