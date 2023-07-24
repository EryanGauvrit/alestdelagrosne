import { useState } from "react";
import SlideShow from "../../components/SlideShow";
import { choosePicture } from "../../components/utils/ChoosePicture";
import LocationsList from "../../components/LocationsList";
import { Link } from "react-router-dom";
import logoDesktop from "../../assets/logos/logoBlanc200-min.png";
import logoPhone from "../../assets/logos/logoBlanc130-min.png";

function FullScreenGallery({ locationsDatas, picturesDatas }) {

    const icon = <i className="fa-solid fa-house"></i>

    const [picturesDesktop] = useState(picturesDatas[0].pictures);
    const [picturesPhone] = useState(picturesDatas[1].pictures);

    const pictureArray = choosePicture(picturesDesktop, picturesPhone);

    return (
        <section className="fullScreenGallery">
            <SlideShow
                pictures={pictureArray}
                onClick={false}
            />
            <div className="content-bloc">
                <article className="locationHome-title">
                    <Link to='/' onClick={"#backTop-anchor"}><img src={choosePicture(logoDesktop, logoPhone)} alt="À l'Est de la Grosne" /></Link>
                    <div className="title-bloc">
                        <h1>À l'Est de la Grosne</h1>
                        <h2>Gîtes de Campagne</h2>
                        <h3>BOURGOGNE - FRANCE</h3>
                    </div>
                </article>
                <article className="locationHome-list">
                    <div><h3>Nos gîtes </h3>{icon}</div>
                    <LocationsList locationsDatas={locationsDatas} homePage={true} />
                </article>

            </div>
        </section>
    )
};

export default FullScreenGallery;