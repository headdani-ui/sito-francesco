import React from 'react';
import { Link } from 'react-router-dom';

const Collection: React.FC = () => {
  const destinations = [
    { name: 'Islas Maldivas', region: 'Océano Índico', detail: 'Santuarios sobre el agua con privacidad absoluta.' },
    { name: 'Seychelles', region: 'África Oriental', detail: 'Villas exclusivas entre rocas de granito y selva tropical.' },
    { name: 'Caribe', region: 'Antillas', detail: 'Retiros paradisíacos en las playas más blancas del mundo.' },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row bg-background-dark text-white">
      {/* Left Column: Architectural Imagery */}
      <div className="relative w-full lg:w-[50%] h-[50vh] lg:h-screen overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out group-hover:scale-105"
          style={{
            backgroundImage: "url('/assets/maldives.png')",
            filter: "contrast(110%) brightness(90%)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background-dark/50"></div>

        {/* Signature */}
        <div className="absolute bottom-8 left-6 lg:bottom-16 lg:left-16 z-10">
          <span className="font-signature text-5xl lg:text-6xl text-primary opacity-80 drop-shadow-md inline-block animate-signature py-4">
            Francesco Rosso
          </span>
          <p className="text-[#cbb790] text-[10px] tracking-[0.2em] uppercase font-sans opacity-60 pl-1">Ultra-Luxury Villa Consultant</p>
        </div>
      </div>

      {/* Right Column: List of Properties */}
      <div className="relative w-full lg:w-[50%] bg-background-dark flex flex-col justify-center px-8 py-16 lg:px-24 lg:py-12 z-10 border-l border-[#2a2a2a]">
        <div className="max-w-lg mx-auto lg:mx-0 w-full flex flex-col gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-8 bg-primary"></div>
              <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Selección Privada</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-light italic leading-[1] tracking-tight text-white">
              Propiedades <br />
              <span className="font-normal not-italic text-gradient-gold">con Alma.</span>
            </h1>
            <p className="text-[#888] font-sans text-sm tracking-wide mt-4 max-w-sm leading-relaxed">
              Una antología de residencias excepcionales donde el diseño arquitectónico se encuentra con la belleza natural más sublime.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-[#333] border-t border-[#333] border-b">
            {destinations.map((dest) => (
              <a key={dest.name} className="group block py-6 transition-all duration-400 hover:pl-4" href="#">
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl lg:text-3xl font-display font-light text-white group-hover:text-primary transition-colors">{dest.name}</span>
                  <span className="text-xs text-[#555] font-sans uppercase tracking-widest group-hover:text-[#cbb790] transition-colors">{dest.region}</span>
                </div>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                  <p className="pt-2 text-sm text-[#888] font-light italic">{dest.detail}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <Link to="/contacto" className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-sm border border-[#cbb790]/30 hover:border-primary transition-colors duration-500 w-full flex items-center justify-center sm:justify-start gap-4">
              <div className="absolute inset-0 w-0 bg-[#cbb790]/5 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span className="relative text-[#f0ead6] group-hover:text-primary font-display italic text-xl tracking-wide">
                Contáctame
              </span>
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-2 font-light not-italic text-primary">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 lg:right-16 text-[#444] text-[10px] font-sans tracking-[0.2em] uppercase hidden lg:block">
          Colección 2024 — Edición Limitada
        </div>
      </div>
    </div>
  );
};

export default Collection;
