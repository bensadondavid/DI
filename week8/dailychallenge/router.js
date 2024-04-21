const express = require('express')
const router = express.Router()

const triviaQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
  ];

router.post('/answer-form', (req, res)=>{
    const {answer, index} = req.body
    if(answer.toLowerCase() === triviaQuestions[index].answer.toLowerCase()){
        res.json({success : true})
    }
    else{
        res.json({success : false})
    }
})

module.exports = router