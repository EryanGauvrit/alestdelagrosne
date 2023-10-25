import React from "react";
import Event from "../../components/Event";
import { formatEvents } from "../../components/utils/SortEvents";
import { bike, castle, cave, climb, food, heritage, hiking, horse, pool, waterway, wineRoad } from "../../components/utils/HobbiesPictures";
import HobbiesCard from "../../components/HobbiesCard";
import ModifHead from "../../components/ModifHead";

function Hobbies({ events }) {

    return (
        <main className="hobbies">
            <ModifHead
                titlePage='Loisirs'
                description='Quelques loisirs et évènements en bourgogne non loin de Chalon-Sur-Saône et Mâcon'
                robots='noindex, nofollow'
            />
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
            <div className="separation-lign"></div>
            <section>
                <h1>Les activités en Saône et Loire</h1>
                <article>
                    <h3>Activités sportives</h3>
                    <div className="hobbies-bloc">
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title={'Escalade'}
                                description={"2 sites à proximité :"}
                                listLink={[
                                    { link: 'http://escalade-cote-sud.fr/2020/09/29/etrigny/', content: "À Etrigny - 5 kms" },
                                    { link: 'http://escalade-cote-sud.fr/2020/06/12/culles-les-roches-topo-ffme/', content: "Culles les Roches - 10 kms" }
                                ]}
                                pictures={[climb(2)]}
                                logo={climb(1)}
                            />
                        </div>
                        <div className="hobbies-card-placement">
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
                                pictures={[bike(1), bike(2)]}
                            />
                        </div>
                        <div className="hobbies-card-placement">
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
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Equitation"
                                description="Plusieurs centres à proximité du gîte (situés entre 1 et 10 kms) :"
                                listText={["La Chapelle de Bragny", "Corlay", "Messey sur Grosne", "Etrigny"]}
                                iconListLink={false}
                                pictures={[horse(1), horse(2)]}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Terrains de tennis"
                                description="2 sites à proximité :"
                                listText={["Etrigny – 5 kms", "Sennecey le Grand – 10 kms"]}
                                iconListLink={false}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Piscines et lieux de baignade les plus proches :"
                                listLink={[{ link: "https://www.destination-saone-et-loire.fr/fr/activite/piscine.html-6", content: "Piscine découverte à Sennecey le Grand – 10 kms" }, { link: "https://www.bourgogne-tourisme.com/baignade/base-nautique-lacs-de-laives", content: "Base nautique des lacs de Laives – 10 kms" }]}
                                pictures={[pool()]}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Pêche (dans la Grosne, la Saône)"
                                description="La rivière la Grosne est à 200m du gîte !"
                                listText={["Possibilité de vous réserver la carte de pêche (sur demande à la réservation du gîte)."]}
                                iconListText={false}
                                listLink={[{ link: "https://www.peche-saone-et-loire.fr/ou-pecher/les-rivieres/grosne/", content: "En savoir plus ?" }]}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Voies navigables"
                                pictures={[waterway(1), waterway(2)]}
                                iconListLink={false}
                                btnLink="https://www.bourgogne-tourisme.com/decouvrir/au-fil-des-canaux-et-rivieres/"
                                btnText="Toutes les infos se trouvent ici"
                            />
                        </div>
                    </div>
                </article>
                <article>
                    <h3>Patrimoine</h3>
                    <div className="hobbies-bloc">
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Cluny / Dijon / Beaune / Chalon sur Saône / Macon / Tournus / Chapaize …."
                                pictures={heritage()}
                                btnLink="https://www.destination-saone-et-loire.fr/fr/71-experiences/patrimoine-et-artisanat-dart.html"
                                btnText="Toutes les informations"
                                iconListLink={false}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Les grottes de Blanot / Les grottes d’Azé …."
                                pictures={[cave()]}
                                iconListLink={false}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Châteaux de Brancion / Cormatin …."
                                pictures={[castle(1), castle(2)]}
                                iconListLink={false}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="La route des vins"
                                pictures={[wineRoad(1), wineRoad(2)]}
                                iconListLink={false}
                            />
                        </div>
                        <div className="hobbies-card-placement">
                            <HobbiesCard
                                title="Gastronomie"
                                listText={["Marchés", "Restaurants", "Caves", "..."]}
                                listLink={[{ link: "https://www.vigneronsdebuxy.fr/", content: "Les Vignerons de Buxy" }, { link: "https://www.cave-bissey.com/", content: "Cave de Bissey" }]}
                                pictures={food()}
                            />
                        </div>
                    </div>
                </article>
            </section>

        </main>
    )
};

export default Hobbies;