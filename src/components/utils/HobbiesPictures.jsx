import { choosePicture } from "./ChoosePicture";

import bikePhone from "../../assets/pictures/hobbies/bike-1-270-min.jpg";
import bikeDesktop from "../../assets/pictures/hobbies/bike-1-370-min.jpg";
import castlePhone from "../../assets/pictures/hobbies/castle-1-270-min.jpg";
import castleDesktop from "../../assets/pictures/hobbies/castle-1-370-min.jpg";
import cavePhone from "../../assets/pictures/hobbies/cave-1-270-min.jpg";
import caveDesktop from "../../assets/pictures/hobbies/cave-1-370-min.jpg";
import climbPhone2 from "../../assets/pictures/hobbies/climb-2-270-min.jpg";
import climbDesktop2 from "../../assets/pictures/hobbies/climb-2-370-min.jpg";
import heritagePhone1 from "../../assets/pictures/hobbies/heritage-1-270-min.jpg";
import heritageDesktop1 from "../../assets/pictures/hobbies/heritage-1-370-min.jpg";
import heritagePhone2 from "../../assets/pictures/hobbies/heritage-2-270-min.jpg";
import heritageDesktop2 from "../../assets/pictures/hobbies/heritage-2-370-min.jpg";
import heritagePhone3 from "../../assets/pictures/hobbies/heritage-3-270-min.jpg";
import heritageDesktop3 from "../../assets/pictures/hobbies/heritage-3-370-min.jpg";
import heritagePhone4 from "../../assets/pictures/hobbies/heritage-4-270-min.jpg";
import heritageDesktop4 from "../../assets/pictures/hobbies/heritage-4-370-min.jpg";
import heritagePhone5 from "../../assets/pictures/hobbies/heritage-5-270-min.jpg";
import heritageDesktop5 from "../../assets/pictures/hobbies/heritage-5-370-min.jpg";
import heritagePhone6 from "../../assets/pictures/hobbies/heritage-6-270-min.jpg";
import heritageDesktop6 from "../../assets/pictures/hobbies/heritage-6-370-min.jpg";
import heritagePhone7 from "../../assets/pictures/hobbies/heritage-7-270-min.jpg";
import heritageDesktop7 from "../../assets/pictures/hobbies/heritage-7-370-min.jpg";
import hikingPhone from "../../assets/pictures/hobbies/hiking-1-270-min.jpg";
import hikingDesktop from "../../assets/pictures/hobbies/hiking-1-370-min.jpg";
import hikingPhone2 from "../../assets/pictures/hobbies/hiking-2-270-min.jpg";
import hikingDesktop2 from "../../assets/pictures/hobbies/hiking-2-370-min.jpg";
import waterwayPhone from "../../assets/pictures/hobbies/waterway-1-270-min.jpg";
import waterwayDesktop from "../../assets/pictures/hobbies/waterway-1-370-min.jpg";
import wineRoadPhone2 from "../../assets/pictures/hobbies/wine-road-2-270-min.jpg";
import wineRoadDesktop2 from "../../assets/pictures/hobbies/wine-road-2-370-min.jpg";

export const bike = () => {
    return choosePicture(bikeDesktop, bikePhone);
};
export const castle = () => {
    return choosePicture(castleDesktop, castlePhone);
};
export const cave = () => {
    return choosePicture(caveDesktop, cavePhone);
};
export const climb = (nbr) => {
    if (nbr === 1) {
        return false;
    } else {
        return choosePicture(climbDesktop2, climbPhone2);
    }
};
export const hiking = (nbr) => {
    if (nbr === 1) {
        return choosePicture(hikingDesktop, hikingPhone);
    } else if (nbr === 2) {
        return choosePicture(hikingDesktop2, hikingPhone2);
    } else {
        return false;
    }
};
export const waterway = () => {
    return choosePicture(waterwayDesktop, waterwayPhone);
};
export const wineRoad = (nbr) => {
    if (nbr === 1) {
        return false;
    } else {
        return choosePicture(wineRoadDesktop2, wineRoadPhone2);
    }
};
export const heritage = () => {
    let tabGalleryDesktop = [];
    let tabGalleryPhone = [];

    tabGalleryDesktop = tabGalleryDesktop.concat([
        heritageDesktop1,
        heritageDesktop2,
        heritageDesktop3,
        heritageDesktop4,
        heritageDesktop5,
        heritageDesktop6,
        heritageDesktop7,
    ])
    tabGalleryPhone = tabGalleryPhone.concat([
        heritagePhone1,
        heritagePhone2,
        heritagePhone3,
        heritagePhone4,
        heritagePhone5,
        heritagePhone6,
        heritagePhone7,
    ])
    return choosePicture(tabGalleryDesktop, tabGalleryPhone);
};