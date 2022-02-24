import React from 'react';
import '../src/css/main.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
//ingebouwde ondersteuning links

import Header from './header/Header';
import Home from './home/Home.jsx';
import UI from './UI/UI.jsx';
import Art from './art/Art.jsx';
import Contact from './contact/Contact.jsx';

function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/UI' element={<UI />} />
        <Route path='/Art' element={<Art />} />
        <Route path='Contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
