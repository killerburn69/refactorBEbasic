const checkModify = (date)=>{
    const currentDay = new Date(Date.now())
    // console.log(currentDay.getMonth());
    const checkDate = new Date(Date.now())
    // console.log("da" + checkDate);
    const todayDate = currentDay.getDate()
    const todayDay = currentDay.getDay()

    const firstDayOfWeek = new Date(currentDay.setDate(todayDate-todayDay))

    const lastDayOfWeek  = new Date(firstDayOfWeek)

    lastDayOfWeek.setDate(lastDayOfWeek.getDate()+6)

    // console.log(firstDayOfWeek.getDate());
    // console.log(lastDayOfWeek.getDate());
    // console.log(date.getDate());
    if(date.getFullYear() === checkDate.getFullYear() && checkDate.getMonth() === date.getMonth()){
        if(checkDate.getDate() === date.getDate()){
            return "Today"
        }
        else if(firstDayOfWeek.getDate() <= date.getDate() && date.getDate()<=lastDayOfWeek.getDate()){
            return "This week"
        }
        else{
            return "This month"
        }
    }
    else{
        return "This year"
    }
}
module.exports = checkModify