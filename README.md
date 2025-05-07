# 📍 Place Picker (v2) — Advanced Version

An advanced version of the **Place Picker** React app 📽️, originally designed for selecting and storing user-defined places on a map. This version builds upon the basic version and introduces deeper concepts such as backend connectivity, error handling, and **React Custom Hooks** for cleaner, modular code.

---

## ✨ What's New in This Version?

This is a **second version** of the original [Place Picker](https://github.com/Mohamed-Esmat/place-picker-api-version-2/tree/bf52dc2c03cd2f3a6709c820b13003855a9603f7).

### 🔌 Backend Integration & HTTP Communication

1. ❌ How **not** to connect to a database (and why it’s bad).
2. ✅ Preparing for data fetching.
3. ❌ The wrong way to send HTTP requests.
4. ✅ Sending `GET` requests with `useEffect`.
5. 🔄 Using `async/await` with side effects.
6. ⏳ Managing loading states.
7. 🧱 Error handling using `Error.jsx`.
8. ❌ Catching HTTP errors properly.
9. 🧹 Transforming fetched data for rendering.
10. 🧼 Extracting and cleaning code for reusability.
11. 📨 Sending data with `POST` requests.
12. ⚡ Optimistic UI updates.
13. 🗑️ Deleting data with `DELETE` requests.

### �� React Custom Hooks

14. 🧩 Creating **custom hooks** for reusable logic.
15. 🔄 Managing state inside custom hooks.
16. 📤 Exposing nested functions from hooks.
17. 📦 Reusing the hook across multiple components.
18. 🔧 Creating **flexible** and composable hooks.

---

## 🚀 Live Demo

🔗 [Visit Live Site](https://place-picker-version2-esmat.netlify.app/)

> ⚠️ **Note:** The backend is currently local. API interactions like saving or deleting places will not function correctly on the live demo, but the frontend structure and design are fully visible.

---

## 🛠️ Tech Stack

- React with Vite ⚡
- Firebase (local) 📦
- CSS Modules 💅
- Custom React Hooks
- ESLint Fixes

---

## 📂 Project Structure (Simplified)

```plaintext
├── src
│   ├── components
│   │   ├── Places.jsx
│   │   ├── AvaliablePlaces.jsx
│   │   ├── DeleteConfirmation.jsx
│   │   ├── Modal.jsx
│   │   ├── Error.jsx
│   │   ├── ProgressBar.jsx
│   ├── hooks/
│   │   └── useFetch.js // 💡 Custom Hook
│   ├── util
│   │   └── http.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── loc.js
└── README.md

```

---

## 📚 Learning Highlights

- Organizing React projects for scalability.
- Using async/await with side effects.
- Properly handling backend errors.
- Writing reusable and modular custom hooks.
- Ensuring ESLint compliance and bug fixes.

---

## 📦 Installation & Usage

```bash
# 1. Clone the repo
$ git clone https://github.com/Mohamed-Esmat/place-picker-api-version-2

# 2. Navigate to the project directory
$ cd place-picker-api-version-2

# 3. Install dependencies
$ npm install

# 4. Run the local development server
$ npm run dev
```

---

## 📜 License

This project is licensed under the MIT License — feel free to use, learn, and share!

> 🎓 **Note:** This project is based on one of the projects from [Maximilian Schwarzmüller's course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/). Modifications and extensions were made by **Mohamed Esmat** for educational and practice purposes.

---

Made with ❤️ by Mohamed Esmat
