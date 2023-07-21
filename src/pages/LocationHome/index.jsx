import { useState } from "react";
import ModifHead from "../../components/ModifHead";
import SlideShow from "../../components/SlideShow";
import { choosePicture } from "../../components/utils/ChoosePicture";
import LocationsList from "../../components/LocationsList";
import { Link } from "react-router-dom";
import logoNb from "../../assets/logowebsiteNB300.png";


function LocationHome({ locationsDatas, picturesDatas }) {

    const icon = <i className="fa-solid fa-house"></i>

    const [picturesDesktop] = useState(picturesDatas[0].pictures);
    const [picturesPhone] = useState(picturesDatas[1].pictures);

    const pictureArray = choosePicture(picturesDesktop, picturesPhone);


    return (
        <main className="locationHome">
            <ModifHead
                titlePage='Nos Gîtes'
                description='Voici nos plus beaux gîtes dans les campagnes de Bourgogne, non loin de Châlon-Sur-Saône.'
                robots='index, follow'
            />
            <SlideShow
                pictures={pictureArray}
                onClick={false}
            />
            <section>
                <article className="locationHome-title">
                    <Link to='/' onClick={"#backTop-anchor"}><img src={logoNb} alt="À l'Est de la Grosne" /></Link>
                    <h1>À l'Est de la Grosne</h1>
                    <h2>Gîtes de Campagne</h2>
                    <h3>BOURGOGNE - FRANCE</h3>
                </article>
                <article className="locationHome-list">
                    <div><h3>Nos gîtes </h3>{icon}</div>
                    <LocationsList locationsDatas={locationsDatas} homePage={true} />
                </article>
            </section>

        </main>
    )
};

export default LocationHome;