let container = document.querySelector('.container')
let name = document.createElement('h3')
let height = document.createElement('p')
let gender = document.createElement('p')
let birthyear = document.createElement('h4')
let mass = document.createElement('h4')
container.appendChild(name)
container.appendChild(height)
container.appendChild(gender)
container.appendChild(birthyear)
container.appendChild(mass)


const getInfo = async(num)=>{

    try{
        showLoader()
        let response = await fetch(`https://www.swapi.tech/api/people/${num}/`)
        console.log(response);
        if(response.ok){
            let data = await response.json()
            console.log(data);
            name.innerHTML = 'Name : ' + data.result.properties.name;
            height.innerHTML = 'Height : ' + data.result.properties.height;
            gender.innerHTML = 'Gender : ' + data.result.properties.gender;
            birthyear.innerHTML = 'Birth year : ' + data.result.properties.birth_year;
            mass.innerHTML =  'Mass : ' + data.result.properties.mass
        }

        else{
            throw new Error('Error')
        }
    
    }
    catch (error){
        console.log('Error', error)
    }

    finally{
        hideLoader()
    }

}

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}


function hideLoader() {
    document.getElementById('loader').style.display = 'none'
}



const findSomeone = async () =>{
    let button = document.querySelector('.button')
    button.addEventListener('click', e =>{
        e.preventDefault()
        let info = Math.floor(Math.random() * 83)
        getInfo(info)

    })
}

findSomeone()