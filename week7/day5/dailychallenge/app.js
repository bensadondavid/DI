// Instructions

// Create a fun emoji guessing game using an Express API.
// The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
// The game will keep track of the player’s score and provide feedback on their guesses.

// Requirements:

// Set up an Express server to handle the game.

// Create an array of emoji objects, each containing the emoji character and its corresponding name.

// Generate a random emoji from the array and select a few incorrect options as distractors.

// Using a form, present the player with the random emoji and multiple choice options (including the correct name).

// Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.

// Check if the guess is correct and update the player’s score.

// Provide feedback to the player, indicating whether their guess was correct or not.

// Continue presenting new emojis and options for the player to guess.

// Keep track of the player’s total score.

// Implement a leaderboard to show the top scores.
// sample emojis

// const emojis = [
//     { emoji: '😀', name: 'Smile' },
//     { emoji: '🐶', name: 'Dog' },
//     { emoji: '🌮', name: 'Taco' },
//     // Add more emoji objects
// ];
// Advanced Features (Optional):

// Add a time limit for each guess.
// Implement user authentication to save and display personalized scores.
// Use emojis from a larger dataset or an external API.
// Implement difficulty levels that affect the number of options or time limit.
// Implement a “hint” feature that provides a clue about the emoji’s name.

const express = require('express')
const app = express()

app.listen(4000, (req, res)=>{
    console.log('Server is listening on 4000');
})

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍭', name: 'Lolipop' },
    { emoji: '🍩', name: 'Dougnhut' },
    { emoji: '🍺', name: 'Beer' },
    { emoji: '⚽️', name: 'Ball' },
    { emoji: '🎸', name: 'Guitar' }
]

function Generate(){
    let index = Math.floor(Math.random() * emojis.length)
    let prop = emojis[index].emoji

    let arr = []
    let choice1 = emojis[index].name
    arr.push(choice1)
   
    for(let i = 2; i < 5 ;i++){
        let index = Math.floor(Math.random() * emojis.length)
        let choice = emojis[index].name
        while(arr.includes(choice)){
            index = Math.floor(Math.random() * emojis.length)
            choice = emojis[index].name
        }
        arr.push(choice)
    }
        arr.sort()

}

app.get('/generate-quiz', (req, res) => {
    res.json(Generate());
});

app.get('/check-answer', (req, res)=>{
    if
})


