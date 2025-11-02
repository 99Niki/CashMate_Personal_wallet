# CashMate_Personal_Wallet

# 💰 CashMate – Personal Wallet App

A full-stack mobile wallet application that helps users manage income, expenses, and balances in real time.  
Built with **React Native + Expo** on the frontend and **Node.js + Express + PostgreSQL** on the backend.

---

## 🚀 Features

✅ **Cross-Platform** — Works seamlessly on iOS and Android  
✅ **User Authentication** — Secure email login & verification using Clerk  
✅ **Transaction Management** — Add, view, and delete income or expenses  
✅ **Real-Time Balance Summary** — Dynamic updates after each transaction  
✅ **Cloud Database** — Persistent storage via Neon PostgreSQL  
✅ **Rate Limiting** — Upstash Redis to prevent abuse  
✅ **Clean UI** — Intuitive, minimal design with React Native components  
✅ **Backend API** — RESTful endpoints for transactions and summaries

---

## 🏗️ Tech Stack

| Layer                     | Technology                            |
| ------------------------- | ------------------------------------- |
| **Frontend**              | React Native (Expo), React Navigation |
| **Backend**               | Node.js, Express                      |
| **Database**              | PostgreSQL (Neon)                     |
| **Authentication**        | Clerk                                 |
| **Rate Limiting**         | Upstash Redis                         |
| **Version Control**       | Git & GitHub                          |
| **Deployment (optional)** | Render / Vercel / Expo Go             |

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo

````bash
git clone https://github.com/99Niki/CashMate_Personal_Wallet.git
cd CashMate_Personal_Wallet


###2️⃣ Setup the backend
```bash
cd backend
npm install
Create a .env file:
DATABASE_URL=your_neon_postgres_url
REDIS_URL=your_upstash_redis_url
PORT=5001
Run the server:
npm run dev

###3️⃣ Run the mobile app
```bash
cd ../
npm install
npx expo start
Scan the QR code in Expo Go on your phone to open the app.

###📱 Screenshots
```bash
Home screen showing balance and transaction list
“Add Transaction” form
Signup / Login with Clerk
(Add screenshots here once available)
````
