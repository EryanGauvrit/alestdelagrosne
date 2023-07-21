import { useState } from "react";
import ModifHead from "../../components/ModifHead";
import SlideShow from "../../components/SlideShow";
import { choosePicture } from "../../components/utils/ChoosePicture";


function LocationHome({ locationsDatas, picturesDatas }) {

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
        </main>
    )
};

export default LocationHome;