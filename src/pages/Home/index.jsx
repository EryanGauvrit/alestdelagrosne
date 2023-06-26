import SlideShow from "../../components/SlideShow";
import { useEffect, useState } from "react";
import picturesDatas from "../../datas/picturesGalleryHome.json";
import homePicture from "../../assets/pictures/home_picture700.jpg";
import { Link } from "react-router-dom";
import SpinnerLoader from "../../components/SpinnerLoader";

function Home() {

    const [pictureArray, setPictureArray] = useState([]);
    const phoneScreenSize = 750;
    const phonePictureSize = 350;
    const desktopPictureSize = 550;

    const getPicture = ((size) => {
        picturesDatas.map((data) => {
            if (data.size === size) {
                setPictureArray(data.pictures)
            }
            return pictureArray;
        })
    });

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

    useEffect(() => {
        if (window.screen.width >= phoneScreenSize) {
            getPicture(desktopPictureSize);
        } else {
            getPicture(phonePictureSize);
        }
    });

    return (
        <main className="main-home">
            <div className="title-home">
                <div>
                    <h1>À l'Est de la Grosne</h1>
                    <h2>Gîtes de Bourgogne</h2>
                </div>
                <h3>Idéalement situés entre la côte chalonnaise et la côte mâconnaise ...</h3>
            </div>

            <SlideShow
                picture={pictureArray}
            />

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
                    <Link to='/hobbies'>Plus d'infos</Link>
                </article>
                <aside>
                    <SpinnerLoader isLoad={isLoading} />
                    <img
                        style={{
                            display: `${isLoading ? "none" : "flex"}`
                        }}
                        src={homePicture}
                        alt="Arc-en-ciel qui commence dans un prés"
                    />
                </aside>
            </section>
        </main>
    )
};

export default Home;