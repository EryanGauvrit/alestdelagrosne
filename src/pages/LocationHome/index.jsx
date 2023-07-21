import ModifHead from "../../components/ModifHead";


function LocationHome({ locationsDatas, picturesDatas }) {
    return (
        <main className="locationHome">
            <ModifHead
                titlePage='Nos Gîtes'
                description='Voici nos plus beaux gîtes dans les campagnes de Bourgogne, non loin de Châlon-Sur-Saône.'
                robots='index, follow'
            />
            locationHome
        </main>
    )
};

export default LocationHome;