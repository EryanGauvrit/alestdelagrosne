import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { toArray, picturesToArray } from './app/DatasFormating';
import DataDisplay from './app/DataDisplay';
import './style/normalize.css';
import './style/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import LocationTemplate from './pages/LocationTemplate';
import BackTop from './components/BackTop';
import Footer from './components/Footer';
import ErrorComp from './components/ErrorComp';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import Prices from './pages/Prices';
import LocationHome from './pages/LocationHome';
import Services from './pages/Services';
import Hobbies from './pages/Hobbies';

function App() {

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [picturesHomeData, setPicturesHomeData] = useState([
    {
      "size": "desktop",
      "pictures": []
    },
    {
      "size": "smartphone",
      "pictures": []
    }
  ]);
  const [pictureLocationHomeDatas, setPictureLocationHomeDatas] = useState([
    {
      "size": "desktop",
      "pictures": []
    },
    {
      "size": "smartphone",
      "pictures": []
    }
  ]);
  const [locationsDatas, setLocationsDatas] = useState([]);
  const [reservationsDatas, setReservationsDatas] = useState([]);
  const [servicesDatas, setServicesDatas] = useState([]);
  const [eventsDatas, setEventsDatas] = useState([]);

  const handlePicturesHomeChange = (picturesHomeData) => {
    const pictures = picturesToArray(picturesHomeData)
    setPicturesHomeData(pictures);
  };
  const handlePicturesLocationHomeChange = (pictureLocationHomeDatas) => {
    const pictures = picturesToArray(pictureLocationHomeDatas)
    setPictureLocationHomeDatas(pictures);
  };
  const handleLocationsChange = (locationsDatas) => {
    const locations = toArray(locationsDatas);
    setLocationsDatas(locations);
  };
  const handleReservationsChange = (reservationsDatas) => {
    const reservations = toArray(reservationsDatas);
    setReservationsDatas(reservations);
  };
  const handleServicesChange = (servicesDatas) => {
    const services = toArray(servicesDatas);
    setServicesDatas(services);
  };
  const handleEventsChange = (eventsDatas) => {
    const events = toArray(eventsDatas);
    setEventsDatas(events);
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);


  return (

    <React.Fragment>
      <DataDisplay
        onPicturesHomeChange={handlePicturesHomeChange}
        onPicturesLocationHomeChange={handlePicturesLocationHomeChange}
        onLocationsChange={handleLocationsChange}
        onReservationsChange={handleReservationsChange}
        onServicesChange={handleServicesChange}
        onEventsChange={handleEventsChange}
      />
      <div id="backTop-anchor"></div>
      <Header locationsDatas={locationsDatas} currentPage={currentPage} />
      <BackTop currentPage={currentPage} />
      <Routes>
        <Route exact path='/'
          element={<Home locationsDatas={locationsDatas} picturesDatas={picturesHomeData} eventsDatas={eventsDatas} />}
        />
        {/* <Route exact path='/test'
          element={<DataDisplay onPicturesHomeChange={handlePicturesHomeChange} />}
        /> */}
        <Route exact path='/location'
          element={<LocationHome locationsDatas={locationsDatas} picturesDatas={pictureLocationHomeDatas} />}
        />
        <Route exact path='/location/:id'
          element={<LocationTemplate locationsDatas={locationsDatas} />}
        />
        <Route exact path='/services'
          element={<Services servicesDatas={servicesDatas} />}
        />
        <Route exact path='/hobbies'
          element={<Hobbies events={eventsDatas} />}
        />
        <Route exact path='/prices'
          element={<Prices locationsDatas={locationsDatas} reservations={reservationsDatas} />}
        />
        <Route exact path='/contact'
          element={<Contact />}
        />
        <Route exact path='/mentions'
          element={<Mentions />}
        />
        <Route exact path='*'
          element={<ErrorComp />}
        />
      </Routes>
      <Footer currentPage={currentPage} />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);


