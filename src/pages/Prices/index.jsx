import { Link } from "react-router-dom";
import React, { useState } from "react";
import ModifHead from "../../components/ModifHead";
import CollapsePrices from "../../components/CollapsePrices";

function Prices({ locationsDatas, reservations }) {

    console.log(reservations)
    // const [sendReservations, setSendReservations] = useState([]);

    const chooseReservations = ((locationId, reservations) => {
        let sendReservations = [];
        // eslint-disable-next-line array-callback-return
        reservations.map((reservation) => {
            if (locationId === reservation.location.id) {
                sendReservations.push({
                    start: new Date(reservation.startDate),
                    end: new Date(reservation.endDate)
                });
            }
        })
        return sendReservations;
    })

    return (
        <main className="prices-main">
            <h1>Tarifs et disponibilités :</h1>
            <ModifHead
                titlePage='Tarifs et disponibilités'
                description='Vous pouvez visualiser les tarifs et disponibilités en fonction du gîte qui vous plaît.'
                robots='index, follow'
            />
            <section className="location-select" >
                <div className="locations">
                    {
                        locationsDatas.map((location) =>
                            <CollapsePrices key={location.id} location={location} reservations={chooseReservations(location.id, reservations)} />
                        )
                    }
                </div>
            </section>
            <section>
                <p>Pour toute réservation ou demande d'information supplémentaire, n'hésitez pas à nous <Link to='/contact'>contacter</Link>.</p>
                <p>Les heures précises d’arrivée et de départ seront définies avec vous directement pour une meilleure flexibilité.</p>
            </section>
        </main>
    )
};

export default Prices;