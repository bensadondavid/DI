const express = require('express')
const router = express.Router()


router.post('/answer-form', (req, res)=>{
    const {answer, index} = req.body
    if(answer.toLowerCase()=== triviaQuestions[index].answer.toLowerCase()){
        res.json({success : true})
    }
    else{
        res.json({success : false})
    }
})

module.exports = router