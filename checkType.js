const fs = require('fs')
const path = require('path')
const checkType = (type) =>{
    const typeArray = ["images","texts","bash"]
    const typeArrayOption = []
    for(let i = 0;i<typeArray.length;i++){
        if(type.includes(typeArray[i])){
            typeArrayOption.push(typeArray[i])
        }
    }
    if(typeArrayOption.length === 0){
        return false
    }
    return typeArrayOption
}
module.exports = checkType