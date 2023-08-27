import { useEffect, useState } from "react";
import { getLocationDatas, getPicturesHome, getPicturesLocationHome, toArray, picturesToArray } from './GetDatas';
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
        const getPicturesHome = axios.get('http://localhost/alestdelagrosne.admin/front/homepage');
        const getPicturesLocationHome = axios.get('http://localhost/alestdelagrosne.admin/front/locationhome');
        const getLocations = axios.get('http://localhost/alestdelagrosne.admin/front/locations');
        const getReservations = axios.get('http://localhost/alestdelagrosne.admin/front/reservation');
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


