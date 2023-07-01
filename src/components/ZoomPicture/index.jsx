
function ZoomPicture({ picture, activationOnclick }) {

    return (
        <div className={`picture-zoom ${activationOnclick && picture ? 'zoom-active' : undefined}`}>
            <div className="close-zoom" onClick={activationOnclick}>
                <i className="fa-solid fa-xmark"></i>
                <p>Fermer</p>
            </div>
            <div className="img-bloc">
                <img src={picture} alt="zoom" />
            </div>
        </div>
    )
};

export default ZoomPicture;