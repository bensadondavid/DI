import { greet } from '../dc1/greeting.js'
import { newChalk } from '../dc2/colorful-message.js'
import { readTheFile } from '../dc3/read-file.js'
console.log(greet('David'))
newChalk()
const pathFile = '/Users/davidbensadon/Desktop/DI/week7/day4dc/dc3/file-data.txt'
readTheFile(pathFile)