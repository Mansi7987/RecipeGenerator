# 🍳 MomKitchen — Recipe Generator Website

MomKitchen is a modern, responsive **recipe discovery and generator web app** built using **React**, **Vite**, and **TailwindCSS**.  
It allows users to explore featured recipes fetched from a public API, browse by categories, and search for new dishes — all with a smooth and elegant UI.

---

## 🚀 Live Demo
*(Coming soon)*  
Once deployed!

---

## 🧁 Features

✨ **Modern UI with TailwindCSS** — Clean and responsive design optimized for all screens.  
🍲 **Featured Recipes** — Dynamically fetched from [TheMealDB API](https://www.themealdb.com/).  
🧑‍🍳 **Find by Category** — Browse recipes based on food type (Cake, Pasta, Salad, etc).  
🔍 **Smart Search Bar** — Search for recipes instantly from the homepage.  
💛 **Smooth Animations & Hover Effects** — Using React Slick Carousel and transitions for engaging UI.  
📱 **Fully Responsive** — Works across desktop, tablet, and mobile devices.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ React (Vite) | Frontend framework |
| 🎨 TailwindCSS | Styling and layout |
| 🧭 React Icons | Icons (FiSearch, FaStar, etc.) |
| 🧩 Axios | API calls |
| 🎠 React Slick | Carousel slider for featured recipes |
| ☁️ TheMealDB API | Recipe data source |

---

## 📂 Folder Structure

my-app/
├── public/
│ ├── Logo/
│ │ ├── FryingPan.png
│ │ └── ChefImage.png
│ └── FoodImages/
│ ├── Cake.jpeg
│ ├── Pasta.jpeg
│ ├── Rice.jpeg
│ ├── Salad.jpeg
│ ├── Beverages.jpeg
│ ├── HamBurger.jpeg
│ ├── Dessert.jpeg
│ └── Pizza.jpeg
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── FeaturedRecipe.jsx
│ │ └── FindRecipe.jsx
│ │
│ ├── pages/
│ │ └── HomePage.jsx
│ │
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
└── package.json


---

## ⚙️ Setup Instructions

Follow these steps to run the project locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/momkitchen.git
2️⃣ Navigate into the folder
cd momkitchen
3️⃣ Install dependencies
npm install
4️⃣ Run the development server
npm run dev
Then open http://localhost:5173 in your browser 🚀

🧠 API Used
TheMealDB API
Free public API for meal recipes and food data.

Example Endpoint:

https://www.themealdb.com/api/json/v1/1/search.php?f=c

🪄 Main Components Overview
🏠 HomePage.jsx
--> Main landing page with search bar and hero section.

Displays <FeaturedRecipe /> and <FindRecipe />.

🍛 FeaturedRecipe.jsx
Fetches recipe data using Axios.

Displays recipes in a horizontal carousel using React Slick.

Includes star ratings and hover animation effects.

🍴 FindRecipe.jsx
Displays recipe categories in a responsive grid layout.

🧭 Header.jsx
Fixed navigation bar with logo, links, and Sign In button.

🎨 UI Highlights
Color Palette: Yellow–Amber gradient background with white cards and black text.

Typography: Clean sans-serif fonts with bold titles.

Interactive Buttons: Hover effects and transitions for a polished feel.

Icons: Minimal use of React Icons for clarity and simplicity.

📸 Screenshots
(Add images of your homepage, featured recipes carousel, and category grid here once your site is running)

Example placeholders:

/screenshots/homepage.png
/screenshots/featured.png
/screenshots/categories.png


🧑‍💻 Author **
👩 Mansi Sengar
Frontend Developer | React Enthusiast
📧 mansisengar44@gmail.com
🌐 https://www.linkedin.com/in/mansi-sengar-6b8153256

⭐ Future Enhancements
✅ Recipe search by ingredients or area

✅ Dedicated recipe detail page

✅ Add to favorites

✅ User login system

✅ Dark mode toggle

📝 License
This project is open-source and available under the MIT License.

❤️ Thank You for Visiting MomKitchen!
“Good food makes good moments — cook, share, and enjoy with MomKitchen.”

Love youu!!!
