
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import History from './pages/History';
import Collection from './pages/Collection';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 z-[100] bg-grain pointer-events-none"></div>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/coleccion" element={<Collection />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
