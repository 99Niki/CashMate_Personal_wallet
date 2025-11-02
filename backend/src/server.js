import express from "express";
import dotenv from "dotenv";
import ratelimiter from "./middleware/reateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import { initDB } from "./config/db.js";
import job from "./config/cron.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "producation") job.start();

//middleware
app.use(ratelimiter);
app.use(express.json());

const port = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Working Well!" });
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(port, () => {
    console.log("Server is up and running on PORT:", port);
  });
});
