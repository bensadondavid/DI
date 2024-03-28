let mainDiv = document.querySelector('.container')

for(i=0; i<880; i++){
let newCase = document.createElement('div')
newCase.classList.add('case')
mainDiv.appendChild(newCase)
}

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet","cyan", "magenta", "lime", "pink", "teal", "lavender", 
                "brown","beige", "maroon", "mint", "olive", "coral", "navy", "grey"]
let selectedColor = null

let color = document.querySelector('.color')

for(i=0; i<21; i++){
    let bigCase  = document.createElement('button')
    bigCase.classList.add('color-case')
    bigCase.style.backgroundColor = colors[i]
    color.appendChild(bigCase)
    bigCase.addEventListener('click', function(event){
        event.preventDefault()
        selectedColor = event.target.style.backgroundColor
    })
}

function colorcases(){
let colorcase = document.querySelectorAll('.case')
colorcase.forEach(function(colorcase){
colorcase.addEventListener('click', function(event){
    event.preventDefault()
    if(selectedColor){
        colorcase.style.backgroundColor = selectedColor
    }
})
})}

colorcases()

function clear(){
    let bclear = document.querySelector('.but')
    bclear.addEventListener('click', function(event){
        event.preventDefault()
        if (bclear){
            let allCases = document.querySelectorAll('.case')
            allCases.forEach(function(caseElement){
                caseElement.style.backgroundColor = 'white'
            })

        }
    })
}
clear()


