import { Link } from "react-router-dom";
import DetailsPrices from "../../components/DetailsPrices";
import React, { useState } from "react";
import ButtonLink from "../../components/ButtonLink";
import ModifHead from "../../components/ModifHead";

function Prices({ locationsDatas }) {

    const [locationSpecificity, setLocationSpecificity] = useState({})
    const handleChange = (e) => {
        locationsDatas.map((location) => {
            if (e.target.value === location.id) {
                setLocationSpecificity(location);
            } else if (e.target.value === 'default') {
                setLocationSpecificity({});
            }
            return null;
        });
    };

    return (
        <main className="prices-main">
            <h1>Tarifs et disponibilités :</h1>
            <ModifHead
                titlePage='Tarifs et disponibilités'
                description='Vous pouvez visualiser les tarifs et disponibilités en fonction du gîte qui vous plaît.'
                robots='index, follow'
            />
            <div className="location-select" >
                <label>Veuillez choisir un gîte :</label>
                <select name="locations" onChange={handleChange}>
                    <option value='default'>---- Choisir ----</option>
                    {
                        locationsDatas.map((location) =>
                            !location.inProgress &&
                            <option key={location.id} value={location.id}>{location.title}</option>
                        )
                    }
                </select>
            </div>
            {
                Object.keys(locationSpecificity).length !== 0 ?
                    <React.Fragment>
                        <DetailsPrices prices={locationSpecificity.prices} />
                        <ButtonLink
                            link={`/location/${locationSpecificity.id}`}
                            content="Détails du gîte"
                        />
                        <section>
                            <p>Pour toute réservation ou demande d'information supplémentaire, n'hésitez pas à nous <Link to='/contact'>contacter</Link>.</p>
                            <p>Les heures précises d’arrivée et de départ seront définies avec vous directement pour une meilleure flexibilité.</p>
                        </section>
                    </React.Fragment>
                    :
                    <h3>Vous devez sélectionner un gîte !</h3>
            }
        </main>
    )
};

export default Prices;