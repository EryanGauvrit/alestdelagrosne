import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../components/LocationComp/Logo";
import Gallery from "../../components/LocationComp/Gallery";
import SpecificityBloc from "../../components/LocationComp/SpecificityBloc";
import InProgressLoc from "../../components/LocationComp/InProgressLoc";
import ErrorComp from "../../components/ErrorComp";
import ModifHead from "../../components/ModifHead";
import GoogleMap from "../../components/GoogleMaps.jsx";
import ButtonLink from "../../components/ButtonLink";
import he from "he";
import { uniqueKey } from "../../app/DatasFormating";
import SpinnerLoader from "../../components/SpinnerLoader";

function LocationTemplate({ locationsDatas }) {

    const iconList = <i className="fa-solid fa-arrow-right"></i>;
    const { id } = useParams();

    const [isGoodId, setIsGoodId] = useState(false);
    const [inProgress, setInProgress] = useState();
    const [location, setLocation] = useState({
        title: '',
        logoDesktop: '',
        logoPhone: '',
        picturesDesktop: [],
        picturesPhone: [],
        description: '',
        capacity: {
            floor: undefined,
            floorCapacity: [],
            rdcCapacity: []
        },
        equipment: [],
        services: [],
        requirements: [],
        address: '',
        mapUrl: '',
        prices: {
            high: [],
            average: [],
            low: []
        },
        inProgress: undefined,
    });

    useEffect(() => {
        locationsDatas?.map((location) => {
            if (id === location.id) {
                setLocation(location);
                setIsGoodId(true)
                if (Number(location.inProgress) === 0) {
                    setInProgress(false);
                } else {
                    setInProgress(true);
                }
            }
            return null;
        })
    })

    if (isGoodId) {

        return (
            <main className="location-template">
                {
                    locationsDatas ?
                        <React.Fragment>
                            <ModifHead
                                titlePage={he.decode(location.title)}
                                description={he.decode(location.description)}
                                robots={!inProgress && `index,follow`}
                            />
                            <h1>
                                <Logo
                                    logoDesktop={location.logoDesktop}
                                    logoPhone={location.logoPhone}
                                    alt={he.decode(location.title)}
                                />
                            </h1>

                            <Gallery
                                picturesDesktop={location.picturesDesktop}
                                picturesPhone={location.picturesPhone}
                            />

                            {
                                inProgress ? (
                                    <React.Fragment>
                                        <section className="description">
                                            <h2 style={{ textTransform: "uppercase" }}>{he.decode(location.description)}</h2>
                                            <InProgressLoc
                                                locationsDatas={locationsDatas}
                                            />
                                        </section>
                                    </React.Fragment>
                                ) : (

                                    <React.Fragment>
                                        <section className="description">
                                            <h2>Description :</h2>
                                            <p>{he.decode(location.description)}</p>
                                        </section>

                                        <SpecificityBloc
                                            capacity={location.capacity}
                                            equipment={location.equipment}
                                            services={location.services}
                                        />
                                        <section className="requirement">
                                            <h2>Conditions : </h2>
                                            <ul>
                                                {
                                                    location.requirements.map((requirement) =>
                                                        <li key={uniqueKey(requirement)}>
                                                            {iconList}
                                                            <p>{he.decode(requirement)}</p>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </section>
                                        <section className="google-maps">
                                            <div className="address-bloc">
                                                <ButtonLink link='/prices' content='Tarifs' />
                                                <h2>Adresse :</h2>
                                                <address>
                                                    <p>{he.decode(location.address?.split(',')[0])},</p>
                                                    <p>{he.decode(location.address?.split(',')[1])}</p>
                                                </address>

                                            </div>
                                            <GoogleMap
                                                mapUrl={location.mapUrl}
                                            />
                                        </section>
                                    </React.Fragment>
                                )
                            }

                        </React.Fragment>
                        :
                        <SpinnerLoader isLoad={true} />
                }

            </main>
        )
    } else {
        return <ErrorComp />
    }
};

export default LocationTemplate;