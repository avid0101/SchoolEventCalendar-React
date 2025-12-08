# School Event Calendar

School Event Calendar is a web-based platform designed to streamline the planning, management, and participation in school events. The system provides a centralized calendar and management tools for all stakeholders, making event organization transparent and efficient.

## 🧭 Roles

- **Admin**: Manage users and events; full oversight and access to participants.
- **Event Manager**: Create and edit events; view participants; manage schedules.
- **Student**: Browse and join/leave events; view calendar and joined events; update profile.

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

### 2. Configure the backend for access to database
Create a file application-secrets.properties in backend/src/main/resources folder
Paste this inside the file and replace [your password] with your database password
```bash
# Database Password
DB_PASSWORD=[your password]
```


### 3. Run backend
```bash
cd backend
mvn spring-boot:run
```

### 4. Run frontend
```bash
cd frontend
npm install
npm run dev
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
