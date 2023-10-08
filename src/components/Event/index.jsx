import SpinnerLoader from "../SpinnerLoader";
import { choosePicture } from "../utils/ChoosePicture";
import { formatDate } from "../utils/FormatDate";
import he from "he";

function Event({ event }) {
    const pictureDesktop = event.coverPictureDesktop;
    const picturePhone = event.coverPicturePhone;
    const title = event.title;
    const description = event.description;
    const startDate = event.startDate;
    const endDate = event.endDate;
    const link = event.link;
    const address = event.address;

    const handleClick = (e) => {
        if (!event.link) {
            e.preventDefault();
        }
    }
    return (
        <a href={link} onClick={handleClick} target="_blank" rel='noreferrer' className="eventLink">
            <div className="bloc-img">
                {
                    pictureDesktop && picturePhone && title ?
                        <img src={choosePicture(pictureDesktop, picturePhone)} alt={he.decode(title)} />
                        :
                        <SpinnerLoader isLoad={true} />
                }
            </div>
            <div className="card-quote">
                <h3>{he.decode(title)}</h3>
                <ul>
                    <li>{he.decode(address)}</li>
                    <li>Du {formatDate(startDate)}</li>
                    <li>au {formatDate(endDate)}</li>
                </ul>
                <p>{he.decode(description)}</p>
            </div>
        </a>
    )
};

export default Event;