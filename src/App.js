import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';
import CountryMap from './pages/CountryMap';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">🌎 Country Explorer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:abbr" element={<CountryDetails />} />
        <Route path="/map/:abbr" element={<CountryMap />} />
      </Routes>
    </>
  );
}
