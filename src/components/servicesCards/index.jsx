import { choosePicture } from "../utils/ChoosePicture";

function ServicesCards({ card }) {
    return (
        <div className="servicesCards">
            <h3>{card.title}</h3>
            <img src={choosePicture(card.coverPictureDesktop, card.coverPicturePhone)} alt={card.title} />
            <p>{card.description}</p>
        </div>
    )
};

export default ServicesCards;