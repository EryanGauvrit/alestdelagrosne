import { isDesktopScreenSize } from '../utils/IsDesktopScreenSize';
import bgImage1 from '../../assets/bg-img/bg-bloc-1.jpg';
import bgImage2 from '../../assets/bg-img/bg-bloc-2.jpg';
import bgImage3 from '../../assets/bg-img/bg-bloc-3.jpg';

function SpecificityBloc({ capacity, equipment, services }) {

    const iconList = <i className="fa-solid fa-check"></i>;

    const activeBgImg = (img) => {
        if (isDesktopScreenSize()) {
            return `url(${isDesktopScreenSize() && img})`;
        }
    }

    return (
        <section className="specificityBloc">

            <article className="capacity" style={{ backgroundImage: activeBgImg(bgImage1) }}>
                <h3>Capacité d'accueil :</h3>
                <div>
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
                            capacity.floor && <h4>{iconList} Etage :</h4>
                        }
                        {
                            capacity.floor && capacity.floorCapacity.map((floorCapacity) =>
                                <li key={floorCapacity}>- {floorCapacity}</li>
                            )
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