import React from "react";
import NextEvent from "../../components/NextEvent";
import ButtonLink from "../../components/ButtonLink";
import { choosePicture } from "../../components/utils/ChoosePicture";
import ModifHead from "../../components/ModifHead";
import LocationsList from "../../components/LocationsList";
import imgHomeDesktop from "../../assets/pictures/img_home_5_440-min.jpg";
import imgHomePhone from "../../assets/pictures/img_home_5_750-min.jpg";
import FullScreenGallery from "../../components/FullScreenGallery";

function Home({ locationsDatas, picturesDatas }) {

    const iconList = <i className="fa-solid fa-wine-bottle"></i>;

    return (
        <React.Fragment>
            <ModifHead
                titlePage="A l'Est de la Grosne"
                description="A l'Est de la Grosne vous propose des séjours dans nos de gîtes, situés en Saône et Loire sur les communes de La Chapelle-de-Bragny et de Messey-sur-Grosne, Venez séjourner dans nos gîtes situés en Saône et Loire au cœur des grands crus bourguignons"
                robots="index, follow"
            />
            <main className="main-home">
                <FullScreenGallery locationsDatas={locationsDatas} picturesDatas={picturesDatas} />
                <div className="title-home">
                    <h3>Idéalement situés entre la côte <strong>chalonnaise</strong> et la côte <strong>mâconnaise</strong> ...</h3>
                </div>
                <section className="home-description">
                    <article>
                        <h3>À quoi s'attendre ?</h3>
                        <p>Venez séjourner dans nos <strong>gîtes en Saône et Loire</strong> au cœur des grands crus bourguignons,
                            sur les commune de <strong>La Chapelle-de-Bragny</strong> et de <strong>Messey-sur-Grosne</strong>.</p>
                    </article>
                    <article>
                        <h3>Notre région vous propose :</h3>
                        <ul>
                            <li>
                                {iconList}
                                <p>Une gastronomie réputée</p>

                            </li>
                            <li>
                                {iconList}
                                <p>Les meilleurs vins du monde !</p>

                            </li>
                            <li>
                                {iconList}
                                <p>Un patrimoine culturel et historique riche</p>

                            </li>
                            <li>
                                {iconList}
                                <p>Des randonnées à pied ou à vélo sur nos voies vertes</p>

                            </li>
                            <li>
                                {iconList}
                                <p>Des rivières et canaux navigables</p>

                            </li>
                            <li>
                                {iconList}
                                <p>Des sites d’escalade</p>

                            </li>
                            <li>
                                {iconList}
                                <p>Et bien d’autres encore !</p>

                            </li>
                        </ul>
                    </article>
                    {/* <article
                        className="location-list-home"
                        style={{ background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${choosePicture(imgHomeDesktop, imgHomePhone)})` }}
                    >
                        <h3>Nous vous attendons dans nos gîtes :</h3>
                        <LocationsList locationsDatas={locationsDatas} homePage={true} />
                    </article> */}
                    <NextEvent />
                </section>
            </main>
        </React.Fragment>
    )
};

export default Home;