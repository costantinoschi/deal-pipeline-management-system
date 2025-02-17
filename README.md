# Deal Pipeline Management System

## Overview
This project is a **Deal Pipeline Management System** designed to streamline the tracking and management of deals throughout the investment lifecycle. The system provides CRM-like functionality to track deal stages (e.g., sourcing, due diligence, closed), collaboration tools for team members to share notes and documents, and reporting and analytics to measure pipeline health and conversion rates.

The project is built using **Flask** for the backend and **React** for the frontend.

---

## Features
1. **Deal Tracking**: Track deals through various stages (sourcing, due diligence, closed).
2. **Collaboration**: Share notes and documents for each deal.
3. **Reporting**: Measure pipeline health and conversion rates.
4. **User Interface**: Intuitive frontend for managing deals.

---

## Installation
To set up the project, follow these steps:

### Prerequisites
- Python 3.9 or higher
- Node.js (for frontend development)
- pip (Python package manager)
- npm (Node.js package manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/deal-pipeline-management.git
   cd deal-pipeline-management

2. Install backened dependencies:
    ```bash
    pip install -r requirements.txt

3. Install frontened dependencies:
    ```bash
    cd frontend
    npm install

4. Run the backend server:
    ```bash
    python backend/app.py

5. Run the frontend development server:
    ```bash
    cd frontend
    npm start


## Project Structure

<pre>
deal-pipeline-management/
│
├── backend/                # Backend code (Flask)
│   ├── app.py              # Flask application
│   ├── models.py           # Database models
│   ├── routes.py           # API routes
│   ├── templates/          # Flask HTML templates
│   │   └── index.html      # Example template
│   └── static/             # Static files (CSS, JS)
│       └── styles.css      # Example CSS file
│
├── frontend/               # Frontend code (React)
│   ├── public/             # Public assets
│   │   └── index.html      # HTML template
│   ├── src/                # React components
│   │   ├── App.js          # Main React component
│   │   ├── DealList.js     # Component for displaying deals
│   │   └── DealForm.js     # Component for adding/editing deals
│   └── package.json        # Frontend dependencies
│
├── data/                   # Folder for storing data (if not using a database)
│   └── deals.json          # Example data file
│
├── .gitignore              # Files to ignore in Git
├── README.md               # Project documentation
└── requirements.txt        # Python dependencies
</pre>


## Usage

**Backend**

The backend is built using Flask and RESTful APIs for managing deals.

**Frontend**

The frontend is built using React and provides a user-friendly interface for interacting with the backend.


## Dependencies

**Backend**

 - **Flask**: Web framework for python
 - **Flask-CORS**: Enables Cross-Origin Resource Sharing (CORS).

 Frontend
 - **React**: Javascript library for building user interfaces.
 - **Axios**: HTTP client for making API requests.

## Contributing

 Contributions are welcome! If you’d like to contribute, please follow these steps:
 
 1. Fork the repository.
 
 2. Create a new branch for your feature or bugfix.
 
 3. Commit your changes and push to the branch.
 
 4. Submit a pull request.


## Contact

For questions or feedback, please contact:

**Costantinos C.**

**Email**: cachiamba@gail.com

**GitHub**: costantinoschi