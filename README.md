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
````

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
````
###3️⃣ Run the mobile app
```bash
cd ../
npm install
npx expo start
Scan the QR code in Expo Go on your phone to open the app.
````
###📱 Screenshots
| Page | Screenshot |
|------|------------|
| **Signup with Clerk** |  <img width="1290" height="2796" alt="Simulator Screenshot - iPhone 15 Pro Max - 2025-11-02 at 18 14 53" src="https://github.com/user-attachments/assets/5dd06434-1e34-45c5-bd45-f97289728c76" />
|
| **Login with Clerk** | <img width="1290" height="2796" alt="Simulator Screenshot - iPhone 15 Pro Max - 2025-11-02 at 18 15 03" src="https://github.com/user-attachments/assets/b5566ba1-2d50-4edc-a89e-e9dba7420d08" />
|
| **Add Transaction” form** | <img width="1290" height="2796" alt="Simulator Screenshot - iPhone 15 Pro Max - 2025-11-02 at 18 16 02" src="https://github.com/user-attachments/assets/355a4ebc-a1ef-47d5-b447-dd0b6fb68c60" />
 |
| **Home screen showing balance and transaction list** | <img width="1290" height="2796" alt="Simulator Screenshot - iPhone 15 Pro Max - 2025-11-02 at 18 15 36" src="https://github.com/user-attachments/assets/39a394a4-1f57-46da-8769-074821934c47" />
 |

