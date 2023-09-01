import moment from "moment/moment";

export function formatEvents(events) {
    moment.locale('fr');
    events.sort((a, b) => {  // on converti les dates du format texte au format de date exploitable
        let aH = moment(a.startDate);
        let bH = moment(b.startDate);

        if (aH.valueOf() > bH.valueOf()) return -1; // on les compare pour remettre le tableau dans l'ordre souhaité
        if (aH.valueOf() < bH.valueOf()) return 1;
        return 0;
    });

    return events;
};

