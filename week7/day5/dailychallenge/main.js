form.addEventListener('submit', e=>{
    e.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    fetch('/check-answer',{
        method : 'POST',
        headers :{ 'Content-Type': 'application/json'},
        body : JSON.stringify(choice, name)
        .then(response => response.json())  
        .then(data => {
            if (data.correct) {
                console.log("Réponse correcte!");
            } else {
                console.log("Réponse incorrecte!");
            }
        })
        .catch(error => console.log('Erreur lors de la requête:', error));
        })
})
