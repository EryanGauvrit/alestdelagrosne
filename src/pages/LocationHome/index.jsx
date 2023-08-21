import ModifHead from "../../components/ModifHead";
import FullScreenGallery from "../../components/FullScreenGallery";


function LocationHome({ locationsDatas, picturesDatas }) {
    // console.log("LocationHome : ", picturesDatas)
    return (
        <main className="locationHome">
            <ModifHead
                titlePage='Nos Gîtes'
                description='Voici nos plus beaux gîtes dans les campagnes de Bourgogne, non loin de Châlon-Sur-Saône.'
                robots='index, follow'
            />
            <FullScreenGallery locationsDatas={locationsDatas} picturesDatas={picturesDatas} />
        </main>
    )
};

export default LocationHome;