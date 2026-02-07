
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Mi Historia', path: '/historia' },
    { name: 'Colección', path: '/coleccion' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isLightPage = location.pathname === '/historia';

  return (
    <nav className={`fixed top-0 right-0 z-50 p-6 lg:p-10 flex items-center justify-end w-full lg:w-auto pointer-events-none`}>
      <div className={`hidden lg:flex pointer-events-auto items-center gap-8 mr-8 text-sm font-sans tracking-widest uppercase ${isLightPage ? 'text-charcoal' : 'text-[#cbb790]'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`relative group transition-colors hover:text-primary ${location.pathname === link.path ? (isLightPage ? 'text-ink font-bold' : 'text-white font-bold') : ''}`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group flex lg:hidden items-center gap-3 bg-background-dark/80 backdrop-blur-md border border-[#333] hover:border-primary/50 text-white px-5 py-3 rounded-full transition-all duration-300"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#cbb790] group-hover:text-primary transition-colors">Menú</span>
        <span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background-black pointer-events-auto flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display italic text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
