//React
import { useState, useEffect } from 'react'

//Request functions
import {getCoach,getEstablishment,getMetaActivity} from '../../services/requests'

//CSS
import './OfferItem.css'

export default function OfferItem(props) {
    const {offer} = props

    //States
    const [coach,setCoach] = useState([])
    const [establishment,setEstablishment] = useState([])
    const [metaActivity,setMetaActivity] = useState([])


    return (
    <div>
        
    </div>
    )
}
