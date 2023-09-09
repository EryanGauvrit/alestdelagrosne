import ButtonLink from "../ButtonLink";
import { formatEvents } from "../utils/SortEvents";
import { choosePicture } from "../utils/ChoosePicture";
import React from "react";
import { formatDate } from "../utils/FormatDate";

function NextEvent({ eventsDatas }) {

    const nextEvent = formatEvents(eventsDatas)[0];

    return (
        <article className="nextEvent">
            {
                eventsDatas[0] &&
                <React.Fragment>
                    <h3>Prochaine manifestation : </h3>
                    <a href={nextEvent.link} target="_blank" rel='noreferrer' className="event-bloc">
                        <div className="bloc-img">
                            <img src={choosePicture(nextEvent.coverPictureDesktop, nextEvent.coverPicturePhone)} alt="évenement" />
                        </div>
                        <ul className="event-details">
                            <li className="title-list">
                                <i className="fa-solid fa-circle-info"></i>
                                <h4>{nextEvent.title}</h4>
                                <i className="fa-solid fa-circle-info"></i>
                            </li>
                            <li><i className="fa-solid fa-chevron-right"></i>{nextEvent.description}</li>
                            <li><i className="fa-solid fa-chevron-right"></i>Du {formatDate(nextEvent.startDate)}</li>
                            <li><i className="fa-solid fa-chevron-right"></i>au {formatDate(nextEvent.endDate)}</li>
                            <li><i className="fa-solid fa-chevron-right"></i>{nextEvent.address}</li>
                        </ul>
                    </a>
                    <ButtonLink
                        link="/hobbies"
                        content="Et bien plus encore !"
                        borderColor='$color-two'
                        color='$color-two'
                    />
                </React.Fragment>
            }
        </article>
    )
};

export default NextEvent;