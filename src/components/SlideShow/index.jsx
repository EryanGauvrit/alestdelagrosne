import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SpinnerLoader from "../SpinnerLoader";
import ZoomPicture from "../ZoomPicture";

function SlideShow({ pictures, onClick }) {

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

    /* Activation OnClick */

    const activeCursor =
        onClick ? {
            cursor: 'pointer'
        } : {
            cursor: 'default'
        };
    const [isActiveOnClick, setIsActiveOnclick] = useState(false);
    const [currentPicture, setCurrentPicture] = useState('');
    const ActivationOnclick = (e) => {
        if (isActiveOnClick) {
            setIsActiveOnclick(false);
            console.log(isActiveOnClick)
        } else {
            setIsActiveOnclick(true);
            setCurrentPicture(e.target.src);
            console.log(isActiveOnClick)
            console.log(currentPicture)

        }
    };

    return (
        <React.Fragment>
            <Slider className="picture-gallery" {...settings}>
                {
                    pictures.map((picture) =>
                        <div className="current-picture-bloc" key={picture}>
                            <SpinnerLoader isLoad={isLoading} />
                            <img
                                src={picture}
                                alt="carousel"
                                onClick={ActivationOnclick}
                                style={activeCursor}
                            />
                        </div>
                    )
                }
            </Slider>
            <ZoomPicture
                picture={currentPicture}
                ActivationOnclick={ActivationOnclick}
            />
        </React.Fragment>
    )
};

export default SlideShow;