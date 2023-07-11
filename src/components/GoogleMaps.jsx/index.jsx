import { isDesktopScreenSize } from "../utils/IsDesktopScreenSize";

// address props need address like this form (ex: "L'Abergement, 71390 Messey-sur-Grosne")
function GoogleMap({ mapUrl }) {

    const changeSize = (phone, desktop) => {
        if (isDesktopScreenSize()) {
            return `${desktop}px`;
        } else {
            return `${phone}px`;
        };
    };

    return (
        <iframe
            title="A l'Est de la Grosne"
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