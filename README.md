# 🌍 Travlr Getaways – Module 4: MongoDB Integration

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)](https://mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Data_Modeling-Mongoose-maroon)](https://mongoosejs.com/)
[![Handlebars](https://img.shields.io/badge/Templates-Handlebars-orange)](https://handlebarsjs.com/)
[![Branch](https://img.shields.io/badge/Branch-module4-blue)](https://github.com/AlexLeetDev/cs465-fullstack/tree/module4)

This version of the Travlr Getaways app introduces MongoDB as the data source for travel packages. Trip information is now stored and retrieved from a live database rather than a static file. A seeding script is included to load sample data during development.

---

## ✨ Module 4 Highlights

- Connected the app to a local MongoDB database (`travlr`)
- Created a Mongoose schema to define trip structure and validation rules
- Developed a `seed.js` script to load sample trip data into the database
- Verified successful data seeding using MongoDB Compass

---

## 🧰 Installation

To install and run the Travlr Getaways project for Module 4, follow these steps:

1. **Create and switch to the module4 branch**

   ```bash
   git checkout -b module4
   ```

2. **Install project dependencies**
   From the project root:

   ```bash
   npm install
   ```

3. **Install Mongoose and Readline packages**
   These are required to connect to MongoDB and handle clean shutdowns:

   ```bash
   npm install mongoose
   npm install --save readline
   ```

4. **Verify MongoDB is installed and running**
   - You must have MongoDB installed locally.
   - Make sure the MongoDB server is running:

     ```bash
     mongod
     ```

   - Default connection URI: `mongodb://127.0.0.1/travlr`

5. **Seed the database**
   This step loads sample trip data into the `travlr` database:

   ```bash
   node app_server/models/seed.js
   ```

6. **Start the application**
   This will launch the Express server.

   ```bash
   npm start
   ```  

7. **Open the app in your browser**

   [http://localhost:3000/travel](http://localhost:3000/travel)

---

## 📁 Project Structure

```plaintext
travlr/
├── app.js                      # Main application file that runs the site
├── app_server/
│   └── models/
│       ├── db.js               # Connects the app to MongoDB and handles shutdowns
│       ├── seed.js             # Loads sample trip data into the database
│       └── travlr.js           # Defines the Trip schema used with MongoDB
├── data/
│   └── trips.json              # JSON file containing sample trip data
├── public/
│   └── images/                 # Folder for trip images shown on the site
├── views/
│   └── travel.hbs              # Template for displaying trip details on the travel page
```

---

## ✅ Tested and Verified

- Seeded trip data appears in MongoDB Compass
- Trips display properly on the `/travel` page
- Database connection and shutdown events log as expected in the console

---

## 👤 Author

**Alex Leet**  
CS-465 Full Stack Development I  
Southern New Hampshire University

---
