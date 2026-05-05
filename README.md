# Credit Card Fraud Detection System

##  Overview

This project is a full-stack machine learning application that detects fraudulent credit card transactions in real-time. It combines a trained ML model with a FastAPI backend and a user-friendly web interface.

The system allows users to input transaction details and instantly receive a fraud prediction along with a risk score.

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** FastAPI (Python)
* **Machine Learning:** Scikit-learn
* **Model Type:** Logistic Regression
* **Tools:** VS Code, Git, GitHub

---

## How It Works

1. User enters transaction details (Time, Amount, V1–V28 features).
2. Frontend sends data to the backend via API.
3. Backend processes input using a trained ML model.
4. Prediction (Fraud / Not Fraud) and risk score are returned.
5. Result is displayed on the UI.

---

##  Installation & Setup

###  Clone the repository

```bash
git clone https://github.com/SaadXKhan09/credit-card-fraud-detection.git
cd credit-card-fraud-detection
```

###  Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run at:

```
https://credit-card-fraud-detection-i247.onrender.com
```
Backend Testing (Swagger UI)

You can test the backend API directly using FastAPI’s built-in Swagger UI:
```
 https://credit-card-fraud-detection-i247.onrender.com/docs
```

### Run Frontend

* Open `frontend/index.html` using Live Server
  **OR**

```bash
cd frontend
python -m http.server 5500
```

Frontend will run at:

```
http://127.0.0.1:5500
```

---

##  API Endpoints

###  POST /predict

* Predicts whether a transaction is fraudulent

### GET /health

* Checks if API is running

### GET /

* Basic API status

Swagger UI:

```
 https://credit-card-fraud-detection-i247.onrender.com/docs
```

---

##  Features

* Real-time fraud detection
* Risk score generation
* Full-stack integration (Frontend + Backend + ML)
* REST API with FastAPI
* Interactive UI dashboard

---

##  Limitations

* Requires manual input of V1–V28 features
* Basic UI (can be improved)
* Model trained on anonymized dataset

---

## Future Improvements

* Improve UI/UX design
* Automate feature extraction (remove V1–V28 input)
* Deploy on cloud (Render / Vercel / AWS)
* Add authentication & logging
* Use advanced ML/DL models

---

##  Acknowledgement

Dataset inspired by real-world credit card fraud detection datasets and machine learning techniques.
