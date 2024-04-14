import { readToFile, writeToFile } from "./filemanager.js";

const path = "./Hello World.txt"
readToFile(path)
    .then(() => console.log('File reading succeeded'))
    .catch(err => console.error('File reading failed:', err));

const path2 = "./Bye World.txt"
const content = 'Writing to the file'

writeToFile(path2, content)