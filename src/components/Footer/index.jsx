import { Link } from "react-router-dom";


function Footer({ currentPage }) {
    return (
        <footer className={currentPage === '/location' ? "footer-location" : ""}>
            <div className="title-footer" style={currentPage === '/' ? { display: 'none' } : {}}>
                <h2>À l'Est de la Grosne</h2>
                <h3>Gîtes de Bourgogne</h3>
            </div>
            <ul className="socialLink-list">
                <li className="link-icon"><a href="https://www.facebook.com/profile.php?id=100092562339758" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a></li>
                <li><i className="fa-solid fa-circle"></i></li>
                <li className="link-icon"><a href="#" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a></li>
                <li><i className="fa-solid fa-circle"></i></li>
                <li className="link-icon"><a href="https://www.linkedin.com/in/pascal-rorgues-4196a157" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
            <ul className="link-list">
                <li><Link to={'/'} onClick={"#backTop-anchor"}>Accueil</Link></li>
                <li><i className="fa-solid fa-wine-bottle"></i></li>
                <li><Link to={'/contact'} onClick={"#backTop-anchor"}>Contact</Link></li>
                <li><i className="fa-solid fa-wine-bottle"></i></li>
                <li><Link to={'/legalnotices'} onClick={"#backTop-anchor"}>Mentions légales</Link></li>
            </ul>
            <p>© 2023 alestdelagrosne.com. Tous droits réservés. <a href={"https://espace-administrateur.alestdelagrosne.com/"} target="_blank" rel='noreferrer'>espace administration</a></p>
        </footer>
    )
};

export default Footer;