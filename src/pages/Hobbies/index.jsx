import React from "react";
import Event from "../../components/Event";
import { formatEvents } from "../../components/utils/SortEvents";
import { Link } from "react-router-dom";
import SlideShow from "../../components/SlideShow";

function Hobbies({ events }) {

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
                        <li>
                            <h4><img src="" alt="Escalade" /></h4>
                            <p>2 sites à proximité</p>
                            <ul>
                                <li><a href="http://escalade-cote-sud.fr/2020/09/29/etrigny/" target="_blank" rel="noreferrer">À Etrigny - 5 kms</a></li>
                                <li><a href="http://escalade-cote-sud.fr/2020/06/12/culles-les-roches-topo-ffme/" target="_blank" rel="noreferrer">Culles les Roches - 10 kms</a></li>
                            </ul>
                            <img src="" alt="Escalade" />
                        </li>
                        <li>
                            <h4>Equitation</h4>
                            <p>Plusieurs centres à proximité du gîte (situés entre 1 et 10 kms) :</p>
                            <ul>
                                <li>La Chapelle de Bragny</li>
                                <li>Corlay</li>
                                <li>Messey sur Grosne</li>
                                <li>Etrigny</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Terrains de tennis</h4>
                            <p>2 sites à proximité</p>
                            <ul>
                                <li>Etrigny – 5 kms</li>
                                <li>Sennecey le Grand – 10 kms</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Piscines et lieux de baignade les plus proches :</h4>
                            <ul>
                                <li><a href="https://www.senneceylegrand.fr/piscine-municipale" target="_blank" rel="noreferrer">Piscine découverte à Sennecey le Grand – 10 kms</a></li>
                                <li><a href="https://www.bourgogne-tourisme.com/baignade/base-nautique-lacs-de-laives" target="_blank" rel="noreferrer">Base nautique des lacs de Laives – 10 kms</a></li>
                            </ul>
                        </li>
                        <li>
                            <h4>Randonnées</h4>
                            <p>
                                A 30m du gîte, vous trouverez des départs de sentiers et la Forêt du Grand Bragny.
                                Vous trouverez également d’innombrables itinéraires de randonnées pour tous les niveaux :
                                La Roche de Solutré, le chemin des Moines, balades dans les vignobles ….
                            </p>
                            <a href="https://www.destination-saone-et-loire.fr/fr/nos-pepites/les-balades-et-randos.html" target="_blank" rel="noreferrer">En savoir plus ?</a>
                            <ul>
                                <li><img src="" alt="randonnée" /></li>
                                <li><img src="" alt="randonnée" /></li>
                            </ul>
                        </li>
                        <li>
                            <h4>Randonnées à vélo</h4>
                            <p>
                                A 5 kms du gîte vous trouverez la voie verte.
                                Il est possible d’effectuer une grande boucle Cluny – Mâcon – Tournus – Chalon-sur-Saône – Cluny,
                                sur 145 km de balades et découvertes.
                            </p>
                            <ul>
                                <li><Link to='/services' onClick={"#backTop-anchor"} >Nous pouvons vous mettre des vélos et tandems à disposition (sur demande à la réservation du gîte).</Link></li>
                                <li>Liens utils :</li>
                                <li><a href="https://www.destination-saone-et-loire.fr/fr/nos-destinations/a-velo.html" target="_blank" rel="noreferrer">destination-saone-et-loire.fr</a></li>
                                <li><a href="https://www.francevelotourisme.com/itineraire/bourgogne-du-sud-chalon-sur-saone-macon" target="_blank" rel="noreferrer">francevelotourisme.com</a></li>
                                <li><img src="" alt="Randonnées à vélo" /></li>
                            </ul>
                        </li>
                        <li>
                            <h4>Pêche (dans la Grosne, la Saône)</h4>
                            <p>La rivière la Grosne est à 200m du gîte !</p>
                            <ul>
                                <li><Link to='/services' onClick={"#backTop-anchor"} >Possibilité de vous réserver la carte de pêche (sur demande à la réservation du gîte).</Link></li>
                                <li><a href="https://www.peche-saone-et-loire.fr/ou-pecher/les-rivieres/grosne/" target="_blank" rel="noreferrer">En savoir plus ?</a></li>
                            </ul>
                        </li>
                    </ul>
                </article>
                <article>
                    <h3>Patrimoine</h3>
                    <ul>
                        <li>
                            <h4>Cluny / Dijon / Beaune / Chalon sur Saône / Macon / Tournus / Chapaize ….</h4>
                            <SlideShow />
                            <a href="https://www.destination-saone-et-loire.fr/fr/71-experiences/patrimoine-et-artisanat-dart.html" target="_blank" rel="noreferrer">Toutes les informations</a>
                        </li>
                        <li>
                            <h4>Les grottes de Blanot / Les grottes d’Azé ….</h4>
                            <img src="" alt="Les grottes de Blanot / Les grottes d’Azé" />
                        </li>
                        <li>
                            <h4>Châteaux de Brancion / Cormatin ….</h4>
                            <img src="" alt="Châteaux de Brancion / Cormatin" />
                            <img src="" alt="Châteaux de Brancion / Cormatin" />
                        </li>
                        <li>
                            <h4>La route des vins</h4>
                            <img src="" alt="La route des vins" />
                        </li>
                    </ul>
                </article>
            </section>

        </main>
    )
};

export default Hobbies;