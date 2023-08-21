import { useEffect, useState } from "react";
import { getLocationDatas, getPicturesHome, getPicturesLocationHome, locationsToArray, picturesToArray } from './GetDatas';
import axios from "axios";
import { Component } from "react";


class DataDisplay extends Component {
    state = {
        picturesHome: [],
        picturesLocationHome: [],
        locations: [],
        reservation: null,
        events: null,
        services: null,
    }

    componentDidMount = () => {
        const getPicturesHome = axios.get('http://localhost/alestdelagrosne.admin/front/homepage');
        const getPicturesLocationHome = axios.get('http://localhost/alestdelagrosne.admin/front/locationhome')
        const getLocations = axios.get('http://localhost/alestdelagrosne.admin/front/locations')
        Promise.all([getPicturesHome, getPicturesLocationHome, getLocations])
            .then(([picturesHomeResponse, picturesLocationHomeResponse, locationsResponse]) => {
                const picturesHome = picturesHomeResponse.data;
                const picturesLocationHome = picturesLocationHomeResponse.data;
                const locations = locationsResponse.data;

                this.setState({ picturesHome, picturesLocationHome, locations }, () => {
                    this.sendDataToParent();
                });
                // console.log("state : ", this.state.picturesHome)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    sendDataToParent = () => {

        const { onPicturesHomeChange, onPicturesLocationHomeChange, onLocationsChange } = this.props;
        const { picturesHome, picturesLocationHome, locations } = this.state;

        const pictureHomeDatas = picturesToArray(picturesHome);
        const pictureLocationHomeDatas = picturesToArray(picturesLocationHome);
        const locationsDatas = locationsToArray(locations);

        this.setState({ picturesHome: pictureHomeDatas })
        this.setState({ picturesLocationHome: pictureLocationHomeDatas })
        this.setState({ locations: locationsDatas })

        if (onPicturesHomeChange) {
            onPicturesHomeChange(picturesHome);
        }
        if (onPicturesLocationHomeChange) {
            onPicturesLocationHomeChange(picturesLocationHome);
        }
        if (onLocationsChange) {
            onLocationsChange(locations);
        }
    };
    render() {

        return null;
    }
};

export default DataDisplay;


