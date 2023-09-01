import React from "react";
import Event from "../../components/Event";
import { formatEvents } from "../../components/utils/SortEvents";

function Hobbies({ events }) {

    return (
        <main className="hobbies">
            <section className="events">
                {
                    events[0] &&
                    <React.Fragment>
                        <h2>Manifestations à l'affiche</h2>
                        {
                            formatEvents(events).map((event) =>
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