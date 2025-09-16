# 📝 Form Handling App (Node.js + Express + MongoDB)

This is a simple **Form Handling Application** built using:
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **EJS (Embedded JavaScript Templates)**
- **TailwindCSS (for UI styling)**

---

## 🚀 Features
- User can submit a form with:
  - Name
  - Email
  - Age
  - Phone
  - Password
- Data is stored in **MongoDB Atlas**.
- Modern & responsive UI with **TailwindCSS**.
- Displays **success** or **error** messages after form submission.

---

## 📂 Project Structure 

Form__handling/
│
├── controllers/
│ └── user.js # Controller logic for user registration
│
├── models/
│ └── User.js # Mongoose schema and model
│
├── views/
│ ├── index.ejs # Form page
│ ├── success.ejs # Success page
│ └── error.ejs # Error page
│
├── server.js # Main Express server
├── package.json
└── README.mdre


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/abhi15072004/Form__handling.git
cd Form__handling
npm install
MONGO_URI=your_mongodb_connection_string
PORT=1000
npm start

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Frontend: EJS + TailwindCSS
🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
👤 Author
Developed by Abhishek Tiwari 🚀


<img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/d0f8a08c-b591-476e-af95-f173f2d85c9b" />

