// Instructions

// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


let star = ''

for(i = 0 ; i < 6; i++){
    star += '* '
    console.log(star)
}

for ( i = 0; i < 6; i++) {
    let star = ''
    for ( j = 0; j <= i; j++) {
        star += '* '
    }
    console.log(star)
}



