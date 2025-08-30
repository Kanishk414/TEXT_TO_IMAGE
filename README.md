

# Imaginexis 🎨✨

A full-stack AI-powered **Text-to-Image Generator** built using modern web technologies, integrated with [**ClipDrop API**](https://clipdrop.co/apis) for image generation and **Razorpay** for secure payments.

> Built with **React (Vite)**, **Express**, **MongoDB**, **Tailwind CSS**, and deployed fully on **AWS** for production use.
>
> * **Frontend** → **Amazon S3 + CloudFront + Route53** (`https://texttoimage.space`)
> * **Backend** → **Amazon EC2 (private URL, proxied via `https://api.texttoimage.space`)**

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

* **Frontend:** [https://texttoimage.space](https://texttoimage.space)
* **Backend API:** [https://api.texttoimage.space](https://api.texttoimage.space) (proxied, EC2 IP kept private)

---

## 🛠️ Tech Stack

### Frontend

* **React 19** with **Vite**
* **Tailwind CSS** for styling
* **React Router DOM** for routing
* **Framer Motion** for animations
* **React Toastify** for notifications
* **Axios** for API requests

### Backend

* **Express**
* **MongoDB & Mongoose**
* **JWT (via `jsonwebtoken`)** for authentication
* **Razorpay** for payment processing
* **ClipDrop API** for AI-based image generation
* **bcrypt** for password hashing
* **Dotenv** for environment variables
* **CORS**, **FormData**, etc.

---

## 📦 Setup Instructions

### 🔧 Prerequisites

* Node.js >= 18.x
* MongoDB Atlas
* ClipDrop API Key
* Razorpay Key ID & Secret
* AWS Account (Free Tier works fine)

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

#### 📁 `client/.env.development`

```env
VITE_API_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

#### 📁 `client/.env.production`

```env
VITE_API_URL=https://api.texttoimage.space
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
PORT=4000
```

---

## 🖥️ 4. Development Run

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

## 🌐 AWS Deployment

### **Frontend (S3 + CloudFront + Route53)**

1. **Build frontend for production**:

   ```bash
   npm run build -- --mode production
   ```
2. Upload the `client/dist/` folder to an **S3 bucket** configured for static website hosting.
3. Set up **CloudFront distribution** to serve files from S3.
4. Attach a custom domain (`texttoimage.space`) via **Route53**.
5. Add SSL certificate (AWS ACM) → attach to CloudFront for HTTPS.
6. Invalidate CloudFront cache after deployment:

   ```
   /*
   ```

### **Backend (EC2 + Nginx + PM2)**

1. Launch an **EC2 instance (Ubuntu)** → install Node.js, npm, Git.
2. Clone the repo and configure environment variables in `server/.env`.
3. Use **PM2** to keep the server running:

   ```bash
   pm2 start server.js --name imaginexis
   ```
4. Configure **Nginx reverse proxy**:

   * Requests to `https://api.texttoimage.space` → forward to EC2 app on `localhost:4000`.
   * This keeps the **EC2 public IP hidden**.
5. Secure with **Let’s Encrypt (Certbot)** to enable HTTPS.

---

## 💰 Payment Integration

* **Frontend** integrates Razorpay Checkout.
* **Backend** verifies and captures payments securely.

---

## 🔐 Security

* API keys & secrets stored in **.env** (never pushed to GitHub).
* Backend accessible only via domain (`api.texttoimage.space`) — EC2 IP hidden.
* Passwords hashed with bcrypt.
* JWT for authentication.
* HTTPS enforced everywhere.

---

## 👨‍💻 Contributor

Built with ❤️ by [Kanishk Pardikar](https://github.com/kanishk414)



