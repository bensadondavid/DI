// 🌟 Exercise 1: Building A RESTful API

// Instructions

// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).


const express = require('express')
const app = express()

data = [
    { id : 1, title : 'title1', content : 'Content1'},
    { id : 2, title : 'title2', content : 'Content2'},
    { id : 3, title : 'title3', content : 'Content3'},
    { id : 4, title : 'title4', content : 'Content4'}
]

app.listen(4000, ()=>{
    console.log('Server is listening on port 4000');
})

app.use(express.json())


app.get('/Get/posts', (req, res)=>{
    res.json(data)
})

app.get('/Get/post/:id', (req, res)=>{
    const id = parseInt(req.params.id, 10)
    const post = data.find(p => p.id === id)
    if(!post){
        res.status(404).send('Not found')
    }
    else{
    res.json(post)
    }
})

app.post('/Post/posts', (req, res)=>{
    const newid = data.length + 1
    const newProcuct =  { id : newid, title : `title${newid}`, content : `content${newid}`}
    data.push(newProcuct)
    res.json(newProcuct)
})

app.put('/PUT/posts/:id', (req, res)=>{
    const id = parseInt(req.params.id, 10)
    const index = data.findIndex((product) => product.id === id)
    if(index != -1){
    const updatedProduct = { id : id, title : req.body.title, content : req.body.content}
    data[index] = updatedProduct
    res.json(updatedProduct)
    }
    else{
        res.status(404).send('Error')
    }
})



