# E-Commerce Web Application

A simple full-stack E-Commerce web application built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Tools**: Live Server (for frontend), MongoDB Atlas/local, GitHub

## ⚙️ Features

### Frontend
- Product listing from backend
- Add to cart with quantity storage in **LocalStorage**
- Cart count updates dynamically
- Simple dark mode toggle
- Separate cart page

### Backend
- Express API to serve product data
- MongoDB connection
- Product data seeding script
- CORS enabled for frontend-backend integration

## 📁 Folder Structure
ecommerce-project/ ├── frontend/ │   ├── index.html │   ├── cart.html │   ├── style.css │   └── script.js 
├── backend/ │   ├── server.js │   ├── 
config/ │   │   └── db.js │   ├──
models/ │   │   └── productModel.js │ 
├── routes/ │   │   └── productRoutes.js
│   └── productsData.js ├── README.md 
└── package.json
## 🚀 How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project

### 2. Setup Backend
cd backend
npm install
node productsData.js   # (to seed initial product data)
node server.js         # or nodemon server.js

### 3. Setup Frontend

Open frontend/index.html with Live Server (recommended VS Code extension).

### 4. Access in Browser

Frontend: http://127.0.0.1:5500/frontend/index.html
Backend API: http://localhost:3000/api/products


