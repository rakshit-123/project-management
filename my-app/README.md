# 📁 Project Management Dashboard

A professional React-based Project Management Dashboard built using Vite, Tailwind CSS, Redux Toolkit, Recharts, Lexical Rich Text Editor, and more.

---

## 🚀 Features

- Responsive UI with Tailwind CSS
- Project and Task Management
- Rich Text Editor (Lexical)
- Charts (Recharts)
- Role-based Access Control
- State Management with Redux Toolkit
- Form Validation with Formik + Yup

---

## 🧰 Tech Stack

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Formik & Yup
- Recharts (Charts)
- Lexical Editor (Rich Text)
- CKEditor (Optional)

---

## 📦 Project Structure

```
project-management-dashboard/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   └── App.jsx
├── public/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/project-management-dashboard.git
cd project-management-dashboard
```

### 2. **Install Dependencies**

```bash
npm install
```

If you face peer dependency issues (especially with React 19):

```bash
npm install --legacy-peer-deps
```

---

## 🛠️ Installed Packages

```bash
npm install react react-dom react-router-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install @reduxjs/toolkit react-redux
npm install formik yup
npm install recharts
npm install @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
npm install lexical @lexical/react
```

---

## 📄 Tailwind Setup

### `tailwind.config.js`

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
```

---

## ✅ Available Scripts

### Start the Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Build

```bash
npm run preview
```

---

## 🧪 Linting (Optional)

```bash
npm run lint
```

---

## 🔗 Useful Commands

### Git Initial Push

```bash
git init
git remote add origin https://github.com/your-username/your-repo.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin master
```

---

---

## 👨‍💻 Author

- [Your Name](https://github.com/rakshit-123/project-management.git)

---

## 📃 License

This project is licensed under the MIT License.
