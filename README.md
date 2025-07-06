# Uabinda HRMS & Payroll

## Stack
- **Frontend:** React + Material UI
- **Backend:** Node.js + Express + MongoDB

## Setup

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd uabinda
```

#### Backend
```bash
cd server
npm install
npm run dev
```

#### Frontend
```bash
cd client
npm install
npm start
```

### 2. Environment

Create `server/.env` with:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/uabinda
JWT_SECRET=your_super_secret_jwt_key
```

---

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)