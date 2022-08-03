const CheckOption = (input) =>{
    switch(input){
        case '--type':
            return true
        case '--name':
            return true
        case '--modify':
            return true
        case '--size':
            return true
        default:
            return false
    }
}
module.exports = CheckOption