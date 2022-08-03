const path = require("path")
const fs = require("fs")
const checkSize = require('./checkSize')
const createFolderSize = (dirPath, arrayOptions)=>{
    const getSizeFromMain = fs.readdirSync(dirPath)
    getSizeFromMain.map(item=>{
        const getSize = fs.statSync(path.join(dirPath,item)).size
        const getLetterSize = checkSize(getSize)
        if(!fs.existsSync(path.join(dirPath,getLetterSize))){
            fs.mkdirSync(path.join(dirPath,getLetterSize))
        }
        fs.renameSync(path.join(dirPath,item), `${dirPath}\\${getLetterSize}\\${item}`)
    })
}
const createFolderToAnotherFolder = (dirPath, arrayOptions) =>{
    const getFolder = fs.readdirSync(dirPath)
    if(arrayOptions.length === 0){
        getFolder.map(item=>{
            if(!path.extname(item)){
                arrayOptions.push(item)
                createFolderSize(path.join(dirPath,item), arrayOptions)
            }
        })
    }
    else{
        arrayOptions.map(option=>{
            let connetString = path.join(dirPath,option)
            let arrayTemp = fs.readdirSync(connetString)
            arrayTemp.map(item=>{
                if(!path.extname(item)){
                    createFolderSize(path.join(connetString,item), arrayOptions)
                }
            })
        })
    }
}
module.exports = {createFolderSize, createFolderToAnotherFolder}