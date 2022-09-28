//React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Components
import Modal from "../Modal/Modal";

//Request functions
import {
    fetchData,
    getCoach,
    getEstablishment,
    getMetaActivity,
    fetchObjects,
    getMember,
    
} from "../../services/requests";

//Date functions
import { getOfferTime } from "../../services/date";

//CSS
import "./OfferItem.css";

export default function OfferItem(props) {
    const { offer } = props;
    //Hack to avoid Uncaught TypeError
    const fakeCoach = { user: { photo: "abc", name: "John Doe" } };
    const fakeEstablishment = { title: "Chez Wam", location: { address: "abc" } };

    //States
    //const [offerData,setOfferData] = useState([])
    const [coach, setCoach] = useState(fakeCoach);
    const [establishment, setEstablishment] = useState(fakeEstablishment);
    const [metaActivity, setMetaActivity] = useState([]);
    const [offerTime, setOfferTime] = useState([]);
    const [members,setMembers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    //Fetch the data when the component is mounted
    /*useEffect(()=>{
            setOfferData(offer)
        },[])*/

    useEffect(() => {
        //Fetch the coach data
        fetchData(offer.coach, getCoach, setCoach);
        //Fetch the establishment data
        fetchData(offer.establishment, getEstablishment, setEstablishment);
        //Fetch the meta activity data
        fetchData(offer.meta_activity, getMetaActivity, setMetaActivity);
        //Convert date_start to isolate the time
        setOfferTime(getOfferTime(offer.date_start));
        fetchObjects(offer.bookings,getMember,setMembers)
    }, []);

    return (
        <div className="card">
        <img
            className="coverImg"
            src={metaActivity.cover_main}
            alt={metaActivity.alt_cover_main}
        />
        <div className="cardText">
            <div className="cardContainer">
                <p className="time">{offerTime}</p>
                <h3 className="offerName">
                    {metaActivity.name} . {offer.duration_minute} mn
                </h3>
                <p className="level">Niveau: {offer.level}</p>
            </div>
            <div className="cardBody">
                <div className="coachItem">
                    <img
                    className="coachAvatar"
                    src={coach.user.photo}
                    alt="Coach avatar"
                    />
                    <p className="coachName">{coach.user.name}</p>
                </div>
                <p className="place">{establishment.title}</p>
            </div>
            <div className="card_buttons">
                <button
                    className="card_button button_info"
                    onClick={() => setIsOpen(true)}
                >
                    + INFO
                </button>
                {isOpen && (
                    <Modal
                        setIsOpen={setIsOpen}
                        offer={offer}
                        metaActivity={metaActivity}
                        establishment={establishment}
                        coach={coach}
                        members={members}
                        time={offerTime}
                    />
                )}
                <button className="card_button button_register">S'INSCRIRE</button>
            </div>
        </div>
        </div>
    );
}