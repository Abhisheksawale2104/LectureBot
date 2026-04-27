# 📚 LectureBot

**LectureBot** is an AI-powered learning assistant that helps students upload lecture PDFs, ask intelligent questions, and maintain organized study sessions. Built with a modern 3-tier architecture for scalability and performance.

---

## 🎯 About LectureBot

LectureBot simplifies the learning process by:
- Allowing users to upload lecture materials in PDF format
- Providing an interactive chat interface to ask questions about the content
- Maintaining session history for easy reference
- Offering personalized dashboards for each user

---

## 🏗️ Architecture (3-Tier)

This project follows a structured 3-layer design:

1. **Presentation Layer (Frontend)**
   - HTML, CSS, JavaScript
   - Responsive UI (Login, Dashboard, Upload, Chat)

2. **Application Layer (Backend)**
   - Node.js, Express.js
   - Authentication, file upload, API endpoints

3. **Data Layer**
   - File storage (AWS S3 for PDFs)
   - Session management
   - User data handling

---

## 🚀 Features

- 🔐 **Secure User Authentication** - Login & Registration with JWT tokens
- 📤 **PDF Upload** - Upload lecture files for analysis
- 💬 **Interactive Chat** - Ask questions about uploaded content
- 🧠 **Smart Responses** - AI-powered answers from lecture materials
- 📊 **Session History** - Track and access previous study sessions
- 🎨 **Clean UI** - Modern, responsive interface

---

## 📂 Project Structure

```
LectureBot/
│
├── public/                 # Frontend (Presentation Layer)
│   ├── index.html          # Login page
│   └── dashboard.html      # Dashboard & chat interface
│
├── routes/                 # Backend (Application Layer)
│   ├── auth.js             # Authentication routes
│   ├── chat.js             # Chat endpoints
│   └── upload.js           # File upload handling
│
├── models/                 # Data models
│   ├── User.js             # User schema
│   └── Session.js          # Session schema
│
├── python/                 # AI Engine
│   ├── ai_engine.py        # LLM responses
│   ├── pdf_reader.py       # PDF processing
│   └── requirements.txt
│
├── uploads/                # Temporary storage
├── server.js               # Main server
├── package.json
├── .env                    # Environment config
└── README.md
```

---

## ⚙️ Quick Setup

1. **Install dependencies**
   ```bash
   npm install
   cd python && pip install -r requirements.txt
   ```

2. **Configure environment**
   ```bash
   Create .env file with:
   PORT=5000
   JWT_SECRET=your_secret_key
   ```

3. **Start server**
   ```bash
   npm start
   ```

4. **Open browser**
   ```
   http://localhost:5000
   ```

---

## 🖥️ Screenshots

### 🔐 Login Page
Upload your lecture PDFs, ask smart questions, and keep your entire study chat history perfectly organized in one place.

![Login Page](login-page.png)

### 🏠 Dashboard
Welcome back to your personalized dashboard. Select a recent session to continue studying, or start a new chat.

![Dashboard](dashboard.png)

### 💬 Study Chat Interface
Upload PDF lectures on the left, ask questions on the right. Get instant AI-powered responses about your study materials.

![Study Chat](study-chat.png)

---

## 📌 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **AI Processing**: Python
- **File Storage**: AWS S3
- **Authentication**: JWT
- **Architecture**: 3-Tier

## 🏗️ 3-Tier Architecture

```
┌─────────────────────────────────────────┐
│  PRESENTATION LAYER (Frontend)          │
│  - index.html (Login Page)              │
│  - dashboard.html (Dashboard)           │
│  - Study Chat Interface                 │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│  BUSINESS LOGIC LAYER (Backend)         │
│  - Express.js Server (server.js)        │
│  - Routes: auth, chat, upload           │
│  - Python AI Engine (ai_engine.py)      │
│  - PDF Processing (pdf_reader.py)       │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│  DATA LAYER (Storage & Processing)      │
│  - File-based storage (uploads/)        │
│  - Session data management              │
│  - User authentication tokens           │
└─────────────────────────────────────────┘
```

## 🚀 Key Features

