import { useEffect, useState } from "react";


function ZoomPicture({ picture, ActivationOnclick }) {

    return (
        <div className={`picture-zoom ${ActivationOnclick && picture ? 'zoom-active' : ''}`}>
            <div className="close-zoom" onClick={ActivationOnclick}>X</div>
            <img src={picture} alt="zoom" />
        </div>
    )
};

export default ZoomPicture;