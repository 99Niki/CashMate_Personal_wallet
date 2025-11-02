# 💰 CashMate – Personal Wallet App

A full-stack mobile wallet application that helps users manage income, expenses, and balances in real time.  
Built with **React Native + Expo** on the frontend and **Node.js + Express + PostgreSQL** on the backend.

---

## 🚀 Features
* 🔐 Authentication with email verification using Clerk
* 📝 Signup & Login flows with 6-digit email code
* 🏠 Home Screen that shows your current balance & past transactions
* ➕ Create Screen to add income or expense transactions
* 🔄 Pull to refresh functionality from scratch
* 🗑️ Delete transactions to update balance
* 🚪 Logout to navigate back to login screen

---

## 🏗️ Tech Stack

| Layer                     | Technology                            |
| ------------------------- | ------------------------------------- |
| **Frontend**              | React Native (Expo), React Navigation |
| **Backend**               | Node.js, Express                      |
| **Database**              | PostgreSQL (Neon)                     |
| **Authentication**        | Clerk                                 |
| **Rate Limiting**         | Redis                         |
| **Version Control**       | Git & GitHub                          |

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo

````bash
git clone https://github.com/99Niki/CashMate_Personal_Wallet.git
cd CashMate_Personal_Wallet
````

### 2️⃣ Setup the backend
```bash
cd backend
npm install
````
Create a .env file:
```bash
DATABASE_URL=neon_postgres_url
REDIS_URL=yupstash_redis_url
PORT=5001
````
Run the server:
```bash
npm run dev
````

### 3️⃣ Run the mobile app

Create a .env file:
```bash
CLERK_PUBLISHABLE_KEY=clerk_publishable_key
CLERK_SECRET_KEY=clerk_secret_key
````
```bash
cd ../
npm install
npx expo start
Scan the QR code in Expo Go on phone to open the app
````
---

## 📱 Screenshots

| Page                                                 | Screenshot                                                                                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Signup with Clerk**                                | <img width="300" alt="Signup screen" src="https://github.com/user-attachments/assets/5dd06434-1e34-45c5-bd45-f97289728c76" />          |
| **Login with Clerk**                                 | <img width="300" alt="Login screen" src="https://github.com/user-attachments/assets/b5566ba1-2d50-4edc-a89e-e9dba7420d08" />           |
| **Add Transaction form**                             | <img width="300" alt="Add Transaction screen" src="https://github.com/user-attachments/assets/355a4ebc-a1ef-47d5-b447-dd0b6fb68c60" /> |
| **Home screen showing balance and transaction list** | <img width="300" alt="Home screen" src="https://github.com/user-attachments/assets/39a394a4-1f57-46da-8769-074821934c47" />            |

