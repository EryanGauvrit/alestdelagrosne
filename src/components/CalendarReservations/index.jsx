import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarReservations({ reservations }) {

    const icon = <i className="fa-solid fa-square"></i>;

    return (
        <div>
            <Calendar
                selectRange={false}
                select={false}
                value={new Date()}
                defaultView="month"
                tileClassName={({ date, view }) => {
                    if (view === 'month') {
                        const isReserved = () => {
                            let className = '';

                            reservations.some((reservation) => {
                                const startDate = reservation.start;
                                const endDate = reservation.end;

                                if (date.toDateString() === startDate.toDateString()) {
                                    className = 'start-date';
                                }

                                if (startDate <= date && date <= endDate) {
                                    if (date.toDateString() === startDate.toDateString()) {
                                        className = 'start-date';
                                    } else if (date.toDateString() === endDate.toDateString()) {
                                        className = 'end-date';
                                    } else {
                                        className = 'reserved';
                                    }
                                }
                                return className;
                            });

                            return className;
                        }
                        return isReserved();
                    }
                    return '';
                }}
            />
            <p className='calendar-quote'>{icon} Déjà réservé.</p>
        </div>
    )
};

export default CalendarReservations;