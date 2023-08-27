import React, { useState } from "react";
import DetailsPrices from "../DetailsPrices";
import ButtonLink from "../ButtonLink";
import { choosePicture } from "../utils/ChoosePicture";
import CalendarReservations from "../CalendarReservations";
const chevron = <i className="fa-solid fa-chevron-up chevron-up"></i>;

function CollapsePrices({ location, reservations }) {

    const [activeLocationDetails, setActiveLocationDetails] = useState(false);
    const [locationId, setLocationId] = useState('');

    const handleClick = (id) => {
        setActiveLocationDetails(!activeLocationDetails);
        setLocationId(id);
    };

    return (
        <ul key={location.id} className={activeLocationDetails && locationId === location.id ? 'activeLocationDetails' : ''}>
            {
                !location.inProgress ?
                    <React.Fragment>
                        <li onClick={() => handleClick(location.id)} className="titleClickable">
                            <img src={choosePicture(location.logoDesktop, location.logoPhone)} alt={location.title} />
                            {chevron}
                        </li>
                        <li className="locationDetails">
                            <CalendarReservations reservations={reservations} />
                            <DetailsPrices price={location.prices} />
                            <ButtonLink
                                link={`/location/${location.id}`}
                                content="Détails du gîte"
                            />
                        </li>
                    </React.Fragment>
                    :
                    <li>
                        <img src={choosePicture(location.logoDesktop, location.logoPhone)} alt={location.title} />
                        <h2>Bientôt disponible !</h2>
                    </li>
            }

        </ul>
    )
}

export default CollapsePrices;