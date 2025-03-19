# 📂 File Upload API using Multer in Node.js

This is a simple Node.js REST API that allows users to:

- Upload single or multiple files using `Multer`
- Delete a specific file by filename
- View all uploaded files stored in the `uploads/` directory

## 📚 Features
- Upload multiple files (max: 10 files) at once.
- Delete any file by specifying the filename.
- View a list of all uploaded files.
- Local storage of uploaded files under the `uploads/` directory.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/file-upload-api.git
cd file-upload-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Server
```bash
npm start
```

The server will run on:
```
http://localhost:3000
```

---

## 🔥 API Endpoints

### 1. Upload Files
```http
POST /api/files/upload
```
- **Description:** Upload a single or multiple files (max: 10 files).
- **Request Body:**
    - `files` (array of files)
- **Success Response:**
```json
{
  "files": ["file1.png", "file2.jpg"]
}
```
- **Error Response:**
```json
{
  "error": "Error uploading file."
}
```

---

### 2. Delete a File
```http
DELETE /api/files/delete/:filename
```
- **Description:** Delete a file by specifying the filename.
- **URL Parameter:**
    - `filename` (string) - Name of the file to delete.
- **Success Response:**
```json
{
  "message": "File deleted successfully"
}
```
- **Error Response:**
```json
{
  "error": "File not found"
}
```

---

### 3. View All Files
```http
GET /api/files/view
```
- **Description:** Retrieve a list of all uploaded files.
- **Success Response:**
```json
{
  "files": ["file1.png", "file2.jpg"]
}
```
- **Error Response:**
```json
{
  "error": "Error reading the upload directory."
}
```

---

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## 📧 Contact
For any inquiries or suggestions, please contact:
- **Email:** hasanalali887h@gmail.com
- **GitHub:** [hasanalali2003](https://github.com/hasanalali2003)
