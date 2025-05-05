# 📍 Place Picker 2.0

A practical React project that builds on the original **Place Picker** app by integrating a backend. This version is designed to simulate real-world full-stack app development, covering advanced frontend topics like data fetching, error handling, optimistic updates, and more. 🚀

> 🔁 **This is the second version of the Place Picker project.** It extends the original version by connecting to a backend and introducing more advanced concepts.

---

## 🧠 Key Concepts Practiced

1. Connecting and **not connecting** to a database the right way
2. Preparing the app for real-time **data fetching**
3. Anti-patterns: **How NOT** to send HTTP requests ❌
4. Correctly using **GET requests** with `useEffect`
5. Writing clean async logic with **async/await**
6. Implementing **loading states** for better UX
7. Reusing UI components by importing from `Error.jsx`
8. Handling **HTTP errors** robustly
9. **Transforming fetched data** to match app structure
10. **Extracting code** into reusable functions and improving overall structure
11. Sending **POST requests** to create new data
12. Implementing **optimistic updates** for snappy interactions
13. Handling **DELETE requests** to remove data

---

## 🔗 Live Demo

👉 [Place Picker 2.0 — Live Preview](https://place-picker-version2-esmat.netlify.app/)

> ⚠️ **Note:** The backend server is hosted locally for development purposes. As a result, the API features (like adding or deleting places) won’t function in the deployed version. The deployment is meant for UI/UX preview only.

---

## 🧰 Technologies Used

- React (Functional Components & Hooks)
- JavaScript (ES6+)
- CSS Modules
- HTTP (GET, POST, DELETE)
- Fetch API
- useEffect / useState / useCallback

---

## 📁 Folder Structure

```
├── src
│   ├── components
│   │   ├── Places.jsx
│   │   ├── AvaliablePlaces.jsx
│   │   ├── DeleteConfirmation.jsx
│   │   ├── Modal.jsx
│   │   ├── Error.jsx
│   │   ├── ProgressBar.jsx
│   ├── util
│   │   └── http.js
│   ├── App.jsx
│   ├── main.jsx
└── README.md
```

---

## ⚙️ Getting Started

1. Clone the repository
```bash
git clone https://github.com/Mohamed-Esmat/place-picker-api-version-2.git
```
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm run dev
```

---

## 📚 What You’ll Learn

- How to connect React to a backend
- Best practices for useEffect in data fetching
- Improving UX with loading and error states
- Structuring your app for scalability
- Efficient state management with optimistic updates

---

## 📬 Feedback

If you have any suggestions or feedback, feel free to open an issue or create a pull request!

---

**Happy coding! 💻**

