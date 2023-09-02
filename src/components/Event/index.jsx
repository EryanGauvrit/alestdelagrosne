import SpinnerLoader from "../SpinnerLoader";
import { choosePicture } from "../utils/ChoosePicture";
import { formatDate } from "../utils/FormatDate";

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
        <a href={link} onClick={handleClick} className="eventLink">
            <h3>{title}</h3>
            <div className="bloc-img">
                {
                    pictureDesktop && picturePhone && title ?
                        <img src={choosePicture(pictureDesktop, picturePhone)} alt={title} />
                        :
                        <SpinnerLoader isLoad={true} />
                }
            </div>
            <div className="card-quote">
                <ul>
                    <li>{address}</li>
                    <li>Du {formatDate(startDate)}</li>
                    <li>au {formatDate(endDate)}</li>
                </ul>
                <p>{description}</p>
            </div>
        </a>
    )
};

export default Event;