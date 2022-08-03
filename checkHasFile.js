const fs = require('fs')
const path = require('path')
const checkHasFile = (dirpath)=>{
    let booleanResult = false
    const readFile = fs.readdirSync(dirpath)
   for(let i = 0;i<readFile.length;i++){
        if(path.extname(readFile[i])){
            booleanResult =true
        }
        else{
            booleanResult = false
            break;
        }
   }
   return booleanResult
}
module.exports = checkHasFile