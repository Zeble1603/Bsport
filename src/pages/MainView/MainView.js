import { useState, useEffect } from 'react'

//CSS
import './MainView.css'

//Services 
import { dateLimitator } from '../../services/date'
import { getAllOffers} from '../../services/requests'

//Components
import OfferList from "../../components/OfferList/OfferList"
import DatePicker from '../../components/DatePicker/DatePicker'
import Pagination from '../../components/Pagination/Pagination'

export default function MainView() {

    //States
    const [offers,setOffers] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    //the dates that we will use as placeholder to filter the offers
    const [dateLimit,setDateLimit] = useState(dateLimitator())
    //States related to pagination 
    const [offersPerPage ] = useState(5)
    const [currentPage,setCurrentPage] = useState(1)
    const [totalOffer,setTotalOffer] = useState(100)

    //Function to fetch the data asynchronously
    async function fectchOffers() {
        let allOffers
        try{
            allOffers = await getAllOffers(dateLimit,currentPage)
        }catch(error) {
            console.error(error);
        }
        setOffers(allOffers.results) 
        setTotalOffer(allOffers.count)
    }

    //Function that will handle the selection of the date and change the selected date state
    const handleDateSelection = (e) => {
        setSelectedDate(e)
        setDateLimit(dateLimitator(e))
    }

    //Paginate method --> change the current page
    const paginate = (number) => setCurrentPage(number)
    
    //All the use effects 
    //Get the offersthat take place on the selected date
    useEffect(()=>{
        fectchOffers()
    },[selectedDate])

    useEffect(()=>{
        fectchOffers()
    },[currentPage])


    return (
        <div className='mainViewContent'>
            <DatePicker pick = {handleDateSelection}/>
            <div className='listSection'>
                <Pagination currentPage={currentPage} paginate={paginate} offersPerPage={offersPerPage} totalOffer={totalOffer} />
                <OfferList offers={offers}/>
            </div>
        </div>
    )
}
