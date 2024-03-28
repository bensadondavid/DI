let mainDiv = document.querySelector('.container')

for(i=0; i<880; i++){
let newCase = document.createElement('div')
newCase.classList.add('case')
mainDiv.appendChild(newCase)
}

let colors =   [
    "#FFD1DC",
    "#FFADAD",
    "#FFC6FF",
    "#BDB2FF",
    "#A0C4FF",
    "#BDE0FE",
    "#A2D2FF",
    "#99E2B4",
    "#FDFFB6",
    "#FFFFD1",
    "#FBC2EB",
    "#F6E6E4",
    "#F9D5A7",
    "#F9F9F9",
    "#ECEAE4",
    "#ECDCC9",
    "#E9C46A",
    "#D8E2DC",
    "#FFE8D6",
    "#D6E2E9",
    "#EAE4D3"]

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

function colorcases() {
    let colorcase = document.querySelectorAll('.case');
    colorcase.forEach(function(colorcase) {
        colorcase.addEventListener('click', function(event) {
            event.preventDefault();
            if (selectedColor) {
                colorcase.style.backgroundColor = selectedColor;
            }
        });

        colorcase.addEventListener('mousedown', function(event) {
            event.preventDefault();
            isMouseDown = true;
            if (selectedColor) {
                colorcase.style.backgroundColor = selectedColor;
            }
        });

        colorcase.addEventListener('mouseover', function(event) {
            event.preventDefault();
            if (isMouseDown && selectedColor) {
                colorcase.style.backgroundColor = selectedColor;
            }
        });

        colorcase.addEventListener('mouseup', function(event) {
            event.preventDefault();
            isMouseDown = false;
        });
    });
}

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


