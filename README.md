# 🔗 Flask URL Shortener

![Python](https://img.shields.io/badge/Python-3.9%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.x-black)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange)

A lightweight and minimal URL shortener built with **Flask** that integrates with the **is.gd API** to generate short links instantly.
> 🏗 Architecture: **Simple Monolithic Flask Application**
>
> This project follows a single-file Flask architecture where all routes and logic are defined inside one main application file (`url_shortener.py`).  
> This structure is ideal for small-scale applications, MVPs, and educational projects.

---

## 🚀 Features

- Shorten any valid URL instantly
- Clean and minimal UI
- Uses `is.gd` API for reliable URL shortening
- Lightweight and easy to deploy
- Built with pure Flask (no database required)

---

## 🛠️ Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **API Provider:** is.gd
- **Server:** Built-in Flask development server

---

## 📂 Project Structure

```text
📦 project
 ┣ 📜 url_shortener.py
 ┣ 📂 templates
 ┃ ┗ 📄 index.html
 ┣ 📂 static
 ┃ ┣ 📄 style.css
 ┃ ┗ 📄 main.js
 ┗ 📄 README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hassanimohammadreza/url-shortener.git
cd YOUR_REPOSITORYhttps://github.com/hassanimohammadreza/url-shortener
```
### 2️⃣ Create a virtual environment (Recommended)

```bash
python -m venv venv
```

Activate it:

- Windows
```bash
venv\Scripts\activate
```

- macOS / Linux
```bash
source venv/bin/activate
```

### 3️⃣ Install dependencies
```bash
pip install flask
```

### 4️⃣ Run the application
```bash
python url_shortener.py
```

The application will be available at:

`http://127.0.0.1:5000`

---

### 🌐 How It Works

1. The user enters a long URL.

2. Flask receives the request.

3. The app sends a request to the is.gd API.

4. The shortened URL is returned and displayed to the user.

---

### 📸 Screenshot

![App Screenshot](screenshot.png)

---

### 📜 License

This project is licensed under the MIT License.

---

### 👨‍💻 Author

Your Name
GitHub: https://github.com/YOUR_USERNAME

---

### ⭐ If you found this project useful, consider giving it a star!
