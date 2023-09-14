

function ScrollBottom() {

    const chevron = <i className="fa-solid fa-chevron-down"></i>;

    const handleScrollDownClick = () => {
        // Calculez la nouvelle position de défilement en fonction de la hauteur de la fenêtre
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollTo = scrollY + windowHeight;

        // Faites défiler vers le bas de 100vh en utilisant une animation fluide
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth', // Cette option active l'animation fluide
        });
    };

    return (
        <div className="scroll-bottom" onClick={handleScrollDownClick}>
            <div>
                <span className="chevron--1">{chevron}</span>
                <span className="chevron--2">{chevron}</span>
                <span className="chevron--3">{chevron}</span>
            </div>
            <div>
                <span className="chevron--1">{chevron}</span>
                <span className="chevron--2">{chevron}</span>
                <span className="chevron--3">{chevron}</span>
            </div>
        </div>
    )
};

export default ScrollBottom;