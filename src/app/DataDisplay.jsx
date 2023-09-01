import { toArray, picturesToArray } from './DatasFormating';
import axios from "axios";
import { Component } from "react";


class DataDisplay extends Component {
    state = {
        picturesHome: [],
        picturesLocationHome: [],
        locations: [],
        reservations: [],
        events: [],
        services: [],
    }

    componentDidMount = () => {

        // const url = 'http://localhost/alestdelagrosne.admin/front/';
        const url = 'https://espace-administrateur.alestdelagrosne.com/front/';

        const getPicturesHome = axios.get(url + 'homepage');
        const getPicturesLocationHome = axios.get(url + 'locationhome');
        const getLocations = axios.get(url + 'locations');
        const getReservations = axios.get(url + 'reservation');
        const getServices = axios.get(url + 'services');
        const getEvents = axios.get(url + 'events');
        Promise.all([getPicturesHome, getPicturesLocationHome, getLocations, getReservations, getServices, getEvents])
            .then(([picturesHomeResponse, picturesLocationHomeResponse, locationsResponse, reservationsResponse, servicesResponse, eventsResponse]) => {
                const picturesHome = picturesHomeResponse.data;
                const picturesLocationHome = picturesLocationHomeResponse.data;
                const locations = locationsResponse.data;
                const reservations = reservationsResponse.data;
                const services = servicesResponse.data;
                const events = eventsResponse.data;

                this.setState({ picturesHome, picturesLocationHome, locations, reservations, services, events }, () => {
                    this.sendDataToParent();
                });
                // console.log("state : ", this.state.picturesHome)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    sendDataToParent = () => {

        const { onPicturesHomeChange, onPicturesLocationHomeChange, onLocationsChange, onReservationsChange, onServicesChange, onEventsChange } = this.props;
        const { picturesHome, picturesLocationHome, locations, reservations, services, events } = this.state;

        const pictureHomeDatas = picturesToArray(picturesHome);
        const pictureLocationHomeDatas = picturesToArray(picturesLocationHome);
        const locationsDatas = toArray(locations);
        const reservationsDatas = toArray(reservations);
        const servicesDatas = toArray(services);
        const eventsDatas = toArray(events);

        this.setState({ picturesHome: pictureHomeDatas })
        this.setState({ picturesLocationHome: pictureLocationHomeDatas })
        this.setState({ locations: locationsDatas })
        this.setState({ reservations: reservationsDatas })
        this.setState({ services: servicesDatas })
        this.setState({ events: eventsDatas })

        if (onPicturesHomeChange) {
            onPicturesHomeChange(picturesHome);
        }
        if (onPicturesLocationHomeChange) {
            onPicturesLocationHomeChange(picturesLocationHome);
        }
        if (onLocationsChange) {
            onLocationsChange(locations);
        }
        if (onReservationsChange) {
            onReservationsChange(reservations);
        }
        if (onServicesChange) {
            onServicesChange(services);
        }
        if (onEventsChange) {
            onEventsChange(events);
        }
    };
    render() {

        return null;
    }
};

export default DataDisplay;


