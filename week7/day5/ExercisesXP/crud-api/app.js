const express = require('express')
const app = express()

app.listen(4000, ()=>{
    console.log('Server listening on 4000');
})

const fetchPosts = require('/dataService.js')

app.get('/post', async(req, res)=>{
    const path = 'https://jsonplaceholder.typicode.com/posts'
    try{
    const fetch = await fetchPosts(path)
    res.json(fetch)
    }
    catch{
        res.status(500).send('Failed')
    }
})

console.log('The data has been successfully retrieved and sent as a response');