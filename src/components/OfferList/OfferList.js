//CSS
import './OfferList.css'

//Custom component
import OfferItem from "../OfferItem/OfferItem";

export default function OfferList(props) {
    const { offers } = props;

    return (
    <div className="list">
        <ul className="userlist">
            {offers.map((offer) => {
            return (
                <li key={offer.id}>
                <OfferItem data={offer}/>
                </li>
            );
            })}
        </ul>
    </div>
    );
}
