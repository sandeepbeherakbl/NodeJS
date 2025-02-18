# NodeJS

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Folder Structure](#project-folder-structure)
- [Project Flow](#project-flow)
- [Usage](#usage)
- [Example Code](#example-code)
- [Conclusion](#conclusion)

---

## Introduction
This guide will help you set up a Node.js project from scratch. It includes installation steps, folder structure, an example application, and how the project flows.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Code editor (e.g., VS Code)
- Git (optional, for version control)

## Installation

1. **Initialize a Node.js project**
   ```sh
   mkdir my-node-app && cd my-node-app
   npm init -y
   ```

2. **Install required dependencies**
   ```sh
   npm install express dotenv cors mongoose
   ```
   _Optional Dev Dependencies:_
   ```sh
   npm install --save-dev nodemon eslint
   ```

3. **Create essential files**
   ```sh
   touch server.js .env .gitignore
   mkdir src config routes models controllers middlewares
   ```

4. **Update package.json for automatic restart**
   Add the following script inside `package.json`:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

---

## Project Folder Structure
```
my-node-app/
│   .env                 # Environment variables
│   .gitignore           # Ignoring files like node_modules
│   package.json         # Project metadata and dependencies
│   server.js            # Entry point
│
├───src/
│   ├── config/          # Configuration files (DB, API Keys, etc.)
│   │   ├── db.js
│   │   ├── dotenv.js
│   │
│   ├── routes/          # Express routes
│   │   ├── userRoutes.js
│   │   ├── authRoutes.js
│   │
│   ├── models/          # Database schemas/models
│   │   ├── User.js
│   │   ├── Product.js
│   │
│   ├── controllers/     # Controllers for handling requests
│   │   ├── userController.js
│   │   ├── authController.js
│   │
│   ├── middlewares/     # Middleware functions
│   │   ├── authMiddleware.js
│   │
│   ├── utils/           # Utility/helper functions
│   │   ├── logger.js
│   │
└───node_modules/        # Dependencies installed by npm
```

---

## Project Flow
1. **Server Startup** - `server.js` initializes Express and connects to the database.
2. **Routing** - Requests are routed through `routes/`.
3. **Controller Processing** - Business logic is handled in `controllers/`.
4. **Database Interaction** - `models/` handles schema and DB operations.
5. **Middleware Execution** - `middlewares/` handles authentication and request validation.
6. **Response Handling** - Responses are sent back to the client.

---

## Usage

### Start the Server
```sh
npm run dev
```

### API Example: User Route
Example endpoint in `routes/userRoutes.js`:
```js
const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUsers);

module.exports = router;
```

Controller in `controllers/userController.js`:
```js
const getUsers = (req, res) => {
    res.json({ message: "List of users" });
};

module.exports = { getUsers };
```

---


#Happy coding! 🚀
