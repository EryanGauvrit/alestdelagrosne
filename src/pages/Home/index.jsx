import React from "react";
import NextEvent from "../../components/NextEvent";
import ModifHead from "../../components/ModifHead";
import FullScreenGallery from "../../components/FullScreenGallery";

function Home({ locationsDatas, picturesDatas, eventsDatas }) {

    const iconList = <i className="fa-solid fa-wine-bottle"></i>;

    return (
        <React.Fragment>
            <ModifHead
                titlePage="A l'Est de la Grosne"
                description="A l'Est de la Grosne vous propose des séjours dans nos de gîtes, situés en Saône et Loire sur les communes de La Chapelle-de-Bragny et de Messey-sur-Grosne, Nous faisons de la location de gîtes en Saône et Loire au cœur des grands crus bourguignons tout le long d'année, des vacances d'été ou scolaire aux fêtes de fin d'année."
                robots="index, follow"
            />
            <main className="main-home">
                <FullScreenGallery locationsDatas={locationsDatas} picturesDatas={picturesDatas} isHomePage={true} />
                <section className="home-description" id="discover">
                    <article>
                        <h3>À quoi s'attendre ?</h3>
                        <p>Venez séjourner dans nos <strong>gîtes en Saône et Loire</strong> au cœur des grands crus bourguignons,
                            sur les communes de <strong>La Chapelle-de-Bragny</strong> et de <strong>Messey-sur-Grosne</strong>.</p>
                    </article>
                    <div>
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
                                    <p>...</p>

                                </li>
                            </ul>
                        </article>
                        <NextEvent eventsDatas={eventsDatas} />
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
};

export default Home;