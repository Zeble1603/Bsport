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
    }) {
    
    return (
        <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h5 className="heading">{metaActivity.name} . {offer.duration_minute} mn<br/>  
                    {new Date(offer.date_start).toLocaleDateString()}  -  {time}</h5>
                    <h5></h5>
                </div>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className="modalContent">
                    <h4>Description</h4>
                    <p>{metaActivity.description}</p>
                    {members && }
                </div>
                <div className="modalActions">
                    <div className="actionsContainer">
                        <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                            Delete
                        </button>
                        <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
  );
}
