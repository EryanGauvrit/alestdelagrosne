
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

