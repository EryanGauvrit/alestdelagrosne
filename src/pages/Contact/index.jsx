import ppPascalDesktop from "../../assets/contact/pp_pascal_100-min.jpg";
import ppPascalPhone from "../../assets/contact/pp_pascal_70-min.jpg";
import ppLeslieDesktop from "../../assets/contact/pp_leslie_100-min.jpg";
import ppLesliePhone from "../../assets/contact/pp_leslie_70-min.jpg";
import mapDesktop from "../../assets/contact/contact-map-desktop-min.jpg";
import mapPhone from "../../assets/contact/contact-map-phone-min.jpg";
import ModifHead from '../../components/ModifHead';
import { choosePicture } from '../../components/utils/ChoosePicture';

function Contact() {

    const iconList = <i className="fa-solid fa-check"></i>;

    const atDesktop = <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256"><path fill="currentColor" d="M128 20a108 108 0 0 0 0 216c22.27 0 45.69-6.73 62.64-18a12 12 0 1 0-13.29-20c-13 8.63-31.89 14-49.35 14a84 84 0 1 1 84-84c0 9.29-1.67 17.08-4.69 21.95c-2.64 4.24-6 6.05-11.31 6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12 12 0 0 0-23.49-3.46a52 52 0 1 0 8.86 79.57C172.3 174.3 182.81 180 196 180c24.67 0 40-19.92 40-52A108.12 108.12 0 0 0 128 20Zm0 136a28 28 0 1 1 28-28a28 28 0 0 1-28 28Z" /></svg>;
    const atPhone = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 256 256"><path fill="currentColor" d="M128 20a108 108 0 0 0 0 216c22.27 0 45.69-6.73 62.64-18a12 12 0 1 0-13.29-20c-13 8.63-31.89 14-49.35 14a84 84 0 1 1 84-84c0 9.29-1.67 17.08-4.69 21.95c-2.64 4.24-6 6.05-11.31 6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12 12 0 0 0-23.49-3.46a52 52 0 1 0 8.86 79.57C172.3 174.3 182.81 180 196 180c24.67 0 40-19.92 40-52A108.12 108.12 0 0 0 128 20Zm0 136a28 28 0 1 1 28-28a28 28 0 0 1-28 28Z" /></svg>;
    const fbDesktop = <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" /></svg>;
    const fbPhone = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" /></svg>;
    const linkedinDesktop = <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" /></svg>;
    const linkedinPhone = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" /></svg>;
    const instaDesktop = <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z" /></svg>;
    const instaPhone = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z" /></svg>;

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
                        <h2>Leslie</h2>
                        <a href="tel:0629515288">06.29.51.52.88</a>
                        <p>Langues parlées : Anglais et allemand</p>
                    </div>
                    <figcaption className='pp'>
                        <img src={choosePicture(ppLeslieDesktop, ppLesliePhone)} alt='Leslie' />
                    </figcaption>
                </article>
                <article>
                    <div>
                        <h2>Pascal</h2>
                        <a href="tel:0615109225">06.15.10.92.25</a>
                    </div>
                    <figcaption className='pp'>
                        <img src={choosePicture(ppPascalDesktop, ppPascalPhone)} alt='Pascal' />
                    </figcaption>
                </article>
            </section>
            <section className='social-link'>
                <h2>Retrouvez-nous et contactez-nous sur nos réseaux : </h2>
                <div>
                    <a href='https://www.facebook.com/profile.php?id=100092562339758' target="_blank" rel='noreferrer'>{choosePicture(fbDesktop, fbPhone)}</a>
                    <a href='#'>{choosePicture(instaDesktop, instaPhone)}</a>
                    <a href='#'>{choosePicture(linkedinDesktop, linkedinPhone)}</a>
                    <a href="mailto:alestdelagrosne@gmail.com">{choosePicture(atDesktop, atPhone)}</a>
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
            <div className='localisation'>
                <img src={choosePicture(mapDesktop, mapPhone)} alt='Idéalement situé entre Cluny, Tournus, Chalon-sur-Saône<' />
            </div>
        </main>
    )
};

export default Contact;