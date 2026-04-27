# 📚 LectureBot (3-Tier Architecture)

LectureBot is a web-based learning assistant built using a **3-tier architecture**, where users can upload lecture PDFs, ask questions, and interact with study content through a chat interface.

---

## 🏗️ Architecture (3-Tier)

This project follows a structured 3-layer design:

1. **Presentation Layer (Frontend)**
   - HTML, CSS, JavaScript
   - Handles UI (Login, Dashboard, Upload, Chat)

2. **Application Layer (Backend)**
   - Node.js, Express
   - Handles authentication, file upload, API requests

3. **Data Layer**
   - File storage (AWS S3 for PDFs)
   - Session/data handling (can be file-based / in-memory / DB if added)

---

## 🚀 Features

- 🔐 User Login & Registration
- 📤 Upload Lecture PDFs to AWS S3
- 💬 Ask Questions from Uploaded Content
- 🧠 Interactive Study Chat
- 📁 Session Handling
- 🎨 Clean UI with multiple pages

---

## 📂 Project Structure


LectureBot/│
├── public/ # Frontend (Presentation Layer)
│ ├── index.html
│ ├── dashboard.html
│ ├── upload.html
│ └── chat.html
│
├── routes/ # Backend routes (Application Layer)
├── uploads/ # Temporary file storage
├── config/ # AWS & environment config
├── server.js # Main server
├── package.json
├── .env
└── README.md


---

## 🖥️ Screenshots

### 🔐 Login Page
![Login](assets/login-page.png)

### 🏠 Dashboard
![Dashboard](assets/dashboard.png)

### 📤 Upload PDF
![Upload](assets/upload-page.png)

### 💬 Chat Interface
![Chat](assets/chat-page.png)

### 🤖 Chat Demo
![Demo](assets/chat-demo.png)

---



