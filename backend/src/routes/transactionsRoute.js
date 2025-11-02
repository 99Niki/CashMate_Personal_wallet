import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummaryByUserID,
  getTransactionByUserID,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/:userID", getTransactionByUserID);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userID", getSummaryByUserID);

export default router;
