import { choosePicture } from "../utils/ChoosePicture";
import { formatDate } from "../utils/FormatDate";

function Event({ event }) {
    console.log(event)

    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <a href={event.link} onClick={!event.link && handleClick} className="eventLink">
            <h3>{event.title}</h3>
            <img src={choosePicture(event.coverPictureDesktop, event.coverPicturePhone)} alt={event.title} />
            <div>
                <ul>
                    <li>{event.address}</li>
                    <li>Du {formatDate(event.startDate)}</li>
                    <li>au {formatDate(event.endDate)}</li>
                </ul>
                <p>{event.description}</p>
            </div>
        </a>
    )
};

export default Event;