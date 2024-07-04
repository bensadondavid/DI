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
  
let index = 0
let score = 0

router.get('/quizz',(req, res)=>{
    
    if(index < triviaQuestions.length){
    let question = triviaQuestions[index].question.toLowerCase()
       res.json({question : question})
    }
    else{
        res.json({message : 'Quizz Over'});
    }
})

router.post('/quizz', (req, res)=>{

    let answer = triviaQuestions[index].answer.toLowerCase()
    if(req.body.answer === answer){
        score++
        res.json({message : 'Great answer !'})
    }
    else{
        res.json({message : 'Wrong answer'})
    }
    index++
})

router.get('/quizz/score', (req, res)=>{
    if(index === triviaQuestions.length){
        finalScore = score
        res.json({'score' : finalScore })
    }
    else{
        res.json({message : 'The quizz not over yet'})
    }
})

module.exports = router