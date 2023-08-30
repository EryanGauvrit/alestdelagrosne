
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
export function toArray(datas) {
    const datasArray = Object.values(datas);
    return datasArray;
};

export function uniqueKey(key) {
    const randomNumber = Math.floor(Math.random() * 1000000) + 1;
    return `${key}${randomNumber}`;
}

