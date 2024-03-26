// 🌟 Exercise 1 : Find The Numbers Divisible By 23

// Instructions

// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313


function displayNumbersDivisible(){
    let numbers = []
    let sum = 0

    for(let i=0; i <= 500; i++){
        if(i % 23 == 0){
        console.log(i)
        numbers.push(i)}
    }

    for(let j = 0; j < numbers.length; j++){
        sum += numbers[j]
    }
console.log('The numbers divisble by 23 are : ' + numbers)
console.log('The sum of these numbers are ' + sum)
}
displayNumbersDivisible()

// 🌟 Exercise 2 : Shopping List

// Instructions

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'apple','orange']
let total = 0

function myBill(){

    for(let i = 0; i < shoppingList.length; i++){
        let item = shoppingList[i]
        if (stock[item] > 0){
            total += prices[item]
        }
        
    }
    return(total)
}
console.log(myBill())


// Exercise 3 : What’s In My Wallet ?

// Instructions

// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true


function changeEnough(itemPrice, amountOfChange){

    const values = [0.25, 0.10, 0.05, 0.01]

    let totalChange = 0
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * values[i]

        if(itemPrice <= totalChange){
            return true
        }
        else{
            return false
        }
}
}
console.log(changeEnough(4.24, [25, 20, 5, 0]))


// 🌟 Exercise 4 : Vacations Costs

// Instructions

// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()


function hotelCost(){

    let num = 0
    let price = 0
    while (isNaN(num) || num <= 0) {
        let traveler = prompt('How many nights would you like to stay in the hotel?')
        num = Number(traveler)
        price  = 140 * num
    
    }
    return price
}
hotelCost()


function planeRideCost(){
    let destination = ''
    let price = 0
    while (!destination){
         destination = prompt('What is your destination?')
    }
    if(destination == 'London'){
        price += 183
    }
    else if (destination == 'Paris'){
        price += 220
    }
    else{
        price += 300
    }
    return price
}
planeRideCost()


function rentalCarCost(){
    let numDays = 0
    let price = 0
    while (isNaN(numDays) || numDays <= 0) {
        numDays = prompt('How many days would you like to rent a car?')
        if (numDays > 10){
        price = (numDays * 40)/0.05
        }
        else{
            price = numDays * 40
        }
    }
    return price
}

function totalVacationCost() {
    let hotel = hotelCost()
    let plane = planeRideCost()
    let car = rentalCarCost()
    return `The hotel costs $${hotel}, the trip costs $${plane} and the car costs $${car}.`
}


// 🌟 Exercise 5 : Users

// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.


let mainDiv = document.getElementById('container')
console.log(mainDiv)
document.querySelectorAll('.list')[0].children[1].textContent = 'Richard'
document.querySelectorAll('.list')[1].children[1].remove()

let lists = document.querySelectorAll('.list')
for(let i = 0; i < lists.length; i++){
    if(lists[i].children[0]){
    lists[i].children[0].textContent = 'David'
    }
}

let uls = document.getElementById('list')