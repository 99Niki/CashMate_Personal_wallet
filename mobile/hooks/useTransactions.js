import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { API_URL } from "../constants/api";

// const API_URL = "https://cashmate-personal-wallet.onrender.com/api";
// const API_URL = "http://localhost:5001/api";

export const useTransactions = (userID) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expense: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userID}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.log("Error in fetching transactions:", error);
    }
  }, [userID]);

  const fetSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userID}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.log("Error in fetching summary:", error);
    }
  }, [userID]);

  const loadData = useCallback(async () => {
    if (!userID) return;
    setIsLoading(true);
    try {
      await Promise.all([fetchTransactions(), fetSummary()]);
    } catch (error) {
      console.log("Error in loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetSummary, userID]);

  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete transaction");

      // Refresh data after deletion
      loadData();

      Alert.alert("Success", "Transaction delete transaction");
    } catch (error) {
      console.log("Error in deleting summary:", error);
      Alert.alert("Error", error.message);
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
};
