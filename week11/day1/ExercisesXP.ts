// Exercise 1

console.log("Hello world")

// Exercise 2

let age: number = 2
let names: string = ''
console.log(age, names);


//Exercise 3

let id: string | number 


//Exercise 4

const NumberFunction = (num: number)=>{
    if(num > 0){
        const message: string = "It's positive"
        console.log(message);   
    }
    else if(num < 0){
        const message: string = "It's negative"
        console.log(message)
    }
    else if(num === 0){
        const message: string = "It's null"
        console.log(message);
        
    }
}

//Exercise 5

const add = (num1: string | number, num2: string | number)=>{
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2; 
    } else {
        return num1.toString() + num2.toString(); 
    }
}


//Exercise 7

const createPerson = (person: {name: string, age: number})=>{
    console.log(person);
}


//Exercise 10

const greet = (name: string = 'Guest')=>{
    console.log(name);
}





