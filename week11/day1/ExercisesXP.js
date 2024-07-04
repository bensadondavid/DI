// Exercise 1
console.log("Hello world");
// Exercise 2
var age = 2;
var names = 'David';
console.log(age, names);
//Exercise 3
var id;
//Exercise 4
var NumberFunction = function (num) {
    if (num > 0) {
        var message = "It's positive";
        console.log(message);
    }
    else if (num < 0) {
        var message = "It's negative";
        console.log(message);
    }
    else if (num === 0) {
        var message = "It's null";
        console.log(message);
    }
};
NumberFunction(3)
//Exercise 5
var add = function (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
add(1, 2)
//Exercise 7
var createPerson = function (person) {
    console.log(person);
};
//Exercise 10
var greet = function (name) {
    if (name === void 0) { name = 'Guest'; }
    console.log(name);
};
greet('David')
