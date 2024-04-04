const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'David Diot',
      username: 'Davidiot',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Noa Bruti',
      username: 'Noa.Bruti',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


let body = document.body
body.style.backgroundImage = 'url("circuit-pattern.png")'
let container = document.querySelector('.containerofcard')

//card creation
for(i=0; i<10;i++){ 
    let cardDiv = document.createElement('div')
    cardDiv.className = 'card-container'
    let imgDiv = document.createElement('div')
    imgDiv.className = 'img-div'
    
    //image
    let img = document.createElement('img')
    img.src = robots[i].image
    imgDiv.appendChild(img)
    cardDiv.appendChild(imgDiv)
    
    // name
    let name = document.createElement('h3')
    name.innerHTML = robots[i].name
    cardDiv.appendChild(name)

    //email
    let email = document.createElement('h5')
    email.innerHTML = robots[i].email
    cardDiv.appendChild(email)

    container.appendChild(cardDiv)
}

//search bar
let searchbar = document.getElementById('search-bar')
searchbar.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        let searchValue = this.value
        const searchrobots = robots.filter(robot => robot.name.toLowerCase().startsWith(searchValue))
        console.log(searchrobots)
        container.innerHTML = ''    
        
        searchrobots.forEach(robot=>{

        let cardDiv = document.createElement('div')
        cardDiv.className = 'card-container'
        let imgDiv = document.createElement('div')
        imgDiv.className = 'img-div'
        //image
        let img = document.createElement('img')
        img.src = robot.image
        imgDiv.appendChild(img)
        cardDiv.appendChild(imgDiv)
        
        // name
        let name = document.createElement('h3')
        name.innerHTML = robot.name
        cardDiv.appendChild(name)
    
        //email
        let email = document.createElement('h5')
        email.innerHTML = robot.email
        cardDiv.appendChild(email)

        container.appendChild(cardDiv)
        
    })
}})

searchbar = document.getElementById('search-bar')
let button = document.querySelector('button')
button.addEventListener('click', function(e){
  
        let searchValue = searchbar.value
        const searchrobots = robots.filter(robot => robot.name.toLowerCase().startsWith(searchValue))
        console.log(searchrobots)
        container.innerHTML = ''    
        
        searchrobots.forEach(robot=>{

        let cardDiv = document.createElement('div')
        cardDiv.className = 'card-container'
        let imgDiv = document.createElement('div')
        imgDiv.className = 'img-div'
        //image
        let img = document.createElement('img')
        img.src = robot.image
        imgDiv.appendChild(img)
        cardDiv.appendChild(imgDiv)
        
        // name
        let name = document.createElement('h3')
        name.innerHTML = robot.name
        cardDiv.appendChild(name)
    
        //email
        let email = document.createElement('h5')
        email.innerHTML = robot.email
        cardDiv.appendChild(email)

        container.appendChild(cardDiv)
        
    })
})