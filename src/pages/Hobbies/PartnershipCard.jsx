import ButtonLink from '../../components/ButtonLink';
import bgImg from './bg-img-accueil-velo.jpg';
import logo from './logo-transparent.png';


const PartnershipCard = () => {
    return (
        <div className="partenership-card">
            <div className='partenership-card-title'>
                <h3>
                    Labélisation Accueil vélo
                </h3>
                <a href="https://www.francevelotourisme.com/accueil-velo/hebergement" target="_blank" rel="noreferrer">
                    <img src={logo} alt="Accueil vélo" />
                </a>
            </div>
            <div className='partenership-card-content'>
                <img src={bgImg} alt="Accueil vélo" />
                <p>
                    Le gîte <strong>La Chavoche</strong> est situé à 6 km de « La Boucle de Bourgogne du Sud » là où est née la 1ère voie verte de France en 1997, et à 3 km de la CycloRoute71. L'itinéraire de liaison emprunte une petite route de campagne au trafic automobile très limité.
                </p>
            </div>
            <div className='partenership-card-footer'>
                <h4>
                    Nous rejoindre depuis :
                </h4>
                <ButtonLink 
                    externalNavigation 
                    content={
                        <>
                            <i class="fa-solid fa-person-biking"></i>
                            La voie verte
                        </>
                    } 
                    link={'https://geovelo.app/fr/route/?bike-type=own&c=4.716986%2C46.624828&e-bike=false&from=4.686050%2C46.632399&to=4.745053%2C46.622276&z=13.49'}  
                />
                <ButtonLink 
                    externalNavigation 
                    content={<>
                        <i className="fa-solid fa-person-biking"></i>
                        La CycloRoute 71
                    </>}
                    link={'https://geovelo.app/fr/route/?bike-type=own&c=4.732643%2C46.607107&e-bike=false&from=4.737933%2C46.592708&to=4.745053%2C46.622276&z=12.93'} 
                />
            </div>
        </div>
    )
}

export default PartnershipCard