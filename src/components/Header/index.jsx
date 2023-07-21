import { Link } from "react-router-dom";
import { useState } from "react";
import logo from './../../assets/logowebsite300.png'; // redimensionner en 200
import LocationsList from "../LocationsList";


function Header({ locationsDatas, currentPage }) {
    const [isActive, setActive] = useState(false);
    const [isActiveLocationList, setActiveLocationList] = useState(false);

    const burgerToggle = (event) => {
        setActive(!isActive);
    };
    const locationListToggle = (event) => {
        setActiveLocationList(!isActiveLocationList);
    };

    const chevron = <i className="fa-solid fa-chevron-up chevron-up" onClick={locationListToggle}></i>;
    console.log(currentPage)


    return (
        <header className={`${isActive && "active"} ${currentPage === '/location' ? "header-location" : ""}`}>
            <div className="header-phone">
                <Link to='/' onClick={"#backTop-anchor"}><img src={logo} alt="A l'Est de la Grosne" /></Link>
                <span className="burger-toggle" onClick={burgerToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

            </div>
            <nav>
                <Link to='/' onClick={"#backTop-anchor"}>Accueil</Link>
                <div className={`${isActiveLocationList && "activeLocationList"}`}>
                    <div>
                        <Link to='/location'>Nos gîtes</Link>
                        {chevron}
                    </div>
                    <LocationsList locationsDatas={locationsDatas} homePage={false} />
                </div>
                <Link to='/services' onClick={"#backTop-anchor"}>Nos prestations</Link>
                <Link to='/hobbies' onClick={"#backTop-anchor"}>Loisirs</Link>
                <Link to='/prices' onClick={"#backTop-anchor"}>Tarifs & disponibilités</Link>
                <Link to='/contact' onClick={"#backTop-anchor"}>Nous contacter</Link>
            </nav>
        </header>
    )
};

export default Header;