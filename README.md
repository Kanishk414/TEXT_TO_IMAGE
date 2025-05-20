
# Imaginexis 🎨✨

A full-stack AI-powered **Text-to-Image Generator** built using modern web technologies, integrated with [**ClipDrop API**](https://clipdrop.co/apis) for image generation and **Razorpay** for secure payments.

> Built with **React (Vite)**, **Express**, **MongoDB**, **Tailwind CSS**, and deployed via **Vercel** (Frontend) and **Render** (Backend).

---

## 📁 Project Structure

```
Imaginexis/
│
├── client/        # Frontend (React + Vite + Tailwind)
└── server/        # Backend (Express + MongoDB)
```

---

## 🚀 Live Deployment

- **Frontend:** [Vercel Deployment](https://text-to-image-six-ashy.vercel.app/)
- **Backend:** Hosted on Render (Private URL)

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with **Vite**
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **Framer Motion** for animations
- **React Toastify** for notifications
- **Axios** for API requests

### Backend
- **Express**
- **MongoDB & Mongoose**
- **JWT (via `jsonwebtoken`)** for authentication
- **Razorpay** for payment processing
- **ClipDrop API** for AI-based image generation
- **bcrypt** for password hashing
- **Dotenv** for environment variables
- **CORS**, **FormData**, etc.

---

## 📦 Setup Instructions

### 🔧 Prerequisites

- Node.js >= 18.x
- MongoDB Atlas or local MongoDB
- ClipDrop API Key
- Razorpay Key ID & Secret

---

### 🧩 1. Clone the Repository

```bash
git clone https://github.com/Kanishk414/TEXT_TO_IMAGE
cd TEXT_TO_IMAGE
```

---

### 📦 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

---

### 🔑 3. Environment Variables

#### 📁 `client/.env`

```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

#### 📁 `server/.env`

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
```

---

### 🖥️ 4. Run the Development Servers

#### Client

```bash
cd client
npm run dev
```

#### Server

```bash
cd server
npm run server
```

---

## 🌐 Routing

Frontend routes are handled using **React Router DOM**:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

---

## 🎨 Image Generation

Image generation is powered by the [ClipDrop API](https://clipdrop.co/apis). Requests are securely sent from the backend using an API key.

---

## 💰 Payment Integration

- **Frontend** initiates the payment request using Razorpay
- **Backend** verifies and captures the payment using Razorpay APIs

---

## 🔐 Authentication & Security

- **JWT (`jsonwebtoken`)** is used for secure user authentication.
- **bcrypt** is used to hash passwords securely before storing them in the database.
- Never expose secrets like JWT, Razorpay, or ClipDrop keys on the frontend.
- Use **HTTPS** in production environments.
- Store secrets using **Dotenv** and host securely.

---

## 🧈 UX Enhancements

- **Framer Motion** adds smooth animations to UI components.
- **React Toastify** provides toast notifications for feedback and alerts.

---

## 📦 Build for Production

### Client (Vite)

```bash
npm run build
```

### Server (Render Deployment)

- **Build Command:**  
  ```bash
  npm install
  ```

- **Start Command:**  
  ```bash
  npm run start
  ```

Make sure your `.env` variables are correctly added in Render's environment settings.

---

## 👨‍💻 Contributor

Built with ❤️ by [Kanishk Pardikar](https://github.com/kanishk414)
