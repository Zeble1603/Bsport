import { useState, useEffect } from 'react'

//CSS
import './CalendarView.css'

//Services 
import { dateLimitator } from '../../services/date'
import {getAllOffers,getCoach,getCompany,getEstablishment,getMetaActivity} from '../../services/requests'

//Custom components
import OfferList from "../../components/OfferList/OfferList"

export default function CalendarView() {
    const [offers,setOffers] = useState([])
    
    //the dates that we will use as placeholder to filter the offers
    const dates = dateLimitator()

    //Get all the offers when the page is mounted
    useEffect(()=>{
        const allOffers = getAllOffers(dates)
        setOffers(allOffers)
    },[])

    return (
        <div>
            <OfferList offers={offers}/>
        </div>
    )
}
