// 🌟 Exercise 1 : Comparison

// Instructions

// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


const compareToTen = (num) => new Promise((resolve, reject) => {
    if(num <= 10){ 
        resolve('Number less than 10')
    }
    else{
        reject('Number Higher than 10')
    }
    })

compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))


// 🌟 Exercise 2 : Promises

// Instructions

// Create a promise that resolves itself in 4 seconds and returns a “success” string.


const newP = () => new Promise((resolve, reject) =>{
    let promise = true
    setTimeout(()=>{ 
        if(promise){
        resolve('Success')
         }
        else{
        reject('Failed')
    }}, 4000)
})

newP()
.then(result => console.log(result))


// 🌟 Exercise 3 : Resolve & Reject

// Instructions

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


Promise.resolve(3)
.then(result => console.log(result))
Promise.reject('Boo')
.catch(error => console.log(error))