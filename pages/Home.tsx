
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // L'immagine fornita dall'utente viene utilizzata con filtri per un look di lusso
  const userImageUrl = "https://lh3.googleusercontent.com/d/1_y-D4XyL_Z0q_Y4_Z0q_Y4_Z0q_Y4_Z0"; // Placeholder per l'immagine allegata, in produzione verrebbe caricata la risorsa specifica

  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row bg-background-dark">
      {/* Left Column: Image & Signature */}
      <div className="relative w-full lg:w-[55%] h-[60vh] lg:h-screen overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out group-hover:scale-105"
          style={{
            backgroundImage: "url('/assets/profile.jpg')",
            filter: "grayscale(100%) contrast(115%) brightness(95%)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background-dark"></div>

        {/* Signature & Title */}
        <div className="absolute bottom-10 left-6 lg:bottom-20 lg:left-20 z-10">
          <div>
            <span className="font-signature text-5xl lg:text-7xl text-primary opacity-90 drop-shadow-md inline-block animate-signature py-4">
              Francesco Rosso
            </span>
          </div>
          <p className="mt-[-10px] text-[#cbb790] text-xs tracking-[0.2em] uppercase font-sans opacity-80 pl-2">Ultra-Luxury Villa Consultant</p>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="relative w-full lg:w-[45%] bg-background-dark flex flex-col justify-center px-8 py-16 lg:px-20 lg:py-12 z-10 border-l border-[#333]">
        <div className="max-w-md mx-auto lg:mx-0 flex flex-col gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary text-sm font-bold tracking-[0.15em] uppercase">Est. 1999</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-light italic leading-[1.1] tracking-tight text-white">
              25 Años de Excelencia,<br />
              <span className="font-normal not-italic text-gradient-gold block mt-2">Una Vida Curando Experiencias.</span>
            </h1>
          </div>

          <div className="space-y-6 text-[#a3a3a3] font-display text-lg lg:text-xl leading-relaxed font-light">
            <p className="font-medium text-[#cbb790]">
              Especialista en el alquiler de villas de ultra-lujo y hospitalidad de élite.
            </p>
            <p>
              Donde la exclusividad se encuentra con el confort absoluto: curamos santuarios privados para quienes exigen lo extraordinario y saben que el verdadero lujo reside en los detalles que nadie más ve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-2">
            <Link to="/contacto" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded border border-[#493c22] hover:border-primary transition-colors duration-300">
              <div className="absolute inset-0 w-0 bg-primary/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white group-hover:text-primary font-medium tracking-wide flex items-center gap-2">
                Contáctame
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-6 left-8 lg:left-20 right-8 flex justify-between items-end text-[#555] text-xs font-sans tracking-widest uppercase">
          <div className="hidden lg:block">
            Canary Islands
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">mail</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
