import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getLocationDatas } from './components/utils/GetDatas';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <div id="backTop-anchor"></div>
      <Header locationsDatas={getLocationDatas()} />
      <BackTop />
      <Routes>
        <Route exact path='/'
          element={<Home locationsDatas={getLocationDatas()} />}
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
          element={<InProgress locationsDatas={getLocationDatas()} />}
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
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);


