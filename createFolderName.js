const fs = require('fs')
const path = require('path')
const checkLetter = require('./checkLetter')
const createFolderName = (dirPath, arrayOptions) =>{
    const getLetterFromMain = fs.readdirSync(dirPath)
    getLetterFromMain.map(item=>{
        if(!fs.existsSync(path.join(dirPath,checkLetter(item.toLowerCase().slice(0,1))))){
            fs.mkdirSync(path.join(dirPath,checkLetter(item.toLowerCase().slice(0,1))))
        }
        fs.renameSync(path.join(dirPath,item), `${dirPath}\\${checkLetter(item.toLowerCase().slice(0,1))}\\${item}`)
    })
}
const createFolderToAnotherFolder = (dirPath, arrayOptions) =>{
    const getFolder = fs.readdirSync(dirPath)
    if(arrayOptions.length === 0){
        getFolder.map(item=>{
            if(!path.extname(item)){
                arrayOptions.push(item)
                createFolderName(path.join(dirPath,item), arrayOptions)
            }
        })
    }
    else{
        arrayOptions.map(option=>{
            let connetString = path.join(dirPath,option)
            let arrayTemp = fs.readdirSync(connetString)
            arrayTemp.map(item=>{
                if(!path.extname(item)){
                    createFolderName(path.join(connetString,item), arrayOptions)
                }
            })
        })
    }
}
module.exports={createFolderName, createFolderToAnotherFolder}