import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { getLocationDatas, getPicturesHome } from './components/utils/GetDatas';
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

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (

    <React.Fragment>
      <div id="backTop-anchor"></div>
      <Header locationsDatas={getLocationDatas()} currentPage={currentPage} />
      <BackTop currentPage={currentPage} />
      <Routes>
        <Route exact path='/'
          element={<Home locationsDatas={getLocationDatas()} picturesDatas={getPicturesHome()} />}
        />
        <Route exact path='/location'
          element={<LocationHome locationsDatas={getLocationDatas()} picturesDatas={getPicturesHome()} />}
        />
        <Route exact path='/location/:id'
          element={<LocationTemplate locationsDatas={getLocationDatas()} />}
        />
        <Route exact path='/services'
          element={<InProgress />}
        />
        <Route exact path='/hobbies'
          element={<InProgress />}
        />
        <Route exact path='/prices'
          element={<Prices locationsDatas={getLocationDatas()} />}
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


