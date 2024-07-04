// Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:

// If the input is a number, return its square.
// If the input is a string, return the uppercase version of the string.
// If the input is a boolean, return the negated value.

const processInput = (input: number | string | boolean)=>{
    if(typeof input === 'number'){
        input = input**2
        return input
    }
    else if(typeof input === 'string'){
        input = input.toUpperCase()
        return input
    }
    else if(typeof input === 'boolean'){
        input = !input
        return input
    }
    return input
}

