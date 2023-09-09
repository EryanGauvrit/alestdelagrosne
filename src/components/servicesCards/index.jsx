import SpinnerLoader from "../SpinnerLoader";
import { choosePicture } from "../utils/ChoosePicture";
import he from "he";

function ServicesCards({ card }) {

    const pictureDesktop = card.coverPictureDesktop;
    const picturePhone = card.coverPicturePhone;
    const title = card.title;
    const description = card.description;

    return (
        <div className="servicesCards">
            <h3>{he.decode(title)}</h3>
            <div className="bloc-img">
                {
                    pictureDesktop && picturePhone && title ?
                        <img src={choosePicture(pictureDesktop, picturePhone)} alt={he.decode(title)} />
                        :
                        <SpinnerLoader isLoad={true} />
                }
            </div>
            <p>{he.decode(description)}</p>
        </div>
    )
};

export default ServicesCards;