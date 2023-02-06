import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Countries } from './components/allCountries/Countries';
import { CountryDetails } from './components/countryDetails/CountryDetails';
import { Nav } from './components/nav/Nav';


export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
};
