# 🏗️ CS-465 Travlr Getaways – Module 3: Dynamic Travel Page with Handlebars

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![Handlebars](https://img.shields.io/badge/Handlebars-hbs-orange?logo=handlebars.js)](https://handlebarsjs.com/)
![JSON](https://img.shields.io/badge/JSON-data-blue?logo=json)
![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)
[![Branch](https://img.shields.io/badge/branch-module3-yellow)](https://github.com/AlexLeetDev/cs465-fullstack/tree/module3)

This branch (`module3`) builds on the Travlr Getaways site by transforming the static **Travel** page into a **dynamic Handlebars template** powered by JSON data. This update reflects the client's request for a scalable solution that reduces hard-coded content and supports flexible updates to travel packages.

---

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Server framework  
- **Handlebars (hbs)** – View templating engine  
- **JSON** – Data format used for dynamic content  
- **HTML/CSS** – Frontend styling and layout

---

## 🔧 Key Features Implemented

- ✅ Static HTML replaced with `travel.hbs` Handlebars template
- ✅ `trips.json` file created to store dynamic travel package content
- ✅ `travel.js` controller reads data using `fs.readFileSync()`
- ✅ Page now loops through and renders JSON using `{{#each trips}}`
- ✅ Header and footer split into reusable partials (`header.hbs`, `footer.hbs`)
- ✅ Navigation highlighting works dynamically using `activePage` context

---

## 📁 Project Structure

```plaintext
travlr/
├── app_server/
│   ├── controllers/
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── index.js
│   │   ├── meals.js
│   │   ├── news.js
│   │   ├── rooms.js
│   │   └── travel.js
│   ├── routes/
│   │   └── index.js
│   └── views/
│       ├── index.hbs
│       ├── travel.hbs
│       ├── rooms.hbs
│       ├── meals.hbs
│       ├── news.hbs
│       ├── about.hbs
│       ├── contact.hbs
│       ├── layouts/
│       │   └── main.hbs
│       └── partials/
│           ├── header.hbs
│           └── footer.hbs
├── data/
│   ├── meals.json
│   ├── news.json
│   ├── rooms.json
│   └── trips.json
├── public/
│   ├── css/
│   └── images/
├── app.js
├── package.json
└── README
```

---

## 🚀 How to Run the Project

```bash
# 1. Clone the repository and switch to the module3 branch
git clone https://github.com/AlexLeetDev/cs465-fullstack.git
cd cs465-fullstack
git checkout module3

# 2. Install project dependencies
npm install

# 3. Start the Express server
npm start

# 4. Open the app in your browser
http://localhost:3000
```

---

## ✅ What This Demonstrates

This branch demonstrates:

- The ability to **dynamically render views** using Handlebars and JSON data
- Understanding of the **MVC architecture**, where:  
  - **Model** = JSON file  
  - **View** = Handlebars template  
  - **Controller** = `travel.js`
- Effective use of **partials** to avoid repetition (`header.hbs` / `footer.hbs`)
- Manual **navigation highlighting** via controller-provided `activePage`
- Skills in converting large static HTML blocks into **maintainable code**

---

## 👤 Author

**Alex Leet**  
CS-465 Full Stack Development I  
Southern New Hampshire University

---

## 🙏 Credits

- Website layout and images originally provided by [Free Website Templates](https://freewebsitetemplates.com)
- Modified and repurposed for academic use in accordance with SNHU guidelines
