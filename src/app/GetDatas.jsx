import locationsDatas from "../datas/LocationsDatas.json";
import picturesHome from "../datas/picturesGalleryHome.json";
import picturesLocationHome from "../datas/picturesGalleryLocationHome.json";
import axios from 'axios';

const API_BASE_URL = 'http://localhost/alestdelagrosne.admin/front';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getPicturesHome = () => {
    // try {
    return api.get("/homepage");
    // return response.data;
    // console.log(data);

    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
};
export function getLocationDatas() {
    return locationsDatas;
};
export function getPicturesLocationHome() {
    return picturesLocationHome;
};
export function picturesToArray(picturesDatas) {
    let pictureArray = [
        {
            "size": "desktop",
            "pictures": []
        },
        {
            "size": "smartphone",
            "pictures": []
        }
    ]
    picturesDatas.map((p) => {
        pictureArray[0].pictures.push(p.picturesDesktop)
        pictureArray[1].pictures.push(p.picturesPhone)
        return pictureArray;
    })

    return pictureArray;
};
export function toArray(locationsDatas) {
    const locationsArray = Object.values(locationsDatas);
    return locationsArray;
};

