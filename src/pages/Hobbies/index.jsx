import React from "react";
import Event from "../../components/Event";
import { formatEvents } from "../../components/utils/SortEvents";
import SlideShow from "../../components/SlideShow";
import ButtonLink from "../../components/ButtonLink";
import { bike, castle, cave, climb, heritage, hiking, waterway, wineRoad } from "../../components/utils/HobbiesPictures";
import HobbiesCard from "../../components/HobbiesCard";

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
                    <div className="hobbies-bloc">
                        <HobbiesCard
                            title={'Escalade'}
                            description={"2 sites à proximité :"}
                            listLink={[
                                { link: 'http://escalade-cote-sud.fr/2020/09/29/etrigny/', content: "À Etrigny - 5 kms" },
                                { link: 'http://escalade-cote-sud.fr/2020/06/12/culles-les-roches-topo-ffme/', content: "Culles les Roches - 10 kms" }
                            ]}
                            pictures={[climb(1), climb(2)]}
                        />
                        <HobbiesCard
                            title={'Randonnées à vélo'}
                            description={`A 5 kms du gîte vous trouverez la voie verte.
                            Il est possible d’effectuer une grande boucle Cluny – Mâcon – Tournus – Chalon-sur-Saône – Cluny,
                            sur 145 km de balades et découvertes.`}
                            listText={["Nous pouvons vous mettre des vélos et tandems à disposition (sur demande à la réservation du gîte)."]}
                            iconListText={false}
                            listLink={[
                                { link: 'https://www.destination-saone-et-loire.fr/fr/nos-destinations/a-velo.html', content: "destination-saone-et-loire.fr" },
                                { link: 'https://www.francevelotourisme.com/itineraire/bourgogne-du-sud-chalon-sur-saone-macon', content: "francevelotourisme.com" }
                            ]}
                            btnLink={false}
                            btnText={false}
                            pictures={[bike()]}
                        />
                        <HobbiesCard
                            title={'Randonnées'}
                            description={`A 30m du gîte, vous trouverez des départs de sentiers et la Forêt du Grand Bragny.
                            Vous trouverez également d’innombrables itinéraires de randonnées pour tous les niveaux :
                            La Roche de Solutré, le chemin des Moines, balades dans les vignobles ….`}
                            iconListLink={false}
                            btnLink={"https://www.destination-saone-et-loire.fr/fr/nos-pepites/les-balades-et-randos.html"}
                            btnText={"En savoir plus ?"}
                            pictures={[hiking(1), hiking(2)]}
                        />
                        <div className="hobbies-bloc-div ">
                            <HobbiesCard
                                title="Equitation"
                                description="Plusieurs centres à proximité du gîte (situés entre 1 et 10 kms) :"
                                listText={["La Chapelle de Bragny", "Corlay", "Messey sur Grosne", "Etrigny"]}
                                iconListLink={false}
                            />
                            <HobbiesCard
                                title="Terrains de tennis"
                                description="2 sites à proximité :"
                                listText={["Etrigny – 5 kms", "Sennecey le Grand – 10 kms"]}
                                iconListLink={false}
                            />
                            <HobbiesCard
                                title="Piscines et lieux de baignade les plus proches :"
                                listLink={[{ link: "https://www.senneceylegrand.fr/piscine-municipale", content: "Piscine découverte à Sennecey le Grand – 10 kms" }, { link: "https://www.bourgogne-tourisme.com/baignade/base-nautique-lacs-de-laives", content: "Base nautique des lacs de Laives – 10 kms" }]}
                            />
                            <HobbiesCard
                                title="Pêche (dans la Grosne, la Saône)"
                                description="La rivière la Grosne est à 200m du gîte !"
                                listText={["Possibilité de vous réserver la carte de pêche (sur demande à la réservation du gîte)."]}
                                iconListText={false}
                                listLink={[{ link: "https://www.peche-saone-et-loire.fr/ou-pecher/les-rivieres/grosne/", content: "En savoir plus ?" }]}
                            />
                            <HobbiesCard
                                title="Voies navigables"
                                pictures={[waterway()]}
                                iconListLink={false}
                                btnLink="https://www.bourgogne-tourisme.com/decouvrir/au-fil-des-canaux-et-rivieres/"
                                btnText="Toutes les infos se trouvent ici"
                            />
                        </div>
                    </div>
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