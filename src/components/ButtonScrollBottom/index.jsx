

function ButtonScrollBottom() {

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
        <button className="scroll-bottom button-link" onClick={handleScrollDownClick}>
            Découvrir
        </button>
    )
};

export default ButtonScrollBottom;