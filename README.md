# Pocket Money 💰

Pocket Money is a full-stack web application designed to help users track their monthly expenses efficiently. With an intuitive user interface and robust backend, it simplifies expense management and provides insights into spending habits.

---

## Features
- **Expense Tracking:** Add, view, edit, and delete monthly expenses.
- **Categorization:** Assign categories to expenses for better organization.
- **Dashboard:** Visualize spending patterns with charts and summaries.
- **Secure Login:** User authentication and secure data storage.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## Technologies Used
### Backend:
- **[Django](https://www.djangoproject.com/):** Python web framework for backend development.
- **[PostgreSQL](https://www.postgresql.org/):** Database for storing user data and expense records.
- **[REST API](https://restfulapi.net/):** Enables frontend-backend communication.

### Frontend:
- **[React.js](https://reactjs.org/):** JavaScript library for building the user interface.

### Deployment and Tools:
- **[Docker](https://www.docker.com/):** Containerization for consistent development and deployment.
- **[AWS](https://aws.amazon.com/):** Cloud services for hosting and scalability.

---

## Contributors
- **Marc Yebra** – Full Stack Developer

---

## Future Enhancements
- Add expense prediction using AI/ML.
- Enable multi-user support with shared budgets.
- Integrate with third-party services.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Python 3.10+**
- **Node.js** and **npm/yarn**
- **Docker**

### Clone the Repository
1. Clone the repository:
   ```bash
   git clone https://github.com/MarcYebra/pocket-money.git
   cd pocket-money
2. Backend Setup (Django):
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

3. Frontend Setup (React):
cd ../frontend
npm install
npm start

4. Docker Setup (optional):
docker-compose up --build

"""
Pocket Money Application

Copyright © 2024 Marc Yebra. All rights reserved.
This project is licensed under the MIT License.
See the LICENSE file in the project root for full license information.
"""


