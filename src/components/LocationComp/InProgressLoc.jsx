import { Link } from "react-router-dom";
import ButtonLink from "../ButtonLink";


function InProgressLoc({ locationsDatas }) {
    return (
        <article className="inProgressLoc">
            <p>Nous vous invitons à consulter nos gîtes actuellement ouverts :</p>
            <ul>
                {
                    locationsDatas.map((location) =>
                        !location.inProgress && <li key={location.id}><Link to={`/location/${location.id}`}>{location.title}</Link></li>
                    )
                }
            </ul>
            <ButtonLink
                link='/'
                content="Retourner à la page d'accueil"
                borderColor='$color-two'
                color='$color-two'
            />
        </article>
    )
};

export default InProgressLoc;