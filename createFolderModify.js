const path = require("path")
const fs = require("fs")
const checkModify = require('./checkModify')
const createFolderModify = (dirPath, arrayOptions)=>{
    const getModifyFromMain = fs.readdirSync(dirPath)
    getModifyFromMain.map(item=>{
        const dateModify = fs.statSync(path.join(dirPath,item))
        const getLetterDay = checkModify(dateModify.mtime)
        // console.log(`${dateModify.mtime.getDate()}/${dateModify.mtime.getMonth()}/${dateModify.mtime.getFullYear()}`);
       
        // console.log(getLetterDay);
        if(!fs.existsSync(path.join(dirPath,getLetterDay))){
            fs.mkdirSync(path.join(dirPath,getLetterDay))
        }
        fs.renameSync(path.join(dirPath,item), `${dirPath}\\${getLetterDay}\\${item}`)
    })
}
const createFolderToAnotherFolder = (dirPath, arrayOptions) =>{
    const getFolder = fs.readdirSync(dirPath)
    if(arrayOptions.length === 0){
        getFolder.map(item=>{
            if(!path.extname(item)){
                arrayOptions.push(item)
                createFolderModify(path.join(dirPath,item), arrayOptions)
            }
        })
    }
    else{
        arrayOptions.map(option=>{
            let connetString = path.join(dirPath,option)
            let arrayTemp = fs.readdirSync(connetString)
            arrayTemp.map(item=>{
                if(!path.extname(item)){
                    createFolderModify(path.join(connetString,item), arrayOptions)
                }
            })
        })
    }
    
}
module.exports = {createFolderModify, createFolderToAnotherFolder}