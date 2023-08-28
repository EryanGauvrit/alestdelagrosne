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
                console.log("Location template : ", typeof (location.inProgress))
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
                <ModifHead
                    titlePage={he.decode(location.title)}
                    description={he.decode(location.description)}
                    robots={location.inProgress && `index,follow`}
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
                                <h2>{he.decode(location.description)}</h2>
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
                                    mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.630919322744!2d4.743820571354376!3d46.622372162147215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3069a5aac69c5%3A0xe4bde27895314eaf!2s52%20Rte%20d&#39;Hauterive%2C%2071240%20La%20Chapelle-de-Bragny!5e1!3m2!1sfr!2sfr!4v1689093429253!5m2!1sfr!2sfr"
                                />
                            </section>
                        </React.Fragment>
                    )
                }

            </main>
        )
    } else {
        return <ErrorComp />
    }
};

export default LocationTemplate;