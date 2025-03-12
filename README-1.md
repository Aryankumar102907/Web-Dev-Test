# 📒 Notes Management API

This project is an **Express.js HTTP server** built in **Node.js**, which handles the logic of a **Notes Management App**.

## 🛠 Features
- **No database required** – all data is stored in an **in-memory array**.
- Each **note** has:
  - A unique **auto-generated ID**.
  - A **title** (string).
  - A **description** (string).
- Fully functional **CRUD operations** (Create, Read, Update, Delete).

---

## 📌 API Endpoints

### **1️⃣ GET `/notes` - Retrieve all notes**
- **Description:** Fetch and return all stored notes.
- **Response:** `200 OK` with an array of notes in JSON format.
- **Example Request:**  
  ```bash
  GET http://localhost:3000/notes
  ```
### **2️⃣ POST `/notes` - Create a new note**
- **Description:** Adds a new note with a title and description.
- **Request Body:**
  ```json
  { "title": "Workout Plan", "description": "Go to the gym at 6 PM" }
  ```
- **Response:**
  ```json
  { "id": "3", "message": "Note created successfully" }
  ```
- **Example Request:**
  ```bash
  POST http://localhost:3000/notes
  ```
- **Status Code:** `201 Created`

### **3️⃣ PUT `/notes` - Update an existing note**
- **Description:** Updates a note by its ID.
- **Request Body:** (Send the ID along with updated fields)
  ```json
  { "id": "1", "title": "Updated Meeting Notes", "description": "Revised project roadmap" }
  ```
- **Response (if note exists):**
  ```json
  { "message": "Note updated successfully" }
  ```
- **Response (if note not found):**
  ```json
  { "error": "Note not found" }
  ```
- **Example Request:**
  ```bash
  PUT http://localhost:3000/notes
  ```
- **Status Code:**
  - `200 OK` if updated
  - `404 Not Found` if note doesn't exist

### **4️⃣ DELETE `/notes` - Delete a note**
- **Description:** Removes a note by its ID.
- **Request Body:**
  ```json
  { "id": "2" }
  ```
- **Response (if note exists):**
  ```json
  { "message": "Note deleted successfully" }
  ```
- **Response (if note not found):**
  ```json
  { "error": "Note not found" }
  ```
- **Example Request:**
  ```bash
  DELETE http://localhost:3000/notes
  ```
- **Status Code:**
  - `200 OK` if deleted
  - `404 Not Found` if note doesn't exist