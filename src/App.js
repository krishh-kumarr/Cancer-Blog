import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import CaseStudies from './pages/CaseStudies';
import DailyUpdates from './pages/DailyUpdates';
import Solutions from './pages/Solutions';
import TrialMethods from './pages/TrialMethods';
import './App.css'; // Optional: For global styling

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/daily-updates" element={<DailyUpdates />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/trial-methods" element={<TrialMethods />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
