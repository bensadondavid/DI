let retrieve = document.getElementById('myform').addEventListener('submit',function(e){e.preventDefault()
    let name = e.target.elements.name.value
    let lastname = e.target.elements.lastname.value
    console.log(name)
    console.log(lastname);
    let obj = {
        'name' : name,
        'lastname' : lastname
    }
    console.log(obj)
    let json = JSON.stringify(obj, null, 2)
    console.log(json);
    let body = document.querySelector('body')
    let newP = document.createElement('p')
    newP.innerHTML = json
    body.appendChild(newP)

})

