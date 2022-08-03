const CheckOption = require('./CheckOption')
const checkCommand = (input)=>{
    let count = 0
    if(input.length === 1){
        console.log("Không có yêu cầu nào cả. Mời nhập lại");
        return false
    }
    for (let i = 1; i < input.length; i++) {
        if(input[i].includes("--")){
            if (!CheckOption(input[i])) {
                console.log("một option bị sai. Yêu cầu rà soát lại" + " " + input[i])
                return false
            }
        }
    }
    for (let i = 1; i < input.length; i++) {
        if(input[i].includes("--")){
            if (CheckOption(input[i])) {
               count++
            }
        }
    }
    if(count>3){
        console.log('Quá nhiều option. Chỉ được 3 option');
        return false
    }
    return true
}
module.exports = checkCommand