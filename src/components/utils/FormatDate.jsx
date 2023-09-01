

export function formatDate(date) {
    const dateParts = date.split('-');
    const day = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[0], 10);

    // Tableau de noms de mois
    const monthNames = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    // Obtenez le nom du mois en utilisant l'index (soustrayez 1 car les indices commencent à 0)
    const monthName = monthNames[month - 1];

    // Créez la date au format "jour mois année"
    return `${day} ${monthName} ${year}`;
};

