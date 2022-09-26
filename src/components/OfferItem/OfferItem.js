//React
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Request functions
import {fetchData,getCoach,getEstablishment,getMetaActivity,test} from '../../services/requests'

//Date functions
import {getOfferTime} from '../../services/date'

//CSS
import './OfferItem.css'

export default function OfferItem(props) {
    const {offer} = props
    //Hack to avoid Uncaught TypeError
    const fakeCoach = {'user':{'photo':'abc','name':'John Doe'}}
    const fakeEstablishment = {'title':'Chez Wam','location':{'address':'abc'}}

    //States
    const [offerData,setOfferData] = useState([])
    const [coach,setCoach] = useState(fakeCoach)
    const [establishment,setEstablishment] = useState(fakeEstablishment)
    const [metaActivity,setMetaActivity] = useState([])
    const [offerTime,setOfferTime] = useState([])

    //Fetch the data when the component is mounted
    useEffect(()=>{
        setOfferData(offer)
    },[])

    useEffect(()=>{
        //Fetch the coach data
        fetchData(offer.coach,getCoach,setCoach)
        //Fetch the establishment data
        fetchData(offer.establishment,getEstablishment,setEstablishment)
        //Fetch the meta activity data
        fetchData(offer.meta_activity,getMetaActivity,setMetaActivity)
        //Convert date_start to isolate the time
        setOfferTime(getOfferTime(offer.date_start))
    },[offerData])

    /*useEffect(()=>{
        setCoachUser(coach.user)
    },[coach])*/

    return (
    <div className='card'>
        <img className='coverImg' src={metaActivity.cover_main} alt={metaActivity.alt_cover_main}/>
        <div className='cardText'>
            <div className='cardHeader'>
                <p className='time'>{offerTime}</p>
                <h3 className='offerName'>{metaActivity.name}</h3>
                <p className='duration'>{offerData.duration_minute} mn</p>
                <p className='level'>Niveau: {offerData.level}</p>
            </div>
            <div className='cardBody'>
                <div className='coachItem'>
                    <img className= 'coachAvatar' src={coach.user.photo} alt='Coach avatar'/>
                    <p className='coachName'>{coach.user.name}</p>
                </div>
                <p className='place'>{establishment.title} - {establishment.location.address}</p>
            </div>
            <div className='cardFooter'>
                <div className='card_buttons'>
                    <Link to={``}>
                        <button className='card_button button_info'>
                            INFO
                        </button>
                    </Link>
                        <button className='card_button button_register'>
                            REGISTER
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}
