// 🌟 Exercise 1 : List Of People

// Instructions

// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays

// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.


const people = ["Greg", "Mary", "Devon", "James"]

people.shift()
console.log(people)

people.splice(2, 1, 'Jason')
console.log(people)

people.push('David')
console.log(people)

let index = people.indexOf('Mary')
console.log(index)

let scndPeople = people.slice(1,3)
console.log(scndPeople)

let indexscnd = people.indexOf('Foo')
console.log(indexscnd)
//That's a convention to say element not found

let last = people[people.length - 1]
console.log(last)


for(i = 0; i<=people.length; i++){
    let each = people[people.length - i]
    console.log(each)
}

for(i = 0; i<=3; i++){
    let each = people[people.length - i]
    console.log(each)
}


for(i = 0; i<=people.length; i++){
    if(people[i] == 'Devon')
    break
}

// 🌟 Exercise 2 : Your Favorite Colors

// Instructions

// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


let colors = ['White', 'Black', 'Blue', 'Red', 'Purple']

for(i=0 ; i < colors.length; i++){
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

let numbers = ['st', 'nd', 'rd', 'th', 'th']

for(i=0 ; i < colors.length; i++){
    console.log(`My ${i+1}${numbers[i]} choice is ${colors[i]}`)
}

// 🌟 Exercise 3 : Repeat The Question

// Instructions

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// let user = prompt('Give me a number')
//     while(user < 10){
//        user = prompt('Give me a number')
//     }


// 🌟 Exercise 4 : Building Management

// Instructions:

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }


// Review About Objects

// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
    

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building['numberOfFloors'])

console.log(building['numberOfAptByFloor']['firstFloor'], building['numberOfAptByFloor']['thirdFloor'])

console.log(building['nameOfTenants'][1], building['numberOfRoomsAndRent']['dan'])

console.log(building['numberOfRoomsAndRent']['sarah'][1])

let sarahRent = Number(building['numberOfRoomsAndRent']['sarah'][1])
let davidRent = Number(building['numberOfRoomsAndRent']['david'][1])
let danRent = Number(building['numberOfRoomsAndRent']['dan'][1])

if(sarahRent + davidRent > davidRent){
    danRent += 1200
}
console.log(danRent)


// 🌟 Exercise 5 : Family

// Instructions

// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


const family = {
    'Father' : 'Michel',
    'Mother' : 'Sophie',
    'Bsister' : 'Sarah-Lea',
    'Brother' : 'David',
    'Ssister' : 'Yay',
    'VSsister' : 'Eden'
}

for(let key in family){
    console.log(key)
    console.log(family[key])
}

// Exercise 6 : Rudolf

// Instructions

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let sentence = ''
  for(key in details){
    sentence += `${key} ${details[key]} `
  }
  console.log(sentence)

// Exercise 7 : Secret Group

// Instructions

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let letters = []
for(key in names){
    for(letter in key){
    letters.push(names[key][letter][0])
}
}
letters.sort()
let newLetters = letters.join('')
console.log(newLetters)

date.now()