# Study Notion

## Overview

Study Notion Clone is a web-based Learning Management System (LMS) built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a feature-rich environment for users to explore courses, manage profiles, and engage in learning activities. The project incorporates various functionalities, including user authentication, OTP generation, course catalog, instructor dashboards, and more.


## Tech Stack

- React.js
- Node.js
- MongoDB
- Express.js

## Features

- OTP generation through Nodemailer for sign-up authentication.
- Categories of courses stored in the backend for administrators to manage.
- Three profiles (Student, Instructor, Admin) with unique interfaces.
- Razorpay integration for purchasing courses.
- Course rating and feedback section available only after purchasing the course.
- Contact Us form built using React Hook Forms and Node Mailer.

## Usage

1. Clone the repository.

```bash
git clone https://github.com/Sanjeev12357/Study-Notion-Clone.git
cd Study-Notion-Clone
```

2. Install dependencies.

```bash
cd frontend
npm install

cd backend
npm install
```

3. Set up the environment variables. Create a `.env` file in the `backend` directory and configure the following:

```env
PORT=your_server_port
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
MAILER_EMAIL=your_mailer_email
MAILER_PASSWORD=your_mailer_password
```

4. Run the application.

```bash
cd frontend
npm start

cd backend
npm start
```

Visit `http://localhost:3000` to access the application.

Feel free to customize this README further based on your project's specific details and requirements.
