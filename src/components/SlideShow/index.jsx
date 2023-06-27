import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SpinnerLoader from "../SpinnerLoader";

function SlideShow({ pictures }) {

    /********** Gestion des images **********/
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

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
        <Slider className="picture-gallery" {...settings}>
            {
                pictures.map((picture) =>
                    <div className="current-picture-bloc" key={picture}>
                        <SpinnerLoader isLoad={isLoading} />
                        <img src={picture} alt="carousel" />
                    </div>
                )
            }
        </Slider>
    )
};

export default SlideShow;