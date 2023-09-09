import { Link } from "react-router-dom";
import ButtonLink from "../ButtonLink";
import { choosePicture } from "../utils/ChoosePicture";


function InProgressLoc({ locationsDatas }) {

    const iconList = <i className="fa-regular fa-hand-pointer"></i>;

    const inProgress = (inProgress) => {
        if (Number(inProgress) === 0) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <article className="inProgressLoc">
            <p>Nous vous invitons à consulter nos gîtes actuellement ouverts :</p>
            <ul>
                {
                    locationsDatas.map((location) =>
                        !inProgress(location.inProgress) && <li key={location.id}><Link to={`/location/${location.id}`} onClick={"#backTop-anchor"}>
                            {iconList}
                            <img src={choosePicture(location.logoDesktop, location.logoPhone)} alt={location.title} />
                        </Link></li>
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