import { useEffect, useState } from "react";
import { getLocationDatas, getPicturesHome, getPicturesLocationHome, toArray, picturesToArray } from './DatasFormating';
import axios from "axios";
import { Component } from "react";


class DataDisplay extends Component {
    state = {
        picturesHome: [],
        picturesLocationHome: [],
        locations: [],
        reservations: [],
        events: null,
        services: null,
    }

    componentDidMount = () => {

        // const url = 'http://localhost/alestdelagrosne.admin/front/';
        const url = 'https://espace-administrateur.alestdelagrosne.com/front/';

        const getPicturesHome = axios.get(url + 'homepage');
        const getPicturesLocationHome = axios.get(url + 'locationhome');
        const getLocations = axios.get(url + 'locations');
        const getReservations = axios.get(url + 'reservation');
        Promise.all([getPicturesHome, getPicturesLocationHome, getLocations, getReservations])
            .then(([picturesHomeResponse, picturesLocationHomeResponse, locationsResponse, reservationsResponse]) => {
                const picturesHome = picturesHomeResponse.data;
                const picturesLocationHome = picturesLocationHomeResponse.data;
                const locations = locationsResponse.data;
                const reservations = reservationsResponse.data;

                this.setState({ picturesHome, picturesLocationHome, locations, reservations }, () => {
                    this.sendDataToParent();
                });
                // console.log("state : ", this.state.picturesHome)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    sendDataToParent = () => {

        const { onPicturesHomeChange, onPicturesLocationHomeChange, onLocationsChange, onReservationsChange } = this.props;
        const { picturesHome, picturesLocationHome, locations, reservations } = this.state;

        const pictureHomeDatas = picturesToArray(picturesHome);
        const pictureLocationHomeDatas = picturesToArray(picturesLocationHome);
        const locationsDatas = toArray(locations);
        const reservationsDatas = toArray(reservations);

        this.setState({ picturesHome: pictureHomeDatas })
        this.setState({ picturesLocationHome: pictureLocationHomeDatas })
        this.setState({ locations: locationsDatas })
        this.setState({ reservations: reservationsDatas })

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
    };
    render() {

        return null;
    }
};

export default DataDisplay;


