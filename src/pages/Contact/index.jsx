import facebook64 from '../../assets/social/facebook64.png';
import linkedin64 from '../../assets/social/linkedin64.png';
import facebook100 from '../../assets/social/facebook100.png';
import linkedin100 from '../../assets/social/linkedin100.png';
import { isDesktopScreenSize } from '../../components/utils/IsDesktopScreenSize';
import GoogleMap from '../../components/GoogleMaps.jsx';

function Contact() {

    const iconList = <i className="fa-solid fa-check"></i>;

    const chooseLogo = (logoPhone, logoDesktop) => {
        if (isDesktopScreenSize()) {
            return logoDesktop;
        } else {
            return logoPhone;
        }
    };

    return (
        <main className="contact">
            <h1>Nous contacter : </h1>
            <section className='contact-profil'>
                <article>
                    <div>
                        <h2>Pascal</h2>
                        <a href="tel:0615109225">06.15.10.92.25</a>
                    </div>
                    <figcaption className='pp'></figcaption>
                </article>
                <article>
                    <div>
                        <h2>Leslie</h2>
                        <a href="tel:0629515288">06.29.51.52.88</a>
                    </div>
                    <figcaption className='pp'></figcaption>
                </article>
            </section>
            <a href="mailto:alestdelagrosne@gmail.com">alestdelagrosne@gmail.com</a>
            <section className='social-link'>
                <h2>Retrouvez-nous sur nos réseaux : </h2>
                <div>
                    <a href='https://www.facebook.com/profile.php?id=100092562339758' target="_blank" rel='noreferrer'><img src={chooseLogo(facebook64, facebook100)} alt='lien vers facebook' /></a>
                    <a href='#'><img src={chooseLogo(linkedin64, linkedin100)} alt='lien vers linkedin' /></a>
                </div>

            </section>
            <section>
                <h2>Localisation :</h2>
                <ul>
                    <li>{iconList}1h de Montchanin</li>
                    <li>{iconList}1h de Dijon</li>
                    <li>{iconList}Idéalement situé entre Cluny, Tournus, Chalon sur Saône</li>
                </ul>
            </section>
            <section>
                <GoogleMap
                    address="L'Abergement, 71390 Messey-sur-Grosne"
                />
            </section>
        </main>
    )
};

export default Contact;