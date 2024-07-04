// Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:
// If the input is a number, return its square.
// If the input is a string, return the uppercase version of the string.
// If the input is a boolean, return the negated value.
var processInput = function (input) {
    if (typeof input === 'number') {
       return input = Math.pow(input, 2);
    }
    else if (typeof input === 'string') {
        return input = input.toUpperCase();
    }
    else if (typeof input === 'boolean') {
        return input = !input;
    }
    return input
};

console.log(processInput(24))
console.log(processInput('David'))
console.log(processInput(true))