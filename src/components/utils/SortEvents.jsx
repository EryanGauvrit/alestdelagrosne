import moment from "moment/moment";

export function formatEvents(events) {
    moment.locale('fr');
    events.sort((a, b) => {
        let aH = moment(a.startDate);
        let bH = moment(b.startDate);

        if (aH.valueOf() < bH.valueOf()) return -1;
        if (aH.valueOf() > bH.valueOf()) return 1;
        return 0;
    });

    return events;
};

