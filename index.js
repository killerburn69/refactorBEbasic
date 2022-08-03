const path = require('path')
const fs = require('fs')
const process = require('process')
const checkType = require('./checkType')
const checkHasFile = require('./checkHasFile')
const FolderType = require('./createFolderType')
const FolderName = require('./createFolderName')
const FolderModify = require('./createFolderModify')
const FolderSize = require('./createFolderSize')
const checkCommand = require('./checkCommand')
const resultArray = process.argv.slice(2)
// const getFile = fs.readdirSync(dirPath)
const typeOption = ['images', 'texts', 'bash']
let arrayOptions = []
console.log(resultArray);
if(!checkCommand(resultArray)){
    return
}
const dirPath = path.join(__dirname,resultArray[0].slice(2))
for(let i = 1;i<resultArray.length;i++){
    if(resultArray[i]==='--type'){
        if(resultArray[i+1] === undefined || checkType(resultArray[i+1])===false){
            if(checkHasFile(dirPath)){
                FolderType.createFolderType(typeOption, dirPath,arrayOptions)
            }
            else{
                FolderType.createFolderToAnotherFolder(typeOption,dirPath,arrayOptions)
            }
        }
        else{
            if(checkHasFile(dirPath)){
                FolderType.createFolderType(resultArray[i+1].split(','),dirPath,arrayOptions)
            }
            else{
                FolderType.createFolderToAnotherFolder(resultArray[i+1].split(','),dirPath,arrayOptions)
            }
        }
    }
    if(resultArray[i]==='--name'){
        // console.log('name');
        if(checkHasFile(dirPath)){
            FolderName.createFolderName(dirPath, arrayOptions)
        }
        else{
            FolderName.createFolderToAnotherFolder(dirPath, arrayOptions)
        }
    }
    if(resultArray[i] === '--modify'){
        // console.log('modify');
        if(checkHasFile(dirPath)){
            FolderModify.createFolderModify(dirPath,arrayOptions)
        }
        else{
            FolderModify.createFolderToAnotherFolder(dirPath,arrayOptions)
            // console.log(arrayOptions);
        }
    }
    if(resultArray[i] === '--size'){
        // console.log('size');
        if(checkHasFile(dirPath)){
            FolderSize.createFolderSize(dirPath, arrayOptions)
        }
        else{
            FolderSize.createFolderToAnotherFolder(dirPath,arrayOptions)
        }
    }
}
