import SlideShow from "../../components/SlideShow";
import React, { useEffect, useState } from "react";
import picturesDatas from "../../datas/picturesGalleryHome.json";
import NextEvent from "../../components/NextEvent";
import ButtonLink from "../../components/ButtonLink";
import { choosePicture } from "../../components/utils/ChoosePicture";

function Home() {

    const [picturesDesktop] = useState(picturesDatas[0].pictures);
    const [picturesPhone] = useState(picturesDatas[1].pictures);

    const pictureArray = choosePicture(picturesDesktop, picturesPhone);

    /* Loading Spinner */

    const [isLoading, setIsLoading] = useState(true);
    const spinnerDelay = 1100;
    const resetIsLoading = (state) => {
        setTimeout(() => {
            setIsLoading(state);
        }, spinnerDelay);
    }

    useEffect(() => {
        if (isLoading) {
            resetIsLoading(false);
        }
    }, [isLoading]);


    return (
        <React.Fragment>

            <SlideShow
                pictures={pictureArray}
                onClick={false}
            />
            <main className="main-home">
                <div className="title-home">
                    <div>
                        <h1>À l'Est de la Grosne</h1>
                        <h2>Gîtes de Bourgogne</h2>
                    </div>
                    <h3>Idéalement situés entre la côte chalonnaise et la côte mâconnaise ...</h3>
                </div>
                <section className="home-description">
                    <article>
                        <h3>A quoi s'attendre ?</h3>
                        <p>Venez séjourner dans nos gîtes situés en Saône et Loire au cœur des grands crus bourguignons,
                            un sur la commune de La Chapelle de Bragny, le second sur la commune de Messey sur Grosne.</p>
                    </article>
                    <article>
                        <h3>Notre région vous propose :</h3>
                        <ul>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Une gastronomie réputée</p>

                            </li>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Les meilleurs vins de monde !</p>

                            </li>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Un patrimoine culturel et historique riche</p>

                            </li>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Des randonnées à pied ou vélo sur nos voies vertes</p>

                            </li>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Des rivières et canaux navigables</p>

                            </li>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Des sites d’escalade</p>

                            </li>
                            <li>
                                <i className="fa-solid fa-wine-bottle"></i>
                                <p>Et bien d’autres encore !</p>

                            </li>
                        </ul>
                        <ButtonLink
                            link="/hobbies"
                            content="Plus d'infos"
                            borderColor='$color-two'
                            color='$color-two'
                        />
                    </article>
                    {/* <aside>
                    <SpinnerLoader isLoad={isLoading} />
                    <img
                        style={{
                            display: `${isLoading ? "none" : "flex"}`
                        }}
                        src={homePicture}
                        alt="Arc-en-ciel qui commence dans un pré"
                    />
                </aside> */}
                </section>
                <NextEvent />
            </main>
        </React.Fragment>
    )
};

export default Home;