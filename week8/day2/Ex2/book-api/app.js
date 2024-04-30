const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const books = []

app.listen(4000, ()=>{
    console.log('Server is listening on 4000');
})

app.get('/api/books', (req, res)=>{

    try{
        const newBook = JSON.stringify(books)
        res.send(newBook)
    }
    catch(err){
        res.send('Error', err)
    }
})

app.get('/api/books/:bookId', (req, res)=>{

    try{
        const id = req.params.bookId
        const selectedBook = books.find(b => b.id === id)
        res.status(200).json(selectedBook)
        }
        catch(err){
            res.status(404).send('Book not found', err)
        }
})

app.post('/api/books', (req, res)=>{
    
    try{
        const newBook = req.body
        books.push(newBook)
        res.status(201).send(newBook)
    }
    catch(err){
        res.status(404).send('Error', err)
    }
})