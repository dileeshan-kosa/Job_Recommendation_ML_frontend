
### ✨Frontend README (`Job_Recommendation_ML_frontend`)

```markdown
# 🚀 ML-Powered Job Recommendation System (Frontend)

> **Repository Links:**
> * 🖥️ **Frontend Repository:** [Current Repo](https://github.com/dileeshan-kosa/Job_Recommendation_ML_frontend.git)
> * ⚙️ **Backend & ML Repository:** [View Backend Repo](https://github.com/dileeshan-kosa/Job_Recommendation_ML_backend.git)

## 📖 1. Project Overview
This repository contains the client-side code for a Machine Learning-powered Job Recommendation System. It provides a sleek, modern, and highly responsive user interface where users can register, log in, manage their profiles, and upload their CVs. The frontend communicates with the Node.js/Python backend to process user data and display highly accurate, AI-driven job recommendations based on semantic similarity and XGBoost classification.

## ✨ 2. Key Features
* **Modern Authentication Flow:** Secure user registration and login with protected route management.
* **CV & Profile Management:** seamless uploading of PDF CVs and manual profile data entry.
* **Intelligent Job Matching:** Displays predicted job categories and the top 5 recommended jobs with percentage-based similarity scores.
* **Responsive Design:** A fully responsive, SaaS-style UI built with Tailwind CSS.
* **Real-time Feedback:** Integrated toast notifications for successful actions and error handling.

## 🗺️ 3. System Architecture & User Flow

(./sequenceDiagram.png) 

## 🛠️ 4. Tech Stack

**Frontend:**

* **Framework:** React 19
* **Routing:** React Router DOM
* **Styling:** Tailwind CSS & PostCSS
* **HTTP Client:** Axios
* **Icons & Notifications:** React Icons, React Toastify

**Backend (Reference):**

* Node.js, Express, MongoDB, Python (SBERT, XGBoost, Pandas)

## 📂 5. Project Structure

```text
Job_Recommendation_ML_frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Sidebar, Layouts)
│   ├── pages/              # Main application pages (Login, SignUp, Welcome, Dashboard)
│   ├── App.js              # Root component and Routing logic
│   ├── index.css           # Global Tailwind styles
│   └── index.js            # React DOM entry point
├── package.json            # Frontend dependencies
└── tailwind.config.js      # Tailwind configuration

```

## 💻 6. Local Setup & Installation

**Prerequisites:**

* Node.js (v16 or higher)
* Git

**1. Clone the repository**

```bash
git clone [https://github.com/dileeshan-kosa/Job_Recommendation_ML_frontend.git](https://github.com/dileeshan-kosa/Job_Recommendation_ML_frontend.git)
cd Job_Recommendation_ML_frontend

```

**2. Install dependencies**

```bash
npm install

```

**3. Configure Environment Variables**
Create a `.env` file in the root directory and add your backend API URL:

```env
REACT_APP_API_URL=http://localhost:8000/api

```

**4. Start the development server**

```bash
npm start

```

The application will be available at `http://localhost:3000`.

## 🚀 7. Future Enhancements

* Add a loading skeleton state while the ML model processes the CV.
* Implement a dedicated recruiter dashboard for managing posted job vacancies.
* Allow users to download their prediction results as a PDF report.

## 🧑‍💻 Author

* [Dileeshan Kosala](https://github.com/dileeshan-kosa)

---
---
