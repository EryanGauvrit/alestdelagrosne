import facebook64 from '../../assets/social/facebook64.png';
import linkedin64 from '../../assets/social/linkedin64.png';
import facebook100 from '../../assets/social/facebook100.png';
import linkedin100 from '../../assets/social/linkedin100.png';
import ppPascalDesktop from "../../assets/profile/pp_pascal_100-min.jpg";
import ppPascalPhone from "../../assets/profile/pp_pascal_70-min.jpg";
import ppLeslieDesktop from "../../assets/profile/pp_leslie_100-min.jpg";
import ppLesliePhone from "../../assets/profile/pp_leslie_70-min.jpg";
import { isDesktopScreenSize } from '../../components/utils/IsDesktopScreenSize';
import GoogleMap from '../../components/GoogleMaps.jsx';
import ModifHead from '../../components/ModifHead';
import { choosePicture } from '../../components/utils/ChoosePicture';

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
                    <figcaption className='pp'>
                        <img src={choosePicture(ppPascalDesktop, ppPascalPhone)} alt='Pascal' />
                    </figcaption>
                </article>
                <article>
                    <div>
                        <h2>Leslie</h2>
                        <a href="tel:0629515288">06.29.51.52.88</a>
                        <p>Langues parlées : Anglais et allemand</p>
                    </div>
                    <figcaption className='pp'>
                        <img src={choosePicture(ppLeslieDesktop, ppLesliePhone)} alt='Leslie' />
                    </figcaption>
                </article>
            </section>
            <a href="mailto:alestdelagrosne@gmail.com">alestdelagrosne@gmail.com</a>
            <section className='social-link'>
                <h2>Retrouvez-nous sur nos réseaux : </h2>
                <div>
                    <a href='https://www.facebook.com/profile.php?id=100092562339758' target="_blank" rel='noreferrer'><img src={chooseLogo(facebook64, facebook100)} alt='lien vers facebook' /></a>
                    <a href='#'><img src={choosePicture(linkedin64, linkedin100)} alt='lien vers linkedin' /></a>
                </div>

            </section>
            <section>
                <h2>Localisation :</h2>
                <ul>
                    <li>{iconList}35 min de la gare TGV de Montchanin – Le Creusot</li>
                    <li>{iconList}40 min de la gare TGV de Macon – Loché</li>
                    <li>{iconList}20 min de la gare TGV de Chalon sur Saône</li>
                    <li>{iconList}20 min de l’autoroute A6</li>
                    <li>{iconList}Idéalement situé entre Cluny, Tournus, Chalon-sur-Saône</li>
                </ul>
            </section>
            <section className='localisation'>
                <GoogleMap
                    mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d416666.3660693397!2d4.5456125453467955!3d46.68025649265147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f306b5bfdd02cf%3A0x7971ed8ea3c0764e!2sL%27Abergement%2C%2071390%20Messey-sur-Grosne!5e0!3m2!1sfr!2sfr!4v1689948566591!5m2!1sfr!2sfr"
                />
            </section>
        </main>
    )
};

export default Contact;