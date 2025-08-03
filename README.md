# 🌴 Travlr Getaways – Module 5: RESTful API with MongoDB

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express-API-blue?logo=express)](https://expressjs.com/)
[![Handlebars](https://img.shields.io/badge/Templates-Handlebars-orange)](https://handlebarsjs.com/)
[![Branch](https://img.shields.io/badge/Branch-module5-blue)](https://github.com/AlexLeetDev/cs465-fullstack/tree/module5)

This version of the Travlr Getaways app uses a real database and a RESTful API to show trip data. Instead of loading trips from a file, it now gets data from MongoDB using an Express API. The travel page shows live data, and each trip links to a detailed JSON view.

---

## ✨ What Was Added in Module 5

- A RESTful API to get all trips or one trip by code
- A database (MongoDB) to store the trip data
- A server-side fetch using `node-fetch@2` to load trips from the API
- A dynamic travel page that displays data from the database
- Links to individual trip details in JSON format

---

## 🚀 How to Run the App

1. **Install dependencies**

   ```bash
   npm install
   npm install node-fetch@2
   ```

2. **Start MongoDB**  
   Make sure your local MongoDB server is running.

3. **Seed the database**

   ```bash
   node app_api/models/seed.js
   ```

4. **Start the app**

   ```bash
   npm start
   ```

5. **Visit these pages in your browser:**

   - Travel page: `http://localhost:3000/travel`  
   - All trips (JSON): `http://localhost:3000/api/trips`  
   - One trip (JSON): `http://localhost:3000/api/trips/GALR210214`

---

## 📁 Project Structure (Short Version)

```plaintext
travlr/
├── app_api/         # API routes and database models
├── app_server/      # Page controller for travel.hbs
├── views/           # Handlebars templates
├── public/          # Images and CSS
├── app.js           # Main app file
```

---

## ✅ What Was Tested

- Trips load from the database into the travel page
- Each trip links to its own JSON view
- API endpoints work in browser and Postman
- MongoDB connection works
- App runs with `npm start` without errors

---

## 👤 Author

**Alex Leet**  
CS 465 – Full Stack Development I  
Southern New Hampshire University  
2025 Student Project
