// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).


let planets = ['Mercury', 'Venus', 'Earth', 'Mars','Jupiter', 'Saturn', 'Uranus', 'Neptune']
let colors = ['grey', 'yellow', 'blue', 'red', 'orange', 'cream', 'lightblue', 'darkblue'];

for(let i = 0; i < planets.length; i++){
    let newDiv = document.createElement('div')
    newDiv.className = 'planet'
    newDiv.style.backgroundColor = colors[i]
    document.querySelector('.listPlanets').appendChild(newDiv)

}


