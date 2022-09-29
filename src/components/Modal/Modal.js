//React
import React from "react";
import { RiCloseLine } from "react-icons/ri";

//CSS
import "./Modal.css";

export default function Modal({
    setIsOpen,
    offer,
    metaActivity,
    members,
    time,
    subscribe,
    setSubscribe
    }) {
    
    return (
        <>
        <div className="darkBG" onClick={() => {setIsOpen(false)
                                                setSubscribe(false)}} />
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    {subscribe ? 
                    (<h5 className="heading">Action impossible...</h5>)
                    :
                    (<h5 className="heading">{metaActivity.name} . {offer.duration_minute} mn<br/>  
                    {new Date(offer.date_start).toLocaleDateString()}  -  {time}</h5>)}
                </div>
                <button className="closeBtn" onClick={() => {setIsOpen(false)
                                                setSubscribe(false)}}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                    {subscribe ? 
                    (<div className="modalContent">
                    <h4>Il n'est pas possible de s'inscrire pour le moment</h4>
                    <p>See you later, aligator</p>
                    </div>) 
                    : 
                    (<><div className="modalContent"><h4>Description</h4>
                        <p>{metaActivity.description}</p>
                        <div className="participantList">
                            <h4>Participants</h4>
                            {members.length > 0 ? 
                                <ul>
                                    {members.map((member)=>{
                                        return (
                                            <li>{member.name}</li>
                                        )
                                    })}
                                </ul>
                                :
                                <p>Pas de participant pour le moment ... </p>
                            }
                        </div>
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="registerBtn" onClick={() => {setIsOpen(false)
                                                setSubscribe(false)}}>
                                S'inscrire
                            </button>
                            <button className="cancelBtn" onClick={() => {setIsOpen(false)
                                                setSubscribe(false)}}>
                                Fermer
                            </button>
                        </div>
                    </div>
                    </>)}
            </div>
        </div>
        </>
  );
}
