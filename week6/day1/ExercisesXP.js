// Exercise 1 : Scope

// Instructions

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?



// 1. a will be 3 because 5 > 1
// 1.2. it will be an error cause const cannot be changed

// 2.1. a = 0 cause it doesnt change anything
//     a = 5 cause functTwo changes the value of a 
//     a = 5 cause functTwo have already changed the value of a 

// 2.2. it will be an error cause const cannot be changed

// 3.1. it will be undefined cause the function doesnt return anything 
        // error cause a is not defined in the scope of functFive

// 4.1. a  = test 
// 4.2 it wont be a problem cause it is not the same variable 

// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// 5.1 in the block is 5
// outside the block is 2 

// 5.2 it wont be a problem cause it is not the same variable (it is not in the same scope)


// 🌟 Exercise 2 : Ternary Operator

// Instructions

// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true

let experiencePoints

experiencePoints = winBattle() > 10 ? true : 1

console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?

// Instructions

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


const isString = arg => typeof(arg) == 'string' 

// const isString = arg => {
//     if(typeof(arg) == 'string'){
//         return true
//     }
//     else{
//         return false
//     }
// }

// 🌟 Exercise 4 : Find The Sum

// Instructions

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const theSum = (a,b) => a+b;

console.log(theSum(1,2));


// 🌟 Exercise 5 : Kg And Grams

// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function convert(weight){
//     weight = `${weight}kg is ${weight*1000}gr`
//     return weight
// }
// console.log(convert(1));

const convert = weight => `${weight}kg is ${weight*1000}gr`

console.log(convert(2));


// 🌟 Exercise 6 : Fortune Teller

// Instructions

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

let body = document.querySelector('body')
let newP = document.createElement('p')

// const selfInvok = (number_of_children, partner_s_name, geographic_location, job_title) => 
// `You will be a ${job_title} in ${geographic_location}, and married to ${partner_s_name} with ${number_of_children} kids.`
// console.log(selfInvok(2,'Noa', 'panama', 'web developper'));

newP.innerHTML =(function(number_of_children, partner_s_name, geographic_location, job_title){
   return (`You will be a ${job_title} in ${geographic_location}, and married to ${partner_s_name} with ${number_of_children} kids.`);
    
})
(2,'Noa', 'panama', 'web developper')

body.appendChild(newP)

// 🌟 Exercise 7 : Welcome

// Instructions

// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


let nav = document.querySelector('nav')
nav.style.width = 'auto'
nav.style.display = 'flex'
nav.style.justifyContent = 'flex-end'
let newDiv = document.createElement('div')
newDiv.style.marginRight = '10px'
let profPicture = document.createElement('img')
profPicture.src = 'img-cv.jpeg'
profPicture.width = 50
profPicture.height = 50

newDiv.innerHTML = (function(name){
    return `Hello ${name}`
})('David')

newDiv.appendChild(profPicture)
nav.appendChild(newDiv)


// 🌟 Exercise 8 : Juice Bar

// Instructions

// You will use nested functions, to open a new juice bar.

// Part I:

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:

// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// function makeJuice(size){
//     return function addIngredients(first_ingredient,seconde_ingredient,third_ingredient){
//         return `The client wants a ${size} juice containing ${first_ingredient}, ${seconde_ingredient} and ${third_ingredient}`
//     }
// }
// document.querySelector('body')
// let main = document.createElement('main')
// body.appendChild(main)
// let newPa = document.createElement('p')

// makeJuice = size =>  addIngredients = (first_ingredient,seconde_ingredient,third_ingredient) => 
// `The client wants a ${size} juice containing ${first_ingredient}, ${seconde_ingredient} and ${third_ingredient}`

// newPa.innerHTML = makeJuice('small')('a', 'b', 'c')

// main.appendChild(newPa)

document.querySelector('body')
let main = document.createElement('main')
body.appendChild(main)
let newPa = document.createElement('p')

function makeJuice(size){
    let ingredients = []
    return function addIngredients(first_ingredient,seconde_ingredient,third_ingredient){
        ingredients.push(first_ingredient, seconde_ingredient, third_ingredient)
        return function displayJuice(){
            return `The client wants a ${size} juice containing ${ingredients[0]}, ${ingredients[1]} and ${ingredients[2]}`
        }
    }
}

console.log(makeJuice('small')('a','b','c')())    

newPa.innerHTML = makeJuice('small')('a', 'b', 'c')()

main.appendChild(newPa)

