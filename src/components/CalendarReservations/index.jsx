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
                        const isReserved = reservations.some((reservation) => {
                            return date >= reservation.start && date <= reservation.end;
                        });
                        return isReserved ? 'reserved' : '';
                    }
                    return '';
                }}
            />
            <p className='calendar-quote'>{icon} Déjà réservé.</p>
        </div>
    )
};

export default CalendarReservations;