import React from "react";
import { Link } from "react-router-dom";

function LocationsList({ locationsDatas, homePage }) {

    const iconList = <i className="fa-solid fa-arrow-right"></i>;
    const iconListHeader = <i className="fa-solid fa-house"></i>;
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
                        <React.Fragment>
                            <li className="list-bar"></li>
                            {
                                locationsDatas.map((location) =>
                                    <React.Fragment key={location.id}>
                                        <li ><Link to={'/location/' + location.id} onClick={"#backTop-anchor"}>{location.title}</Link>{iconListHeader}</li>
                                        <li className="list-bar"></li>
                                    </React.Fragment>
                                )
                            }
                        </React.Fragment>


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