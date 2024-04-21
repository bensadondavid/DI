const express = require('express')
const router = express.Router()

let books = [{id : 1 ,title : 'Harry Potter'}, {id : 2 ,title : 'Cherub'}]

router.get('/', (req, res)=>{ 
    res.send('Hello on this Book Server')
})

router.get('/AllBooks',(req, res)=>{
    res.json(books)
})

router.get('/AllBooks/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    let chosenBook = books.find(b => b.id === id)
    if(chosenBook){
    res.json(chosenBook)
    }
    else{
        res.status(404).send('Page not found')
    }
})

router.post('/AllBooks/',(req, res)=>{
    const newBook = {id : books.length + 1, title : req.params.title}
    books.push(newBook)
    res.json(newBook)
    res.json(books)
})

router.put('/AllBooks/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const index = books.findIndex(b => b.id === id)
    const updatedBook = {id : id, title : req.body.title}
    books[index] = updatedBook
    if(books[index]){
        res.json(books[index])
    }
    else{
        res.status(404).send('Page not found')
    }
})

router.delete('/AllBooks/:id',(req, res)=>{
    const id = parseInt(req.params.id)
    index = books.findIndex(b=> b.id === id)
    books.splice(index, 1)
    res.send('Books deleted successfully')
})

module.exports = router