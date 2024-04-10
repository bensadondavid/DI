// Instructions

// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

let button = document.getElementById('button')
let input = document.querySelector('input')
let form = document.getElementById('form')
let button1 = document.createElement('button')


let body = document.body
let newD = document.createElement('div')
body.appendChild(newD)

let buttonAll = document.createElement('button')
buttonAll.style.margin = '40px'
buttonAll.style.width = '80px'
buttonAll.innerHTML = 'Delete All'
body.appendChild(buttonAll)

buttonAll.addEventListener('click', e =>{
        body.removeChild(newD)
    })

console.log(input)
form.addEventListener('submit', e =>{
    e.preventDefault()
    let value = e.target.gif.value
    console.log(value)
    const fetchGift = async(value)=>{
        let firsturl = `https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${value}`
        let response = await fetch(firsturl)
        if(response.ok){
            let data = await response.json()
            console.log(data);
            let originalGifUrl = data.data.images.original.url;
            console.log(originalGifUrl);

            let image = document.createElement('img')
            image.src = originalGifUrl
        
            
            newD.appendChild(image)

            let button1 = document.createElement('button')
            console.log(button1);
            button1.style.margin = '40px'
            button1.style.width = '80px'
            button1.innerHTML = 'Delete'
            body.appendChild(button1)
            button1.addEventListener('click', e =>{
                e.preventDefault()
                newD.removeChild(image)
                body.removeChild(button1)
            })
        }
        else{
            throw new Error('Wrong')
        }
    }
    
    fetchGift(value)
})

