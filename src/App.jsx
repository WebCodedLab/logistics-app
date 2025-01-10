import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setIsLoading(true); // Set loading state to true when route changes
    const delay = setTimeout(() => {
        setIsLoading(false); // Set loading state to false after a delay
    }, 500);
    return () => clearTimeout(delay)
  }, [location]);



  return (
    <div className="relative min-h-screen">
      {isLoading && <Loader />}
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;