let arr = require('./product.js')

const search = (name)=>{
    for(let item of arr)
    if(item.name === name)
    console.log(item);
}
search('clio')