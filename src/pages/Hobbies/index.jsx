import React from "react";
import Event from "../../components/Event";
import { formatEvents } from "../../components/utils/SortEvents";
import SlideShow from "../../components/SlideShow";
import ButtonLink from "../../components/ButtonLink";
import { bike, castle, cave, climb, heritage, hiking, waterway, wineRoad } from "../../components/utils/HobbiesPictures";

function Hobbies({ events }) {

    const listLinkIcon = <i className="fa-solid fa-arrow-up-right-from-square"></i>;
    const icon = <i className="fa-solid fa-check"></i>

    return (
        <main className="hobbies">
            <section className="events">
                {
                    events[0] &&
                    <React.Fragment>
                        <h2>Manifestations à l'affiche</h2>
                        {
                            formatEvents(events).map((event) =>
                                <Event key={event.id} event={event} />
                            )
                        }
                    </React.Fragment>
                }
            </section>
            <section>
                <h2>Les activités en Saône et Loire</h2>
                <article>
                    <h3>Activités sportives</h3>
                    <ul className="hobbies-bloc">
                        <li className="hobbies-bloc-list">
                            <h4>Escalade</h4>
                            <img src={climb(1)} alt="Escalade" className="climb" />
                            <p>2 sites à proximité :</p>
                            <ul>
                                <li>{listLinkIcon}<a href="http://escalade-cote-sud.fr/2020/09/29/etrigny/" target="_blank" rel="noreferrer">À Etrigny - 5 kms</a></li>
                                <li>{listLinkIcon}<a href="http://escalade-cote-sud.fr/2020/06/12/culles-les-roches-topo-ffme/" target="_blank" rel="noreferrer">Culles les Roches - 10 kms</a></li>
                            </ul>
                            <img src={climb(2)} alt="Escalade" />
                        </li>
                        <li className="hobbies-bloc-list">
                            <h4>Randonnées à vélo</h4>
                            <p>
                                A 5 kms du gîte vous trouverez la voie verte.
                                Il est possible d’effectuer une grande boucle Cluny – Mâcon – Tournus – Chalon-sur-Saône – Cluny,
                                sur 145 km de balades et découvertes.
                            </p>
                            <ul>
                                <li>Nous pouvons vous mettre des vélos et tandems à disposition (sur demande à la réservation du gîte).</li>
                                <li>Liens utils :</li>
                                <li>{listLinkIcon}<a href="https://www.destination-saone-et-loire.fr/fr/nos-destinations/a-velo.html" target="_blank" rel="noreferrer">destination-saone-et-loire.fr</a></li>
                                <li>{listLinkIcon}<a href="https://www.francevelotourisme.com/itineraire/bourgogne-du-sud-chalon-sur-saone-macon" target="_blank" rel="noreferrer">francevelotourisme.com</a></li>
                            </ul>
                            <img src={bike()} alt="Randonnées à vélo" />
                        </li>
                        <li className="hobbies-bloc-list">
                            <h4>Randonnées</h4>
                            <p>
                                A 30m du gîte, vous trouverez des départs de sentiers et la Forêt du Grand Bragny.
                                Vous trouverez également d’innombrables itinéraires de randonnées pour tous les niveaux :
                                La Roche de Solutré, le chemin des Moines, balades dans les vignobles ….
                            </p>
                            <ButtonLink
                                link={"https://www.destination-saone-et-loire.fr/fr/nos-pepites/les-balades-et-randos.html"}
                                content={"En savoir plus ?"}
                                externalNavigation={true}
                            />
                            <img src={hiking(1)} alt="randonnée" />
                            <img src={hiking(2)} alt="randonnée" />
                        </li>
                        <div className="hobbies-bloc-div ">
                            <li className="hobbies-bloc-list">
                                <h4>Equitation</h4>
                                <p>Plusieurs centres à proximité du gîte (situés entre 1 et 10 kms) :</p>
                                <ul>
                                    <li>{icon}La Chapelle de Bragny</li>
                                    <li>{icon}Corlay</li>
                                    <li>{icon}Messey sur Grosne</li>
                                    <li>{icon}Etrigny</li>
                                </ul>
                            </li>
                            <li className="hobbies-bloc-list">
                                <h4>Terrains de tennis</h4>
                                <p>2 sites à proximité : </p>
                                <ul>
                                    <li>{icon}Etrigny – 5 kms</li>
                                    <li>{icon}Sennecey le Grand – 10 kms</li>
                                </ul>
                            </li>
                            <li className="hobbies-bloc-list">
                                <h4>Piscines et lieux de baignade les plus proches :</h4>
                                <ul>
                                    <li>{listLinkIcon}<a href="https://www.senneceylegrand.fr/piscine-municipale" target="_blank" rel="noreferrer">Piscine découverte à Sennecey le Grand – 10 kms</a></li>
                                    <li>{listLinkIcon}<a href="https://www.bourgogne-tourisme.com/baignade/base-nautique-lacs-de-laives" target="_blank" rel="noreferrer">Base nautique des lacs de Laives – 10 kms</a></li>
                                </ul>
                            </li>
                            <li className="hobbies-bloc-list">
                                <h4>Pêche (dans la Grosne, la Saône)</h4>
                                <p>La rivière la Grosne est à 200m du gîte !</p>
                                <ul>
                                    <li>Possibilité de vous réserver la carte de pêche (sur demande à la réservation du gîte).</li>
                                    <li>{listLinkIcon}<a href="https://www.peche-saone-et-loire.fr/ou-pecher/les-rivieres/grosne/" target="_blank" rel="noreferrer">En savoir plus ?</a></li>
                                </ul>
                            </li>
                            <li className="hobbies-bloc-list">
                                <h4>Voies navigables</h4>
                                <img src={waterway()} alt="Voies navigables" />
                                <ButtonLink
                                    link={"https://www.bourgogne-tourisme.com/decouvrir/au-fil-des-canaux-et-rivieres/"}
                                    content={"Toutes les infos se trouvent ici"}
                                    externalNavigation={true}
                                />
                            </li>
                        </div>
                    </ul>
                </article>
                <article>
                    <h3>Patrimoine</h3>
                    <ul className="hobbies-bloc">
                        <li className="hobbies-bloc-list">
                            <h4>Cluny / Dijon / Beaune / Chalon sur Saône / Macon / Tournus / Chapaize ….</h4>
                            <SlideShow
                                pictures={heritage()}
                                onClick={false}
                            />
                            <ButtonLink
                                link={"https://www.destination-saone-et-loire.fr/fr/71-experiences/patrimoine-et-artisanat-dart.html"}
                                content={"Toutes les informations"}
                                externalNavigation={true}

                            />
                        </li>
                        <li className="hobbies-bloc-list">
                            <h4>Les grottes de Blanot / Les grottes d’Azé ….</h4>
                            <img src={cave()} alt="Les grottes de Blanot / Les grottes d’Azé" />
                        </li>
                        <li className="hobbies-bloc-list">
                            <h4>Châteaux de Brancion / Cormatin ….</h4>
                            <img src={castle()} alt="Châteaux de Brancion / Cormatin" />
                        </li>
                        <li className="hobbies-bloc-list">
                            <h4>La route des vins</h4>
                            <img src={wineRoad(2)} alt="La route des vins" />
                        </li>
                        <li className="hobbies-bloc-list">
                            <h4>Gastronomie</h4>
                            <ul>
                                <li>{icon}Marchés</li>
                                <li>{icon}Restaurants</li>
                                <li>{icon}Caves</li>
                                <li>{icon}...</li>
                            </ul>
                            <ButtonLink
                                link={"https://www.vigneronsdebuxy.fr/"}
                                content={"Les Vignerons de Buxy"}
                                externalNavigation={true}
                            />
                            <ButtonLink
                                link={"https://www.cave-bissey.com/"}
                                content={"Cave de Bissey"}
                                externalNavigation={true}
                            />
                        </li>
                    </ul>
                </article>
            </section>

        </main>
    )
};

export default Hobbies;