import { Link } from "react-router-dom";

function LocationsList({ locationsDatas, homePage }) {

    const iconList = <i className="fa-solid fa-arrow-right"></i>;
    const isInProgress = (inProgress) => {
        if (inProgress) {
            return ' (En cours de rénovation)';
        } else {
            return ' (Disponible)'
        };
    };

    return (
        <ul>
            {
                !homePage ?
                    (
                        locationsDatas.map((location) =>
                            <li key={location.id}><Link to={'/location/' + location.id} onClick={"#backTop-anchor"}>{location.title}</Link></li>
                        )
                    )
                    :
                    (
                        locationsDatas.map((location) =>
                            <li key={location.id}>
                                {iconList}
                                <Link to={'/location/' + location.id} onClick={"#backTop-anchor"}>
                                    {location.title}
                                </Link>
                                {isInProgress(location.inProgress)}
                            </li>
                        )
                    )
            }
        </ul>
    )
};

export default LocationsList;