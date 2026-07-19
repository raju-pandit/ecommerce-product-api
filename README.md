# ecommerce-product-api

# 🛒 E-commerce Product API

A RESTful Product Management API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project provides complete CRUD functionality for managing products using both **MongoDB ObjectId** and **slug-based routes**.

---

## 🚀 Features

- ✅ Create a new product
- ✅ Get all products
- ✅ Get product by ID
- ✅ Get product by Slug
- ✅ Update product by ID
- ✅ Update product by Slug
- ✅ Delete product by ID
- ✅ Delete product by Slug
- ✅ Product filtering
- ✅ MongoDB Atlas integration
- ✅ Mongoose Schema Validation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman

---

## 📁 Project Structure

```
ecommerce-product-api/
│── node_modules/
│── .gitignore
│── data.js
│── index.js
│── schema.js
│── package.json
│── package-lock.json
│── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/raju-pandit/ecommerce-product-api.git
```

### Go to Project Folder

```bash
cd ecommerce-product-api
```

### Install Dependencies

```bash
npm install
```

### Run Server

```bash
npm start
```

or

```bash
npm run dev
```

---

## 📌 API Endpoints

### Create Product

```
POST /products
```

### Get All Products

```
GET /products
```

### Get Product By ID

```
GET /products/id/:id
```

### Get Product By Slug

```
GET /products/slug/:slug
```

### Update Product By ID

```
PATCH /products/id/:id
```

### Update Product By Slug

```
PATCH /products/slug/:slug
```

### Delete Product By ID

```
DELETE /products/id/:id
```

### Delete Product By Slug

```
DELETE /products/slug/:slug
```

---

## 📷 Testing

All API endpoints were tested using **Postman**.

---

## 📚 Learning Outcomes

- Express Routing
- MongoDB CRUD Operations
- Mongoose Schema
- Query Parameters
- Dynamic Routes
- Error Handling
- REST API Development

---

## 👨‍💻 Author

**Raju Pandit**

GitHub: https://github.com/raju-pandit

LinkedIn: *(Add your LinkedIn profile here)*

---

⭐ If you found this project useful, don't forget to give it a Star!