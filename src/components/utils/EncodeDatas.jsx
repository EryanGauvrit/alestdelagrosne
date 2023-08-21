

export function encodeData(data) {
    // Par exemple, encodage de toutes les chaînes de caractères dans un objet de données
    const encodedData = {};
    for (const key in data) {
        if (typeof data[key] === 'string') {
            encodedData[key] = encodeURIComponent(data[key]);
        } else {
            encodedData[key] = data[key];
        }
    }
    return encodedData;
}

