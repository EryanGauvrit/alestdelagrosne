import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className="title-footer">
                <h2>À l'Est de la Grosne</h2>
                <h3>Gîtes de Bourgogne</h3>
            </div>
            <ul className="socialLink-list">
                <li className="link-icon"><a href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                <li><i className="fa-solid fa-tree"></i></li>
                <li className="link-icon"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><i className="fa-solid fa-tree"></i></li>
                <li className="link-icon"><a href="#"><i className="fa-solid fa-paper-plane"></i></a></li>
            </ul>
            <ul className="link-list">
                <li><Link to={'/'}>Accueil</Link></li>
                <li><i className="fa-solid fa-wine-bottle"></i></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><i className="fa-solid fa-wine-bottle"></i></li>
                <li><Link to={'/mentions'}>Mentions légales</Link></li>
            </ul>
            <p>© 2023 alestdelagrosne.com. Tous droits réservés. <Link to={"#"}>espace administration</Link></p>
        </footer>
    )
};

export default Footer;