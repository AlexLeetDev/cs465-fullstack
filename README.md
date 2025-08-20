# 🌴 Travlr Getaways – Full Stack Web Application

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![Angular](https://img.shields.io/badge/Angular-SPA-red?logo=angular)](https://angular.io/)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)

This README provides the final overview of Travlr Getaways, with architecture, functionality, testing, and reflections to document outcomes and design choices.

---

## 🏗 Architecture

- The project used **multiple frontend approaches**:
  - Traditional **Express + HTML templates** for server-rendered pages.
  - A **Single Page Application (SPA)** with Angular to give the admin dashboard a modern, dynamic experience.
  - **JavaScript** connected the views and controllers on the client side.

- The backend used **MongoDB (NoSQL)** because it works well with flexible JSON-like data. It made storing and retrieving travel packages easier compared to rigid SQL schemas.

---

## ⚙️ Functionality

- **JSON vs JavaScript**: JSON is just structured data, while JavaScript is a programming language. JSON was the "bridge" that tied the Angular SPA (frontend) and the Express/MongoDB (backend) together.

- **Refactoring examples**:
  - Replacing static HTML with **Handlebars templates** for travel packages.
  - Moving repeated code (header/footer) into **partials**.
  - Creating **reusable Angular components** in the SPA to manage trips.

These changes made the code more efficient and easier to maintain.

---

## 🧪 Testing

- **API testing**: Verified endpoints using tools like Postman to check GET, POST, PUT, DELETE requests.
- **Security**: Added admin login with authentication, which made testing more complex but necessary. For example, protected routes required valid login credentials before access.
- Learned how **endpoints, methods, and security layers** fit together in a full stack app.

---

## ✨ Reflection

This course helped me grow as both a **developer and problem solver**.

- **Skills learned**:
  - Building a full stack app from scratch (Node, Express, MongoDB, Angular).
  - Organizing projects using MVC and REST architecture.
  - Writing cleaner, reusable code with templates and components.
  - Securing applications with authentication.

- **Career impact**:  
  I now feel more confident showing employers real full stack projects. This course gave me practical experience and a portfolio-ready project that highlights both backend and frontend development.

---

## 🚀 How to Run the Project

```bash
# 1. Clone the repository
git clone https://github.com/AlexLeetDev/cs465-fullstack.git
cd cs465-fullstack

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# 4. Open the app
http://localhost:3000
```
