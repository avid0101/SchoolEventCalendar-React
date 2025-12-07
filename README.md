# School Event Calendar

A full-stack web application for managing school events, built with React (frontend) and Spring Boot (backend).

## 🚀 Features

- **Student Portal**: Browse events, join events, view calendar, manage profile
- **Event Manager Portal**: Create, edit, and manage events
- **Admin Dashboard**: Manage students, event managers, and events
- **Calendar View**: Interactive calendar with FullCalendar integration
- **User Authentication**: Secure login for students, event managers, and admins

## 📁 Project Structure

```
SchoolEventCalendar/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Shared UI components
│   │   │   └── layout/          # Header, nav, sidebar
│   │   ├── pages/
│   │   │   ├── public/          # Landing, About, Contact
│   │   │   ├── auth/            # Login, Register
│   │   │   ├── admin/           # Admin dashboard & pages
│   │   │   ├── event-manager/   # Event manager portal
│   │   │   └── student/         # Student portal
│   │   ├── hooks/               # Shared custom hooks
│   │   ├── context/             # React contexts
│   │   ├── services/            # API calls
│   │   └── utils/               # Helpers
│   └── public/
├── backend/           # Spring Boot backend
│   └── src/
│       └── main/
│           └── java/com/schooleventcalendar/
│               ├── controller/
│               ├── entity/
│               ├── repository/
│               └── service/
└── package.json       # Root scripts for running both
```

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router v7
- Vite
- Axios
- FullCalendar

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL

## 📋 Prerequisites

- Node.js 18+
- Java 17+
- Maven
- MySQL

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/avid0101/SchoolEventCalendar-React.git
cd SchoolEventCalendar
```

### 2. Install dependencies
```bash
npm run install:all
```

### 3. Configure the database
Edit `backend/src/main/resources/application.properties` with your MySQL credentials.

### 4. Run both frontend and backend
```bash
npm run dev
```

Or run them separately:
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run frontend
```

## 🌐 Routes

| Path | Description |
|------|-------------|
| `/landing` | Landing page |
| `/about` | About page |
| `/contact` | Contact page |
| `/login` | Student/Event Manager login |
| `/register` | Student registration |
| `/admin/login` | Admin login |
| `/admin/dashboard` | Admin dashboard |
| `/event-manager/*` | Event manager portal |
| `/student/*` | Student portal |
 
## 🧭 Roles

- **Admin**: Manage users and events; full oversight and access to participants.
- **Event Manager**: Create and edit events; view participants; manage schedules.
- **Student**: Browse and join/leave events; view calendar and joined events; update profile.

## ⚙️ Setup

### Prerequisites
- Node.js 18+
- Java 17+
- Maven
- MySQL

### Frontend
```powershell
cd "c:\Users\X280\Downloads\SchoolEventCalendar\frontend"
cmd /c "npm install"
cmd /c "npm run dev"
```
Vite will start at `http://localhost:5173` (or the next free port).

### Backend
```powershell
cd "c:\Users\X280\Downloads\SchoolEventCalendar\backend"
./mvnw.cmd spring-boot:run
```
Backend runs at `http://localhost:8080`.

## Notes
- If PowerShell blocks `npm` scripts, use `cmd /c` or run:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
- If port 5173 is busy, Vite auto-selects another port (e.g., 5174).

## 📝 API Endpoints

### Users
- `GET /api/getusers` - Get all users
- `POST /api/postusers` - Create user
- `PUT /api/putusers/:id` - Update user
- `DELETE /api/deleteusers/:id` - Delete user

### Events
- `GET /api/getevents` - Get all events
- `POST /api/postevents` - Create event
- `PUT /api/putevents/:id` - Update event
- `DELETE /api/deleteevents/:id` - Delete event

## 📄 License

This project is for educational purposes.
