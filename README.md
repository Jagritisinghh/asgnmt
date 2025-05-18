# assignment

**OBJECTIVE**
Developed a RESTful API to manage a personal book collection. The API will support CRUD (Create, Read, Update, Delete) operations for books. It will allow users to add books, retrieve book details, update information, and delete books. This project will enhance your understanding of building API endpoints, working with databases, and validating incoming data.

**INSTALLATION INSTRUCTIONS**
Step 1: Node init
step 2: npm install express, mongoose, dotenv,cors,nodemon
step 3: Add the mongoDb url in your .env file
step 4: Start the project-"node index.js"

**DATABASE SETUP**
step 1: install mongoose
step 2: establish database connection
step 3: copy the connection url and paste it in the .env file

**API Documentation**
✅ GET /books
Description: Retrieve a list of all books in the collection.
Response:
Status Code: 200 OK
Body: JSON array of books


[
  {
    "id": "ObjectId",
    "title": "Book Title",
    "author": "Author Name",
    "genre": "Fiction",
    "publishedYear": 2020,
    "status": "reading",
    "createdAt": "2025-04-11T00:00:00Z"
  }
]
✅ GET /books/:id
Description: Retrieve a specific book by its ID.


Response:


Status Code: 200 OK (if found)
Status Code: 404 Not Found (if book with ID does not exist)
Body: JSON object with book details
{
  "id": "ObjectId",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "publishedYear": 2020,
  "status": "reading",
  "createdAt": "2025-04-11T00:00:00Z"
}
✅ POST /books
Description: Add a new book to the collection.
Request Body:

{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "publishedYear": 2020,
  "status": "unread"
}
Response:


Status Code: 201 Created
Body: JSON object with the newly created book details


{
  "id": "ObjectId",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "publishedYear": 2020,
  "status": "unread",
  "createdAt": "2025-04-11T00:00:00Z"
}
✅ PUT /books/:id
Description: Update the details of an existing book.


Request Body:

 {
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "genre": "Non-Fiction",
  "publishedYear": 2021,
  "status": "reading"
}
Response:


Status Code: 200 OK (if update is successful)
Status Code: 404 Not Found (if book with ID does not exist)
Body: JSON object with updated book details


✅ DELETE /books/:id
Description: Delete a book from the collection.


Response:


Status Code: 204 No Content (if delete is successful)
Status Code: 404 Not Found (if book with ID does not exist)
