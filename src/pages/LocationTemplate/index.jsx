import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import locationsDatas from "../../datas/LocationsDatas.json";
import Logo from "../../components/LocationComp/Logo";
import Gallery from "../../components/LocationComp/Gallery";

function LocationTemplate() {

    const { id } = useParams();

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
            }
            return null;
        })
    })

    return (
        <main className="location-template">
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

            <section className="description">
                <h2>Description :</h2>
                <p>{location.description}</p>
            </section>
        </main>
    )
};

export default LocationTemplate;