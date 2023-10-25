import ModifHead from "../../components/ModifHead";
import FullScreenGallery from "../../components/FullScreenGallery";


function LocationHome({ locationsDatas, picturesDatas }) {
    return (
        <main className="locationHome">
            <ModifHead
                titlePage='Nos Gîtes'
                description="Voici nos plus beaux gîtes en location dans les campagnes de Bourgogne, non loin de Châlon-Sur-Saône, disponibles tout le long d'année, des vacances d'été ou scolaire aux fêtes de fin d'année."
                robots='index, follow'
            />
            <FullScreenGallery locationsDatas={locationsDatas} picturesDatas={picturesDatas} isHomePage={false} />
        </main>
    )
};

export default LocationHome;