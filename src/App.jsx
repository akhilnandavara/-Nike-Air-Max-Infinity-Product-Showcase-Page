import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import './App.css';
// Add this JavaScript code in your main JavaScript file (e.g., main.jsx or App.jsx)


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
