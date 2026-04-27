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

```
LectureBot/
│
├── public/               # Frontend (Presentation Layer)
│   ├── index.html
│   ├── dashboard.html
│   ├── upload.html
│   └── chat.html
│
├── routes/               # Backend routes (Application Layer)
├── uploads/              # Temporary file storage
├── config/               # AWS & environment config
├── server.js             # Main server
├── package.json
├── .env
└── README.md
```

---

## 🖥️ Screenshots

### 🔐 Login Page

<img width="1600" height="777" alt="Login PAGE" src="https://github.com/user-attachments/assets/c98a3c7d-3661-47de-a457-86f6ea378c4c" />


### 🏠 Dashboard
<img width="1600" height="768" alt="Dashbord page" src="https://github.com/user-attachments/assets/1d28cd21-724a-4c3c-a795-9c017e6294e6" />


### 📤 Upload PDF
<img width="1600" height="777" alt="image" src="https://github.com/user-attachments/assets/bed6bdf2-939c-45c7-a310-477d4ce2ae4a" />

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

