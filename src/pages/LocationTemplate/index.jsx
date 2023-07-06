import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../components/LocationComp/Logo";
import Gallery from "../../components/LocationComp/Gallery";
import SpecificityBloc from "../../components/LocationComp/SpecificityBloc";
import InProgressLoc from "../../components/LocationComp/InProgressLoc";
import ErrorComp from "../../components/ErrorComp";
import ChangeTitlePage from "../../components/ChangeTitlePage";
import GoogleMap from "../../components/GoogleMaps.jsx";

function LocationTemplate({ locationsDatas }) {

    const iconList = <i className="fa-solid fa-arrow-right"></i>;
    const { id } = useParams();

    const [isGoodId, setIsGoodId] = useState(false);
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
        inProgress: undefined,
    });

    useEffect(() => {
        locationsDatas.map((location) => {
            if (location.id === id) {
                setLocation(location);
                setIsGoodId(true)
            }
            return null;
        })
    })

    if (isGoodId) {

        return (
            <main className="location-template">
                <ChangeTitlePage titlePage={location.title} />
                <h1>
                    <Logo
                        logoDesktop={location.logoDesktop}
                        logoPhone={location.logoPhone}
                        alt={location.title}
                    />
                </h1>

                <Gallery
                    picturesDesktop={location.picturesDesktop}
                    picturesPhone={location.picturesPhone}
                />

                {
                    location.inProgress ? (
                        <React.Fragment>
                            <section className="description">
                                <h2>{location.description}</h2>
                                <InProgressLoc
                                    locationsDatas={locationsDatas}
                                />
                            </section>
                        </React.Fragment>
                    ) : (

                        <React.Fragment>
                            <section className="description">
                                <h2>Description :</h2>
                                <p>{location.description}</p>
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
                                            <li key={requirement}>
                                                {iconList}
                                                <p>{requirement}</p>
                                            </li>
                                        )
                                    }
                                </ul>
                            </section>
                            <section className="google-maps">
                                <GoogleMap address="L'Abergement, 71390 Messey-sur-Grosne" />
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