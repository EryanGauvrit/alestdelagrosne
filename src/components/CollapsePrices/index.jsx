import React, { useEffect, useState } from "react";
import ButtonLink from "../ButtonLink";
import CalendarReservations from "../CalendarReservations";
import DetailsPrices from "../DetailsPrices";
import { choosePicture } from "../utils/ChoosePicture";
const chevron = <i className="fa-solid fa-chevron-up chevron-up"></i>;

function CollapsePrices({ location, reservations }) {

    const [activeLocationDetails, setActiveLocationDetails] = useState(false);
    const [inProgress, setInProgress] = useState();
    const [locationId, setLocationId] = useState('');

    const handleClick = (id) => {
        setActiveLocationDetails(!activeLocationDetails);
        setLocationId(id);
    };

    useEffect(() => {
        if (Number(location.inProgress) === 0) {
            setInProgress(false);
        } else {
            setInProgress(true);
        }
    }, [location.inProgress])

    return (
        <ul key={location.id} className={activeLocationDetails && locationId === location.id ? 'activeLocationDetails' : ''}>
            {
                !inProgress ?
                    <React.Fragment>
                        <li onClick={() => handleClick(location.id)} className="titleClickable">
                            <img src={choosePicture(location.logoDesktop, location.logoPhone)} alt={location.title} />
                            {chevron}
                        </li>
                        <li className="locationDetails">
                            <CalendarReservations reservations={reservations} />
                            <DetailsPrices initialPrice={location.prices} capacity={location.capacity.maxCapacity} />
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