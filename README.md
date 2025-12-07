# School Event Calendar

School Event Calendar is a web-based platform designed to streamline the planning, management, and participation in school events. The system provides a centralized calendar and management tools for all stakeholders, making event organization transparent and efficient.

User Roles:

**Admin**: Has full control over the system. Admins can create and manage events, add or remove event managers and students, and oversee all activities. They ensure the smooth operation of the platform and have access to all data and reports.
**Event Manager**: Responsible for creating, editing, and managing events. Event Managers can view who has joined their events, update event details, and communicate with participants. They help coordinate logistics and ensure events run smoothly.
**Student**: Can browse the event calendar, join events, and view details of events they are interested in. Students can also see which events they have joined and receive updates or notifications about upcoming activities.
This role-based approach ensures that each user has access to the tools and information they need, while keeping the system organized and secure. The platform aims to foster better communication, engagement, and collaboration within the school community.
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
│   │   │   ├── AdminDashboard/
│   │   │   ├── AdminLogin/
│   │   │   ├── EventManager/
│   │   │   ├── LandingPage/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   └── StudentDashboard/
│   │   └── services/
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
