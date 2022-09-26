//Function that will help us to get the min_date and max_date
function dateLimitator(date) {
    if(!date){
        date = new Date()
    }
    let limitDate
    let [month, day, year] = [date.getMonth()+1, date.getDate(), date.getFullYear()];

    
    if(month<10){
        limitDate = `${year}-0${month}-${day}`
    }else{
        limitDate = `${year}-${month}-${day}`
    }
    
    return limitDate
}

//Function to get the time of an offer
function getOfferTime(dateAsString){
    let dateObject = new Date(dateAsString)
    return dateObject.toLocaleTimeString()
}


export {dateLimitator,getOfferTime}
