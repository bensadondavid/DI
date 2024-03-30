// Instructions

// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'



let sentence = 'The movie is not that bad, I like it'

function wordNot(){
let words = sentence.split(' ')
let newWord = []
for(let key in words){
    if(words[key] === 'not'){
        break
    }
    newWord.push(words[key])
}
    console.log(newWord)
    positionNot = newWord.length + 1
    console.log(positionNot)
}
wordNot()

   function wordBad(){
    let words = sentence.split(' ')
    let newWord = []
    for(let key in words){
        if(words[key] === 'bad'){
            break
        }
        newWord.push(words[key])
        console.log(newWord)
        
    }
        console.log(newWord)
        let positionBad = newWord.length + 1
        console.log(positionBad)
}
wordBad()

let words = sentence.split(' ')
let wordNnot = 'not'
let wordBbad = 'bad'

let indexNot = sentence.indexOf(wordNot);
let indexBad = sentence.indexOf(wordBad);

if(indexNot < indexBad){
    console.log('The movie is good !')
}
else{
    console.log(sentence)
}
