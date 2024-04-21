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

let h1 = document.getElementById('question')
let quizz = document.getElementById('quizz')
let body = document.body
let container = document.querySelector('.container')
let input = document.querySelector('input')

const getQuestion = ()=>{
        
        let index = 0
        let score = 0
        h1.innerHTML = triviaQuestions[index].question

        quizz.addEventListener('submit', e=>{
            e.preventDefault()
            let answer = input.value
            console.log(answer);

            fetch('/answer-form',{
              method : 'POST',
              headers: {
                'Content-Type': 'application/json' 
            },
              body : JSON.stringify({answer : answer, index : index})
            })
            .then(response => response.json())
            .then(data =>{
              console.log(data)
              if(data.success){
                if(index < triviaQuestions.length){
                  h1.innerHTML = triviaQuestions[index].question
                  input.value = ''
                  score++
                  index++
                  }
                  else{
                    h1.innerHTML = 'End of the game'
                  }
                
              }
            })
            .catch(err => console.log('Error:', err));
        })
}

getQuestion()
  