import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { toArray, picturesToArray } from './app/DatasFormating';
import DataDisplay from './app/DataDisplay';
import './style/normalize.css';
import './style/main.scss';
import Header from './components/Header';
import InProgress from './components/InProgress';
import Home from './pages/Home';
import LocationTemplate from './pages/LocationTemplate';
import BackTop from './components/BackTop';
import Footer from './components/Footer';
import ErrorComp from './components/ErrorComp';
import Contact from './pages/Contact';
import Mentions from './pages/mentions';
import Prices from './pages/Prices';
import LocationHome from './pages/LocationHome';

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

  const handlePicturesHomeChange = (picturesHomeData) => {
    const pictures = picturesToArray(picturesHomeData)
    setPicturesHomeData(pictures);
    // console.log("in function : ", picturesHomeData);
  };
  const handlePicturesLocationHomeChange = (pictureLocationHomeDatas) => {
    const pictures = picturesToArray(pictureLocationHomeDatas)
    setPictureLocationHomeDatas(pictures);
    // console.log("in function : ", picturesHomeData);
  };
  const handleLocationsChange = (locationsDatas) => {
    const locations = toArray(locationsDatas);
    setLocationsDatas(locations);
    // console.log("in function : ", locations);
  };
  const handleReservationsChange = (reservationsDatas) => {
    const reservations = toArray(reservationsDatas);
    setReservationsDatas(reservations);
    // console.log("in function : ", locations);
  };

  // console.log("out function : ", locationsDatas);
  useEffect(() => {
    // handlePicturesHomeChange();
    setCurrentPage(location.pathname);
  }, [location]);


  return (

    <React.Fragment>
      <DataDisplay
        onPicturesHomeChange={handlePicturesHomeChange}
        onPicturesLocationHomeChange={handlePicturesLocationHomeChange}
        onLocationsChange={handleLocationsChange}
        onReservationsChange={handleReservationsChange}
      />
      <div id="backTop-anchor"></div>
      <Header locationsDatas={locationsDatas} currentPage={currentPage} />
      <BackTop currentPage={currentPage} />
      <Routes>
        <Route exact path='/'
          element={<Home locationsDatas={locationsDatas} picturesDatas={picturesHomeData} />}
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
          element={<InProgress />}
        />
        <Route exact path='/hobbies'
          element={<InProgress />}
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


