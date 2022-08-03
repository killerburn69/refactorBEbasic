const fs = require('fs')
const path = require('path')
const CopyFileType = require('./CopyFileType')
const createFolderType = (arrayType,dirpath, arrayOptions)=>{
    arrayType.map(type=>{
        fs.mkdirSync(path.join(dirpath,type))
    })
    arrayType.map(type=>{
        CopyFileType(dirpath,type)
    })
    
}
const createFolderToAnotherFolder = (arrayType,dirPath,arrayOptions )=>{
    const getFolder = fs.readdirSync(dirPath)
    if(arrayOptions.length === 0){
        getFolder.map(item=>{
            if(!path.extname(item)){
                arrayOptions.push(item)
                createFolderType(arrayType,path.join(dirPath,item),arrayOptions)
            }
        })
    }
    else{
        arrayOptions.map(option=>{
            let connectString = path.join(dirPath,option)
            let arrTemp = fs.readdirSync(connectString)
            arrTemp.map(item=>{
                if(!path.extname(item)){
                    createFolderType(arrayType,path.join(connectString,item), arrayOptions)
                }
            })
        })
    }
}
module.exports = {createFolderType, createFolderToAnotherFolder}



