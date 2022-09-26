import { useState, useEffect } from 'react'

//CSS
import './MainView.css'

//Services 
import { dateLimitator } from '../../services/date'
import { fetchData,getAllOffers } from '../../services/requests'

//Components
import OfferList from "../../components/OfferList/OfferList"
import DatePicker from '../../components/DatePicker/DatePicker'

export default function MainView() {
    //States
    const [offers,setOffers] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    //the dates that we will use as placeholder to filter the offers
    const [dateLimit,setDateLimit] = useState(dateLimitator())

    //Usefull functions 
    //Function to fetch the data asynchronously
    async function fectchOffers() {
        let allOffers
        try{
            allOffers = await getAllOffers(dateLimit)
        }catch(error) {
            console.error(error);
        }
        setOffers(allOffers.results) 
    }

    //Function that will handle the selection of the date and change the selected date state
    const handleDateSelection = (e) => {
        setSelectedDate(e)
        setDateLimit(dateLimitator(e))
    }
    
    //All the use effects 
    //Get the offersthat take place on the selected date
    useEffect(()=>{
        fectchOffers()
    },[selectedDate])

    return (
        <div>
            <DatePicker pick = {handleDateSelection}/>
            <OfferList offers = {offers}/>
        </div>
    )
}
