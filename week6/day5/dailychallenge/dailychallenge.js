// Instructions

// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


function anagram(firstWord, secondWord){
    let arr1 = firstWord.replace(/\s+/g, '').split('').sort().join()
    let arr2 = secondWord.replace(/\s+/g, '').split('').sort().join()
    console.log(arr1, arr2);

    if(arr1 == arr2){
        return `They're indeed Anagrams`
    }
    else{
        return `${firstWord} & ${secondWord} are not Anagrams`
    }
}

console.log(anagram('je suis david', 'je suis vdda'))


