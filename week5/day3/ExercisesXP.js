// Instructions

// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.



let title1 = document.querySelector('h1')
console.log(title1)

let article = document.getElementById('article')
let paragraph = document.querySelectorAll('p')
paragraph[paragraph.length -1].remove()


title2 = document.querySelector('h2')
title2.addEventListener('click',{
    handleEvent: function(){
        title2.style.background = 'red'}})
    
title3 = document.querySelector('h3')
title3.addEventListener('click', function()
        {title3.style.display = 'none'})


let button = document.createElement('button')
button.innerHTML = 'Make bold'
document.body.appendChild(button)

button.addEventListener('click', function(){
    paragraph.forEach(function(p){
    p.style.fontWeight = 'bold'})
})


// 🌟 Exercise 2 : Work With Forms

// Instructions

// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

   
let form = document.querySelector('form')
console.log(form)    

let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let submit = document.getElementById('submit')

console.log(fname, lname, submit)

fname = document.getElementsByName('firstname')
lname = document.getElementsByName('lastname')
submit = document.getElementsByName('submit')

form.addEventListener('submit', function(event){
        event.preventDefault()
        let fname = document.getElementById('fname').value
        let lname = document.getElementById('lname').value
        if(fname == '' || lname == ''){
            console.log('required field')
            return
            
        }
        
        let ul = document.createElement('ul')
        ul.className = 'userAnswers'
        let fli = document.createElement('li')
        fli.innerHTML = fname
        ul.appendChild(fli)
        let lli = document.createElement('li')
        lli.innerHTML = lname
        ul.appendChild(lli)
        document.body.appendChild(ul)
        } 
)



// 🌟 Exercise 3 : Transform The Sentence

// Instructions

// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


let allBoldItems = []
function getBoldItems(){
   allBoldItems = document.querySelectorAll('strong')
   console.log(allBoldItems)
}

getBoldItems()

function highlight(){
    allBoldItems.forEach(function(element){
        element.style.color = 'blue'
    })
    console.log(allBoldItems)
}
highlight()

function returnItemsToDefault(){
    allBoldItems.forEach(function(element){
        element.style.color = 'black'
    })
    console.log(allBoldItems)
}

returnItemsToDefault()

let p = document.querySelector('p')
p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', returnItemsToDefault)