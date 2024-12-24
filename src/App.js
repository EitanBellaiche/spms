import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SearchParking from './SearchParking';

const App = () => {
  return (
    <Router basename="/spms">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-parking" element={<SearchParking />} />
      </Routes>
    </Router>
  );
};

export default App;
