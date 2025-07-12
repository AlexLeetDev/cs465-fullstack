# 🧩 CS-465 Module 2 – MVC and Handlebars Refactor

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![Handlebars](https://img.shields.io/badge/Handlebars-hbs-orange?logo=handlebars.js)](https://handlebarsjs.com/)
[![License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Branch](https://img.shields.io/badge/branch-module2-blue)](https://github.com/AlexLeetDev/cs465-fullstack/tree/module2)

This branch (`module2`) refactors the original Travlr Getaways static site to use a **Model-View-Controller (MVC)** structure and **Handlebars** templates. It is part of the Module Two assignment for CS-465 Full Stack Development I.

---

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime
- **Express** – Server framework
- **Handlebars (hbs)** – Template engine
- **HTML/CSS** – Static and dynamic content

---

## 📁 Updated Project Structure

```plaintext
travlr/
├── app_server/
|   ├── controllers/
|   |   ├── main.js
|   |   └── travel.js
|   ├── routes/
|   |   └── index.js
|   └── views/
|       ├── index.hbs
|       ├── travel.hbs
|       └── partials/
|           ├── header.hbs
|           └── footer.hbs
├── public/
|   ├── css/
|   ├── images/
|   ├── about.html
|   ├── contact.html
|   ├── meals.html
|   ├── news.html
|   ├── rooms.html
|   └── travel.html
├── .gitignore
├── app.js
├── package.json
└── README_module2.md
```

- Controllers manage logic for different pages.
- Views (with `.hbs` files) are rendered dynamically using Handlebars.
- Routes connect URLs to controller functions.
- `app.js` serves as the main entry point for the app.

---

## 🚀 How to Run the Project

1. **Clone the repo and switch to module2 branch**

   ```bash
   git clone https://github.com/AlexLeetDev/cs465-fullstack.git
   cd cs465-fullstack
   git checkout module2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

4. **Open the site in your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## ✅ What This Demonstrates

- MVC structure using Express
- Handlebars templates with shared partials
- Page routing handled by `index.js` and controller files
- Homepage and travel page rendered dynamically
- Follows clean coding practices and project structure standards

---

## 📌 Notes

This branch moves the project from a static website to a dynamic Express app using MVC and templates.
Next steps will include adding interactivity and connecting to a backend service.

---

## 👤 Author

**Alex Leet**  
CS-465 – Full Stack Development I  
Southern New Hampshire University
