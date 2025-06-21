# StudyCircle - Collaborative Learning Platform

<div align="center">
  <img src="public/studyCircle-logo.webp" alt="StudyCircle Logo" width="120" height="120" style="border-radius: 12px;">
  <h1>StudyCircle</h1>
  <p><strong>Connect, Collaborate, and Create Amazing Projects Together</strong></p>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-orange.svg)](https://mongodb.com/)
  [![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--time-red.svg)](https://socket.io/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer-Motion-purple.svg)](https://framer.com/motion/)
</div>

## 🎥 Demo Video

<div align="center">
  <video width="100%" controls>
    <source src="YOUR_VIDEO_URL_HERE" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p><em>Watch the full demo to see StudyCircle in action!</em></p>
</div>

## 🚀 Overview

StudyCircle is a full-stack collaborative learning platform designed to help students connect, form study groups, and work together on projects. Built with modern web technologies, it features real-time chat, project sharing, and a comprehensive resource system.

## ✨ Key Features

### 🔐 **Authentication System**
- Secure user registration and login
- JWT-based authentication with HTTP-only cookies
- Protected routes and middleware
- Form validation with Zod schemas
- Automatic session management

### 👥 **Peer Groups Management**
- Create and join study groups
- Real-time group chat functionality
- Member management with limits
- Group leader system
- Focus area categorization

### 💬 **Real-time Chat**
- Socket.IO powered instant messaging
- Group-based chat rooms
- Message persistence
- Real-time notifications
- User-friendly interface

### 📁 **Project Showcase**
- Portfolio display system
- GitHub integration
- Live demo links
- Technology stack tags
- Project status tracking

### 📚 **Resources Hub**
- Getting started guides
- Community guidelines
- FAQ system
- Support documentation

## 🛠️ Technology Stack

### **Frontend**
- **React 18.3.1** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client with interceptors
- **Socket.IO Client** - Real-time communication

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Socket.IO** - Real-time bidirectional communication
- **Zod** - TypeScript-first schema validation

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Concurrently** - Run multiple commands

## 🏗️ Architecture

### **Frontend Architecture**
```
src/
├── components/          # Reusable UI components
│   ├── chat/           # Real-time chat components
│   ├── groups/         # Group management components
│   ├── home/           # Landing page components
│   ├── layout/         # Layout and navigation
│   ├── ui/             # Generic UI components
│   └── utils/          # Utility components
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── pages/              # Route components
├── services/           # API service layer
└── utils/              # Utility functions
```

### **Backend Architecture**
```
server/
├── controllers/        # Request handlers
├── middleware/         # Express middleware
├── models/            # Mongoose schemas
├── routes/            # API route definitions
├── utils/             # Utility functions
└── validators/        # Request validation schemas
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/study-circle.git
   cd study-circle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in root directory
   cp .env.example .env
   ```

4. **Configure environment variables**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 📱 Features Demo

### Authentication Flow
- Secure registration with validation
- JWT-based login system
- Protected route access
- Automatic session management

### Peer Groups
- Create study groups with focus areas
- Join groups with member limits
- Real-time group chat
- Member management system

### Real-time Chat
- Instant messaging within groups
- Message persistence
- User-friendly interface
- Connection status indicators

## 🔧 Custom Hooks

The project demonstrates advanced React patterns with custom hooks:

- `useAuth` - Authentication state management
- `usePeerGroups` - Peer group data management
- `useSocket` - Socket.IO connection management
- `useAutofill` - Form autofill detection
- `useScrollToTop` - Navigation scroll behavior

## 🎨 Design System

### Color Palette
- Primary colors: Gray-based palette (50-900)
- Consistent theming throughout
- Accessible color contrast ratios

### Component Library
- Reusable UI components
- Icon integration with React Icons
- Responsive grid layouts
- Card-based design patterns

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token validation
- HTTP-only cookies
- CORS configuration
- Input validation with Zod
- Protected API endpoints

## 📊 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  projects: [ObjectId],
  peerGroups: [ObjectId]
}
```

### PeerGroup Model
```javascript
{
  name: String,
  focus: String,
  members: [ObjectId],
  leader: ObjectId,
  meetingTime: String,
  maxMembers: Number
}
```

### Message Model
```javascript
{
  group: ObjectId,
  sender: ObjectId,
  content: String,
  createdAt: Date
}
```

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
# Set NODE_ENV=production
# Configure production MongoDB URI
# Deploy to your server/cloud platform
```

## 🤝 Contributing

This is a personal project showcasing my coding skills. However, if you'd like to contribute ideas or report issues, feel free to open an issue.

## 📄 License

This project is for demonstration purposes and showcases my coding abilities. The code is not intended for commercial use.

## 👨‍💻 About the Developer

This project was built by **Prashant** as a demonstration of full-stack development skills, including:

- Modern React development with hooks and context
- Node.js backend with Express
- Real-time features with Socket.IO
- Database design with MongoDB/Mongoose
- Authentication and security implementation
- Responsive UI/UX design
- Clean code architecture and best practices

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **X (Twitter)**: [@yourusername](https://x.com/yourusername)
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio](https://yourportfolio.com)

---

<div align="center">
  <p>Built with ❤️ using modern web technologies</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
