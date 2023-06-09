import { Link } from "react-router-dom";
import { useState } from "react";
import logo from './../../assets/logowebsite300.png'; // redimensionner en 200
const chevron = <i className="fa-solid fa-chevron-up chevron-up"></i>;


function Header() {
    const [isActive, setActive] = useState(false);
    const [isActiveLocationList, setActiveLocationList] = useState(false);

    const burgerToggle = (event) => {
        setActive(!isActive);
    };
    const locationListToggle = (event) => {
        setActiveLocationList(!isActiveLocationList);
    };


    return (
        <header className={`${isActive && "active"}`}>
            <div className="header-phone">
                <Link to='/'><img src={logo} alt="A l'Est de la Grosne" /></Link>
                <span className="burger-toggle" onClick={burgerToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

            </div>
            <nav>
                <Link to='/'>Accueil</Link>
                <div className={`${isActiveLocationList && "activeLocationList"}`}>
                    <div onClick={locationListToggle}>
                        <p>Nos gîtes</p>
                        {chevron}
                    </div>
                    <ul>
                        <li><Link to='#'>La Chavoche</Link></li>
                        <li><Link to='#'>Le Poulot</Link></li>
                    </ul>
                </div>
                <Link to='#'>Nos prestations</Link>
                <Link to='#'>Loisirs</Link>
                <Link to='#'>Tarifs & disponibilités</Link>
                <Link to='#'>Nous contacter</Link>
            </nav>
            <div className="tablet-bar"></div>
        </header>
    )
};

export default Header;