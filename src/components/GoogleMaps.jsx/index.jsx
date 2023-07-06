import { isDesktopScreenSize } from "../utils/IsDesktopScreenSize";

// address props need address like this form (ex: "L'Abergement, 71390 Messey-sur-Grosne")
function GoogleMap({ address }) {

    const changeSize = (phone, desktop) => {
        if (isDesktopScreenSize()) {
            return `${desktop}px`;
        } else {
            return `${phone}px`;
        };
    };

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.9508513577821!2d4.73933072581886!3d46.64634333044169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f306b5bfdd02cf%3A0x7971ed8ea3c0764e!2s${encodeURIComponent(address)}!5e1!3m2!1sfr!2sfr!4v1688642267116!5m2!1sfr!2sfr`;

    return (
        <iframe
            title="Accueil - A l'Est de la Grosne"
            src={mapUrl}
            width={changeSize(300, 800)}
            height={changeSize(300, 500)}
            style={{ border: "solid 1px $color-two", borderRadius: '10px' }}
            loading="lazy"
        >

        </iframe >
    )
};

export default GoogleMap;