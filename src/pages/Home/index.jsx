import SlideShow from "../../components/SlideShow";
import { useEffect, useState } from "react";
import picturesDatas from "../../datas/picturesGalleryHome.json";

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
                <h3>Idéalement situés entre la côte chalonnaise et la côte mâconnaise</h3>
            </div>

            <SlideShow
                picture={pictureArray}
            />

        </main>
    )
};

export default Home;