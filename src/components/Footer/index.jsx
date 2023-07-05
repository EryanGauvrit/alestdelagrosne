import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className="title-footer">
                <h2>À l'Est de la Grosne</h2>
                <h3>Gîtes de Bourgogne</h3>
            </div>
            <ul className="socialLink-list">
                <li className="link-icon"><a href="https://www.facebook.com/profile.php?id=100092562339758" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a></li>
                <li><i className="fa-solid fa-tree"></i></li>
                <li className="link-icon"><a href="#" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a></li>
                <li><i className="fa-solid fa-tree"></i></li>
                <li className="link-icon"><a href="mailto:alestdelagrosne@gmail.com" target="_blank" rel='noreferrer'><i className="fa-solid fa-paper-plane"></i></a></li>
            </ul>
            <ul className="link-list">
                <li><Link to={'/'} onClick={"#backTop-anchor"}>Accueil</Link></li>
                <li><i className="fa-solid fa-wine-bottle"></i></li>
                <li><Link to={'/contact'} onClick={"#backTop-anchor"}>Contact</Link></li>
                <li><i className="fa-solid fa-wine-bottle"></i></li>
                <li><Link to={'/mentions'} onClick={"#backTop-anchor"}>Mentions légales</Link></li>
            </ul>
            <p>© 2023 alestdelagrosne.com. Tous droits réservés. <Link to={"#"}>espace administration</Link></p>
        </footer>
    )
};

export default Footer;