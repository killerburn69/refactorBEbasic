const fs = require("fs")
const path = require("path")
const CopyFileType = (dirPath,type) =>{
    const file = fs.readdirSync(dirPath)
    file.map(item=>{
        switch(path.extname(item)){
            case '.jpg':
            case '.png':
            case '.jpeg':
            case '.gif':
            case '.ai':
            case '.psd':
                if(type === 'images'){
                    fs.renameSync(path.join(dirPath,item), path.join(`${dirPath}\\images`,item))
                }
                break;
            case ".txt":
            case ".pdf":
            case ".docx":
                if(type === 'texts'){

                    fs.renameSync(path.join(dirPath,item), path.join(`${dirPath}\\texts`,item))
                }
                break;
            case ".sh":
                if(type === 'bash'){

                    fs.renameSync(path.join(dirPath,item), path.join(`${dirPath}\\bash`,item))
                }
                break;
            default:
                break;
        }
    })
}
module.exports = CopyFileType