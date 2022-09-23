//Function that will help us to get the min_date and max_date
function dateLimitator(date) {
    if(!date){
        date = new Date()
    }
    let min_date
    let max_date
    let longMonths = [1,3,5,7,8,10,12]
    let shortMonths = [4,6,9,11]
    let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

    let max_month = month + 3
    
    if(month<10){
        min_date = `${year}-0${month}-${day}`
    }else{
        min_date = `${year}-${month}-${day}`
    }

    if(max_month>12){
        max_month -= 12
        year += 1
    }

    if(longMonths.includes(max_month)){
        day = 31
    }else if(shortMonths.includes(max_month)){
        day = 30
    }else{
        day = 28
    }
    
    if(max_month<10){
        max_date = `${year}-0${max_month}-${day}`
    }else{
        max_date = `${year}-${max_month}-${day}`
    }

    return {min_date,max_date}
}

export {dateLimitator}
