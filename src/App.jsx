import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Agency } from './pages/Agency';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Set timeout ensures the scroll happens right after the new page renders
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="l-agence" element={<Agency />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mentions-legales" element={<Legal />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
