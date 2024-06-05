# Phone-Express-E-Commerce-MERN-Client
# Live Link : [Phone Express](https://phone-express-cd6d7.web.app/)

## Introduction

Welcome to the Phone Selling eCommerce Website repository. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. It is a comprehensive platform for buying and selling phones with features such as user authentication, product management, shopping cart, and an admin panel.

## Features

- **User Authentication**
    - Sign up, login, and logout functionality using JWT.
- **Product Management**
    - View, add, update, and delete products.
- **Shopping Cart**
    - Add products to the cart, update quantities, and remove products.
- **Checkout**
    - Order placement and payment integration.
- **Admin Panel**
    - Manage users and products.

## Table of Contents

- [Introduction](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#introduction)
- [Technology Stack](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#technology-stack)
- [Project Structure](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#project-structure)
- [Installation and Setup](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#installation-and-setup)
- [Running the Application](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#running-the-application)
- [Features](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#features)
- [API Endpoints](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#api-endpoints)
- [Styling](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#styling)
- [Deployment](notion://www.notion.so/git-repo-a067625bfbb94dc7b1f86ce3ce2d7e6e#deployment)

## Technology Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**:
    - Redux for state management
    - Axios for API requests

## Styling

- **Tailwind CSS**:
    - Utility-first CSS framework for rapid UI development.
    - Custom classes can be added in the `tailwind.config.js` file.

## API Endpoints

- **User Routes**:
    - `POST /api/users/register`: Register a new user.
    - `POST /api/users/login`: Login a user.
    - `GET /api/users/profile`: Get user profile (protected).
- **Product Routes**:
    - `GET /api/products`: Get all products.
    - `POST /api/products`: Add a new product (admin).
    - `PUT /api/products/:id`: Update a product (admin).
    - `DELETE /api/products/:id`: Delete a product (admin).
- **Order Routes**:
    - `POST /api/orders`: Create a new order.
    - `GET /api/orders/:id`: Get order details (protected).
    - `GET /api/orders`: Get all orders (admin).
