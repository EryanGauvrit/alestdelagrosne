import SpinnerLoader from "../SpinnerLoader";
import { choosePicture } from "../utils/ChoosePicture";

function ServicesCards({ card }) {

    const pictureDesktop = card.coverPictureDesktop;
    const picturePhone = card.coverPicturePhone;
    const title = card.title;
    const description = card.description;

    return (
        <div className="servicesCards">
            <h3>{title}</h3>
            <div className="bloc-img">
                {
                    pictureDesktop && picturePhone && title ?
                        <img src={choosePicture(pictureDesktop, picturePhone)} alt={title} />
                        :
                        <SpinnerLoader isLoad={true} />
                }
            </div>
            <p>{description}</p>
        </div>
    )
};

export default ServicesCards;