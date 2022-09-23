import { useState, useEffect } from 'react'

//CSS
import './CalendarView.css'

//Services 
import { dateLimitator } from '../../services/date'
import { getAllOffers } from '../../services/requests'

//Components
import OfferList from "../../components/OfferList/OfferList"
import DatePicker from '../../components/DatePicker/DatePicker'

export default function CalendarView() {
    //States
    const [offers,setOffers] = useState([])
    const [offersToBeDisplayed, setOffersToBeDisplayed] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    //the dates that we will use as placeholder to filter the offers
    const [datesLimits] = useState(dateLimitator())
    
    //All the use effects 
    //Get all the offers when the page is mounted
    useEffect(()=>{
        const allOffers = getAllOffers(datesLimits)
        setOffers(allOffers)
    },[])

    //Filter the offers to get the ones that take place on the selected date
    useEffect(()=>{
        const filteredOffers = offers.filter(offer => offer.date_start === selectedDate)
        setOffersToBeDisplayed(filteredOffers)
    },[selectedDate])

    //Function that will handle the selection of the date and change the selected date state
    const handleDateSelection = (e) => {
        setSelectedDate(e)
    }

    return (
        <div>
            <DatePicker pick={handleDateSelection}/>
        </div>
    )
}
