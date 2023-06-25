import React, { useEffect, useState } from "react";
import SpinnerLoader from "../SpinnerLoader";

function SlideShow({ picture }) {

    /********** Gestion des images **********/

    const picturesLength = picture.length; // on récupère la taille du tableau d'images
    const [currentPicture, setCurrentPicture] = useState(0); // on initialise un état à 0 pour l'image actuelle

    /* Conditions affichage images selon les requirements */
    const nextPicture = () => {
        setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1);
        setIsLoading(true);
        resetIsLoading(false);
    }
    const prevPicture = () => {
        setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1);
        setIsLoading(true);
        resetIsLoading(false);
    }

    /* Gestion des chevrons */

    let chevron = "activeChevron"; // par défault ils sont activés

    if (picturesLength === 1) {
        chevron = "notActiveChevron";
    }

    /* Loading Spinner */

    const [isLoading, setIsLoading] = useState(true);
    const spinnerDelay = 1100;
    const resetIsLoading = (state) => {
        setTimeout(() => {
            setIsLoading(state);
        }, spinnerDelay);
    }

    useEffect(() => {
        if (isLoading) {
            resetIsLoading(false);
        }
    }, [isLoading]);

    return (
        <section className="picture-gallery">
            {picture.map((I, index) => {

                return (
                    <div className="current-picture-bloc" key={I}>
                        <div
                            className={index === currentPicture ? "picture active" : "picture"}
                        >
                            {index === currentPicture && (
                                <div
                                    className="currentPicture-box"
                                    style={{
                                        backgroundImage: `url(${picture[index]})`
                                    }}
                                >
                                    <SpinnerLoader
                                        isLoad={isLoading}
                                    />
                                    <i className={"fa-solid fa-chevron-left " + chevron} onClick={prevPicture}></i>
                                    <i className={"fa-solid fa-chevron-right " + chevron} onClick={nextPicture}></i>

                                </div>

                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    )
};

export default SlideShow;