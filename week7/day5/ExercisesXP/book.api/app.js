// 🌟 Exercise 2: Building A Basic CRUD API With Express.js

// Instructions

// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

// Create a new directory named book-api.

// Inside the book-api directory, initialize a new Node.js project and install the express package.

// Create a new file named app.js in the book-api directory.

// In app.js, import the express module and create an instance of an Express app.

// Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).



const express = require('express')
const app = express()

books = [
    {id : 1, title : 'Harry Potter', author : 'JK Rowling', publishedYear : 1997 },
    {id : 2, title : 'Cherub', author : 'Robert Muchamore', publishedYear : 2004 },
    {id : 3, title : 'Eragon', author : 'Chistopher Paolini', publishedYear : 2002 }
]

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
})

app.use(express.json())

app.get('/Get/api/books', (req, res)=>{
    res.json(books)
})

app.get('/Get/api/books/:bookId',(req, res)=>{
    const id = parseInt(req.params.bookIdid, 10)
    const book = books.find(b => b.id === id)
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(404).send('Book not found')
    }
})

app.post('/Post/api/books', (req, res)=>{
    const newBook = {id : books.length + 1, title : req.body.title, author : req.body.author, publishedYear : req.body.publishedYear }
    books.push(newBook)
    res.status(201).json(newBook)
})