- **User Authentication**: Secure login and registration flow using JWT tokens.
- **Personalized Dashboard**: Welcome screen for returning users and quick access to recent sessions.
- **PDF Upload**: Upload lecture notes in PDF format for AI analysis.
- **Study Chat**: Interactive AI chat interface powered by Python that analyzes documents and answers user questions.
- **Multi-Layer Processing**: Python AI engine processes PDFs separately from the Node.js backend.
- **Session Management**: Track and retrieve study session history.

## 📁 Project Structure (3-Tier)

Use a structure similar to a professional full-stack application:

```
lecturebot/
  ├─ client/             # Frontend app assets (if separated later)
  ├─ server/             # Backend server files
  ├─ models/             # Mongoose models
  ├─ public/             # Static frontend pages and assets
  ├─ python/             # Python AI and PDF processing modules
  ├─ routes/             # Express route handlers
  ├─ uploads/            # Uploaded PDFs storage folder
  ├─ config/             # Environment, config helpers, and secrets handling
  ├─ .env                # Local environment variables (not committed)
  ├─ .gitignore
  ├─ package.json
  ├─ package-lock.json
  ├─ README.md
  └─ server.js
```

> If your friend’s repo already uses a `client/` and `server/` split, move frontend UI pages into `client/` and backend files into `server/`.

## ✅ What’s Included in This Project

- `server.js` — Express backend entrypoint
- `routes/auth.js` — Authentication routes for login/register
- `routes/chat.js` — Chat endpoints for study queries
- `routes/upload.js` — File upload handling using Multer
- `models/User.js` — User schema and authentication data
- `models/Session.js` — Study session metadata and history
- `public/index.html` — Login/landing page UI
- `public/dashboard.html` — Dashboard and session landing page
- `python/` — AI/PDF processing modules

## ⚙️ Local Setup Instructions

1. Open VS Code in the project root.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root with values such as:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/lecturebot
JWT_SECRET=your_jwt_secret
```

4. Start the backend:

```bash
npm start
```

5. Open the app in your browser at:

```text
http://localhost:5000
```

## 🧩 GitHub Integration & Push Guide

If your friend’s repository is already configured and you need to add LectureBot inside that structure, follow these commands in the terminal:

```bash
git pull origin main
# move or copy LectureBot files into the desired folder inside your friend's repo
git add .
git commit -m "Add LectureBot with login, dashboard, PDF upload, and study chat"
git push origin main
```

If you need to initialize git first:

```bash
git init
git add .
git commit -m "Initial LectureBot commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 🚀 Deployment Guide

### Option 1: Deploy to Heroku

1. Install the Heroku CLI.
2. Login:

```bash
heroku login
```

3. Create an app:

```bash
heroku create lecturebot-app
```

4. Set environment variables:

```bash
heroku config:set MONGO_URI=<your-mongo-uri> JWT_SECRET=<your-secret>
```

5. Push to Heroku:

```bash
git push heroku main
```

### Option 2: Deploy to Vercel / Render / Railway

- Use the same repo and link it from the platform dashboard.
- Set environment variables in the hosting dashboard.
- Use `npm start` as the start command.

### Option 3: Deploy to a VPS or Cloud VM

1. Copy the repo to the server.
2. Install Node.js.
3. Run:

```bash
npm install
NODE_ENV=production node server.js
```

4. Configure a reverse proxy (Nginx) and SSL if needed.

## 📌 Notes for Matching Your Friend’s Repo

- If their repo uses `main` branch, push there.
- If they use `master`, replace `main` with `master`.
- Keep file names and folders clean: `client/`, `server/`, `uploads/`, `config/`.
- Do not commit `.env` or `node_modules/`.

## 📌 Recommended Features to Highlight

- Secure user login and registration
- PDF lecture upload and parsing
- AI-powered study chat interface
- Personalized dashboard with session history
- Clean front-end layout based on the screenshots

## 📎 Important Files to Add to GitHub

- `README.md`
- `.gitignore`
- `package.json`
- `server.js`
- `routes/`
- `models/`
- `public/`
- `python/`
- `uploads/` (empty folder in GitHub if needed with `.gitkeep`)

---

If you want, I can also generate a second version of this README specifically shaped as a `client/` + `server/` split for a friend’s repo structure.