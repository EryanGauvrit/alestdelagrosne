import React, { useEffect, useState } from "react";
import SlideShow from "../../components/SlideShow";
import { choosePicture } from "../../components/utils/ChoosePicture";
import LocationsList from "../../components/LocationsList";
import { Link } from "react-router-dom";
import logoDesktop from "../../assets/logos/logoBlanc200-min.png";
import logoPhone from "../../assets/logos/logoBlanc130-min.png";
import ButtonScrollBottom from "../ButtonScrollBottom";

function FullScreenGallery({ locationsDatas, picturesDatas, isHomePage }) {

    const [picturesDesktop, setPicturesDesktop] = useState([]);
    const [picturesPhone, setPicturesPhone] = useState([]);
    const [pictureArray, setPictureArray] = useState([]);

    useEffect(() => {
        setPicturesDesktop(picturesDatas[0].pictures);
        setPicturesPhone(picturesDatas[1].pictures);
        setPictureArray(choosePicture(picturesDesktop, picturesPhone))
    }, [picturesDatas, picturesDesktop, picturesPhone]);

    return (
        <section className="fullScreenGallery">
            <SlideShow
                pictures={pictureArray}
                onClick={false}
            />
            <div className={`content-bloc ${!isHomePage && "fullScreenGallery-basic"}`}>
                <article className="locationHome-title">
                    <Link to='/' onClick={"#backTop-anchor"}><img src={choosePicture(logoDesktop, logoPhone)} alt="À l'Est de la Grosne" /></Link>
                    <div className="title-bloc">
                        <h1>À l'Est de la Grosne</h1>
                        <h2>Gîtes de Campagne</h2>
                        <h3>BOURGOGNE - FRANCE</h3>
                    </div>
                </article>
                <article className="locationHome-list">
                    <div><h3>Nos gîtes :</h3></div>
                    <LocationsList locationsDatas={locationsDatas} homePage={true} />
                </article>
                {
                    isHomePage && (
                        <div className="title-home">
                            <h3>Idéalement situés entre la côte <strong>chalonnaise</strong> et la côte <strong>mâconnaise</strong> ...</h3>
                            <ButtonScrollBottom />
                        </div>
                    )
                }
            </div>
        </section>
    )
};

export default FullScreenGallery;