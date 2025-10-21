# Employee App Backend

A complete Node.js backend for an Employee Management App with full CRUD operations.

## Features

- ✅ Express.js server with RESTful API
- ✅ MongoDB Atlas integration with Mongoose
- ✅ Full CRUD operations for employees
- ✅ Input validation and error handling
- ✅ CORS enabled for frontend integration
- ✅ Static file serving for frontend
- ✅ Environment variable configuration

## Setup Instructions

### 1. MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Update the `.env` file with your MongoDB URI

### 2. Environment Configuration

Update the `.env` file with your MongoDB Atlas connection string:

```env
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/employee-app?retryWrites=true&w=majority
PORT=5000
```

### 3. Install Dependencies

Dependencies are already installed, but if needed:

```bash
npm install
```

### 4. Run the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Base URL: `http://localhost:5000/api`

### 1. Get All Employees
- **URL:** `GET /api/employees`
- **Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "position": "Software Engineer",
      "department": "IT",
      "salary": 75000,
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

### 2. Get Single Employee
- **URL:** `GET /api/employees/:id`
- **Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "position": "Software Engineer",
    "department": "IT",
    "salary": 75000,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### 3. Create New Employee
- **URL:** `POST /api/employees`
- **Body:**
```json
{
  "name": "Jane Smith",
  "position": "Product Manager",
  "department": "Product",
  "salary": 80000
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Employee created successfully",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "position": "Product Manager",
    "department": "Product",
    "salary": 80000,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### 4. Update Employee
- **URL:** `PUT /api/employees/:id`
- **Body:** (any combination of fields)
```json
{
  "salary": 85000,
  "position": "Senior Product Manager"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Employee updated successfully",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "position": "Senior Product Manager",
    "department": "Product",
    "salary": 85000,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### 5. Delete Employee
- **URL:** `DELETE /api/employees/:id`
- **Response:**
```json
{
  "success": true,
  "message": "Employee deleted successfully",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "position": "Senior Product Manager",
    "department": "Product",
    "salary": 85000,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### 6. Health Check
- **URL:** `GET /api/health`
- **Response:**
```json
{
  "success": true,
  "message": "Employee App API is running",
  "timestamp": "2025-10-21T..."
}
```

## Employee Schema

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## Error Handling

The API includes comprehensive error handling:

- **400 Bad Request:** Invalid input, validation errors, malformed data
- **404 Not Found:** Employee not found, invalid endpoints
- **500 Internal Server Error:** Database connection issues, server errors

Example error response:
```json
{
  "success": false,
  "message": "Employee not found"
}
```

## Frontend Integration

- Frontend files should be placed in the `dist/build` directory
- All non-API routes will serve the `index.html` file
- API routes are prefixed with `/api/`
- CORS is enabled for cross-origin requests

## Testing the API

You can test the API using tools like:
- Postman
- Insomnia
- Thunder Client (VS Code extension)
- curl commands

Example curl commands:

```bash
# Get all employees
curl http://localhost:5000/api/employees

# Create new employee
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","position":"Developer","department":"IT","salary":70000}'

# Update employee
curl -X PUT http://localhost:5000/api/employees/EMPLOYEE_ID \
  -H "Content-Type: application/json" \
  -d '{"salary":75000}'

# Delete employee
curl -X DELETE http://localhost:5000/api/employees/EMPLOYEE_ID
```

## Project Structure

```
Mern/
├── models/
│   └── Employee.js          # Mongoose schema for Employee
├── routes/
│   └── employees.js         # Employee CRUD routes
├── dist/
│   └── build/
│       └── index.html       # Frontend files (placeholder)
├── .env                     # Environment variables
├── server.js               # Main server file
├── package.json            # Dependencies and scripts
└── README.md              # This file
```