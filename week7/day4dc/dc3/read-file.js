import fs from 'fs';

export const readTheFile = (path)=>{
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(err){
            console.log('error', err);
            return
        }
        console.log(data);
    })
}



