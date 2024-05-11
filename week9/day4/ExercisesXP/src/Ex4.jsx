

const FetchJson = async () =>{
    const HandleCLick = async()=>{

        try{
            const body = {key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27}
            const options = {
                method : 'POST', 
                header : 'application/json',
                body : JSON.stringify(body)
            }
            const url = "https://webhook.site/83dfd22a-edab-4c21-945d-087d028adebc"
            const response = await fetch(url, options)
            const data = await response.json()
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <button onClick={HandleCLick}>Post me</button>
    )
}

export default FetchJson