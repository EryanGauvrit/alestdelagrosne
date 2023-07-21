import { isDesktopScreenSize } from '../utils/IsDesktopScreenSize';
import bgImage1 from '../../assets/bg-img/bg-bloc-1.jpg';
import bgImage2 from '../../assets/bg-img/bg-bloc-2.jpg';
import bgImage3 from '../../assets/bg-img/bg-bloc-3.jpg';
import React from 'react';

function SpecificityBloc({ capacity, equipment, services }) {

    const iconList = <i className="fa-solid fa-check"></i>;

    const activeBgImg = (img) => {
        if (isDesktopScreenSize()) {
            return `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(${isDesktopScreenSize() && img})`;
        }
    }

    return (
        <section className="specificityBloc">

            <article className="capacity" style={{ background: activeBgImg(bgImage1) }}>
                <h3>Capacité d'accueil :</h3>
                <div>
                    <ul>
                        <h4>{iconList} Capacité maximale :</h4>
                        <p style={{ textAlign: 'end' }}>{capacity.maxCapacity} personnes</p>
                    </ul>
                    <ul>
                        <h4>{iconList} RDC :</h4>
                        {
                            capacity.rdcCapacity.map((item) =>
                                <li key={item}>- {item}</li>
                            )
                        }
                    </ul>
                    <ul>
                        {
                            capacity.floor &&
                            <React.Fragment>
                                <h4>{iconList} Etage :</h4>
                                {capacity.floorCapacity.map((floorCapacity) =>
                                    <li key={floorCapacity}>- {floorCapacity}</li>
                                )}
                            </React.Fragment>
                        }
                    </ul>
                </div>
            </article>
            <article className="equipment" style={{ backgroundImage: activeBgImg(bgImage2) }}>
                <h3>Equipements intérieur :</h3>
                <ul>
                    {
                        equipment.map((equipment) =>
                            <li key={equipment}>{iconList}{equipment}</li>
                        )
                    }
                </ul>
            </article>
            <article className="services" style={{ backgroundImage: activeBgImg(bgImage3) }}>
                <h3>Services :</h3>
                <ul>
                    {
                        services.map((services) =>
                            <li key={services}>{iconList}{services}</li>
                        )
                    }
                </ul>
            </article>

        </section>
    )
};

export default SpecificityBloc;