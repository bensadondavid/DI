// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.



let inputValue = []
function getTheValue(event){
event.preventDefault()
inputValue = []
document.querySelectorAll('input').forEach(function(input){
    if(input.value != ''){
    inputValue.push(input.value)
    }
    else{
        console.log('required field')
    }
})
console.log(inputValue)
}

function playGame(){
    console.log(`One day, ${noun.value} decided to visit the ${adjective.value} Zoo. As they walked through the gates, they couldnt believe their eyes when they saw  ${person.value} 
    ${verb.value}  right in the middle of the ${place.value} exhibit! It was the most unexpected sight of the day.`)}


function launch(){
let button = document.getElementById('lib-button')
button.addEventListener('click',function(event){
    event.preventDefault()
    getTheValue(event)
    playGame()
}
)}

launch()


