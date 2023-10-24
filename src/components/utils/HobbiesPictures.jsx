import { choosePicture } from "./ChoosePicture";

import bikePhone1 from "../../assets/pictures/hobbies/bike-1-270-min.jpg";
import bikeDesktop1 from "../../assets/pictures/hobbies/bike-1-370-min.jpg";
import bikePhone2 from "../../assets/pictures/hobbies/bike-2-270-min.jpg";
import bikeDesktop2 from "../../assets/pictures/hobbies/bike-2-370-min.jpg";
import castlePhone1 from "../../assets/pictures/hobbies/castle-1-270-min.jpg";
import castleDesktop1 from "../../assets/pictures/hobbies/castle-1-370-min.jpg";
import castlePhone2 from "../../assets/pictures/hobbies/castle-2-270-min.jpg";
import castleDesktop2 from "../../assets/pictures/hobbies/castle-2-370-min.jpg";
import cavePhone from "../../assets/pictures/hobbies/cave-1-270-min.jpg";
import caveDesktop from "../../assets/pictures/hobbies/cave-1-370-min.jpg";
import climbPhone1 from "../../assets/pictures/hobbies/climb-1-270-min.jpg";
import climbDesktop1 from "../../assets/pictures/hobbies/climb-1-370-min.jpg";
import climbPhone2 from "../../assets/pictures/hobbies/climb-2-270-min.jpg";
import climbDesktop2 from "../../assets/pictures/hobbies/climb-2-370-min.jpg";
import foodPhone1 from "../../assets/pictures/hobbies/food-1-270-min.jpg";
import foodDesktop1 from "../../assets/pictures/hobbies/food-1-370-min.jpg";
import foodPhone2 from "../../assets/pictures/hobbies/food-2-270-min.jpg";
import foodDesktop2 from "../../assets/pictures/hobbies/food-2-370-min.jpg";
import foodPhone3 from "../../assets/pictures/hobbies/food-3-270-min.jpg";
import foodDesktop3 from "../../assets/pictures/hobbies/food-3-370-min.jpg";
import horsePhone1 from "../../assets/pictures/hobbies/horse-1-270-min.jpg";
import horseDesktop1 from "../../assets/pictures/hobbies/horse-1-370-min.jpg";
import horsePhone2 from "../../assets/pictures/hobbies/horse-2-270-min.jpg";
import horseDesktop2 from "../../assets/pictures/hobbies/horse-2-370-min.jpg";
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
import poolPhone from "../../assets/pictures/hobbies/pool-1-270-min.jpg";
import poolDesktop from "../../assets/pictures/hobbies/pool-1-370-min.jpg";
import waterwayPhone1 from "../../assets/pictures/hobbies/waterway-1-270-min.jpg";
import waterwayDesktop1 from "../../assets/pictures/hobbies/waterway-1-370-min.jpg";
import waterwayPhone2 from "../../assets/pictures/hobbies/waterway-2-270-min.jpg";
import waterwayDesktop2 from "../../assets/pictures/hobbies/waterway-2-370-min.jpg";
import wineRoadPhone1 from "../../assets/pictures/hobbies/wine-road-1-270-min.jpg";
import wineRoadDesktop1 from "../../assets/pictures/hobbies/wine-road-1-370-min.jpg";
import wineRoadPhone2 from "../../assets/pictures/hobbies/wine-road-2-270-min.jpg";
import wineRoadDesktop2 from "../../assets/pictures/hobbies/wine-road-2-370-min.jpg";

export const bike = (nbr) => {
    if (nbr === 1) {
        return choosePicture(bikeDesktop1, bikePhone1);
    } else {
        return choosePicture(bikeDesktop2, bikePhone2);
    }
};
export const castle = (nbr) => {
    if (nbr === 1) {
        return choosePicture(castleDesktop1, castlePhone1);
    } else {
        return choosePicture(castleDesktop2, castlePhone2);
    }
};
export const cave = () => {
    return choosePicture(caveDesktop, cavePhone);
};
export const climb = (nbr) => {
    if (nbr === 1) {
        return choosePicture(climbDesktop1, climbPhone1);
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
export const horse = (nbr) => {
    if (nbr === 1) {
        return choosePicture(horseDesktop1, horsePhone1);
    } else if (nbr === 2) {
        return choosePicture(horseDesktop2, horsePhone2);
    } else {
        return false;
    }
};
export const pool = () => {
    return choosePicture(poolDesktop, poolPhone);
};
export const waterway = (nbr) => {
    if (nbr === 1) {
        return choosePicture(waterwayDesktop1, waterwayPhone1);
    } else if (nbr === 2) {
        return choosePicture(waterwayDesktop2, waterwayPhone2);
    } else {
        return false;
    }
};
export const wineRoad = (nbr) => {
    if (nbr === 1) {
        return choosePicture(wineRoadDesktop1, wineRoadPhone1);
    } else if (nbr === 2) {
        return choosePicture(wineRoadDesktop2, wineRoadPhone2);
    } else {
        return false;
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

export const food = () => {
    let tabGalleryDesktop = [];
    let tabGalleryPhone = [];

    tabGalleryDesktop = tabGalleryDesktop.concat([
        foodDesktop1,
        foodDesktop2,
        foodDesktop3,
    ])
    tabGalleryPhone = tabGalleryPhone.concat([
        foodPhone1,
        foodPhone2,
        foodPhone3,
    ])
    return choosePicture(tabGalleryDesktop, tabGalleryPhone);
};