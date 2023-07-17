import facebook64 from '../../assets/social/facebook64.png';
import linkedin64 from '../../assets/social/linkedin64.png';
import facebook100 from '../../assets/social/facebook100.png';
import linkedin100 from '../../assets/social/linkedin100.png';
import { isDesktopScreenSize } from '../../components/utils/IsDesktopScreenSize';
import GoogleMap from '../../components/GoogleMaps.jsx';
import ModifHead from '../../components/ModifHead';

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
            <ModifHead
                titlePage='Contact'
                description='Contactez nous directement par téléphone ou par mail pour toute demande de réservation ou information.'
                robots='index, follow'
            />
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
                    <li>{iconList}Idéalement situé entre <strong>Cluny,</strong> <strong>Tournus,</strong> <strong>Chalon-sur-Saône</strong></li>
                </ul>
            </section>
            <section className='localisation'>
                <GoogleMap
                    mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645.900808585101!2d4.738708931176042!3d46.64637271692672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f306b5bfdd02cf%3A0x7971ed8ea3c0764e!2sL&#39;Abergement%2C%2071390%20Messey-sur-Grosne!5e1!3m2!1sfr!2sfr!4v1689092259995!5m2!1sfr!2sfr"
                />
            </section>
        </main>
    )
};

export default Contact;