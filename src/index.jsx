import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/normalize.css';
import './style/main.scss';
import Header from './components/Header';
import Error from './components/Error';
import InProgress from './components/InProgress';
import Home from './pages/Home';
import BackTop from './components/BackTop';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <div id="backTop-anchor"></div>
      <Header />
      <BackTop />
      <Routes>
        <Route exact path='/'
          element={<Home />}
        />
        <Route exact path='/location'
          element={<InProgress />}
        />
        <Route exact path='/services'
          element={<InProgress />}
        />
        <Route exact path='/hobbies'
          element={<InProgress />}
        />
        <Route exact path='/prices'
          element={<InProgress />}
        />
        <Route exact path='/contact'
          element={<InProgress />}
        />
        <Route exact path='/mentions'
          element={<InProgress />}
        />
        <Route exact path='*'
          element={<Error />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);


