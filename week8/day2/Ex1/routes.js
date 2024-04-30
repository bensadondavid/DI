const express = require('express')
const router = express.Router()
const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: 'david2001',
    port: 5432,
}) 



router.get('/Posts',async (req, res)=>{

    try{
    const blogs = await pool.query(
        `SELECT * FROM posts`
    )
    res.send(blogs)
    }
    catch(error){
        res.send('Error', error)
    }

})

router.get('/Posts/:id',async (req, res)=>{

    try{
        const id = req.body
        const blogId = await pool.query(
            `SELECT * FROM posts WHERE id = $1`,
            [id]
        )
        res.send(blogId.rows[0])
    }
    catch(error){
        res.send('Error', error)
    }
})

router.post('/Posts', async (req, res)=>{
    
    try{
        const {id, title, content} = req.body
        const newBlog = await pool.query(
        `INSERT INTO posts(id, title, content) VALUES($1, $2, $3) RETURNING *`,
        [id, title, content]
        )
        res.send('New blog created')
    }
    catch(error){
        res.send('Error', error)
    }
})

router.put('/Posts/:id', async (req, res)=>{

    try{
        const {id, title, content} = req.body
        const updatedPost = await pool.query(
        'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
            [id, title, content]
        )
        res.send(updatedPost)
    }
    catch(error){
        res.send('Error', error)
    }
})

router.delete('/Posts/:id', async (req, res)=>{

    try{
        const id = req.params.id
        const deletePost = await pool.query(
        'DELETE  FROM posts WHERE id = $1',
            [id]
        )
        res.send('Post deleted')
    }
    catch(error){
        res.send('Error', error)
    }
})
