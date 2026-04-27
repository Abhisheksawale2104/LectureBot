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


---

## 🖥️ Screenshots

### 🔐 Login Page
![Login]
<img width="1600" height="777" alt="Login PAGE" src="https://github.com/user-attachments/assets/c98a3c7d-3661-47de-a457-86f6ea378c4c" />


### 🏠 Dashboard
![Dashboard](assets/dashboard.png)

### 📤 Upload PDF
![Upload](assets/upload-page.png)

### 💬 Chat Interface
![Chat](assets/chat-page.png)

### 🤖 Chat Demo
![Demo](assets/chat-demo.png)

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Create `.env` file
```env
PORT=5000
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_REGION=ap-south-1
AWS_BUCKET=lecturebot-pdfs
JWT_SECRET=your_secret
```

### 3. Run server
```bash
npm start
```

### 4. Open in browser
http://localhost:5000

---

## ☁️ Cloud Integration
- AWS S3 used for storing uploaded PDFs  
- IAM used for secure access control  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Cloud:** AWS S3  
- **Architecture:** 3-Tier  

