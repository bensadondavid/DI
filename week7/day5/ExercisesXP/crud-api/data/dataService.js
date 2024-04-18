const axios = require('axios')

const fetchPosts = async (path)=>{
    try{
    const fetch = await axios.get(path)
    console.log(fetch.data);
    return fetch.data
    }
    catch(err){
        console.error('Error', err)
        return null
    }
}

module.exports = fetchPosts
