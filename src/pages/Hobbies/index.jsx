import React, { useEffect, useState } from "react";
import Event from "../../components/Event";
import moment from "moment/moment";

function Hobbies({ events }) {

    // let sortEvents = [];
    const [sortEvents, setSortEvents] = useState([]);
    moment.locale('fr');

    useEffect(() => {
        events.sort((a, b) => {  // on converti les dates du format texte au format de date exploitable
            let aH = moment(a.startDate);
            let bH = moment(b.startDate);

            if (aH.valueOf() > bH.valueOf()) return -1; // on les compare pour remettre le tableau dans l'ordre souhaité
            if (aH.valueOf() < bH.valueOf()) return 1;
            return 0;
        });

        setSortEvents(events);
    }, [events, sortEvents])

    return (
        <main className="hobbies">
            <section className="events">
                {
                    events[0] &&
                    <React.Fragment>
                        <h2>Évènements</h2>
                        {
                            sortEvents.map((event) =>
                                <Event key={event.id} event={event} />
                            )
                        }
                    </React.Fragment>
                }
            </section>
            <section>
                <h2>Loisir</h2>
            </section>

        </main>
    )
};

export default Hobbies;