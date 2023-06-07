import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/'
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


