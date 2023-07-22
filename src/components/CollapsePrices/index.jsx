import { useState } from "react";
import DetailsPrices from "../DetailsPrices";
import ButtonLink from "../ButtonLink";
import { choosePicture } from "../utils/ChoosePicture";
const chevron = <i className="fa-solid fa-chevron-up chevron-up"></i>;

function CollapsePrices({ location }) {

    const [activeLocationDetails, setActiveLocationDetails] = useState(false);
    const [locationId, setLocationId] = useState('');

    const handleClick = (id) => {
        setActiveLocationDetails(!activeLocationDetails);
        setLocationId(id);
    };

    return (
        <ul key={location.id} className={activeLocationDetails && locationId === location.id ? 'activeLocationDetails' : ''}>
            <li onClick={() => handleClick(location.id)} className="titleClickable">
                <img src={choosePicture(location.logoDesktop, location.logoPhone)} alt={location.title} />
                {chevron}
            </li>
            <li className="locationDetails">
                <DetailsPrices prices={location.prices} />
                <ButtonLink
                    link={`/location/${location.id}`}
                    content="Détails du gîte"
                />
            </li>

        </ul>
    )
}

export default CollapsePrices;