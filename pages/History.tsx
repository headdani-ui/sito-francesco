
import React from 'react';

const History: React.FC = () => {
  return (
    <div className="bg-cream text-ink font-display overflow-x-hidden">
      {/* Header with image */}
      <header className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Francesco Rosso Portrait"
            className="w-full h-full object-cover opacity-90 grayscale brightness-110 contrast-110"
            src="/assets/profile.jpg"
          />
          <div className="absolute inset-0 bg-cream/15 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
          <span className="block text-xs font-body tracking-[0.3em] uppercase mb-6 text-white drop-shadow-md">Francesco Rosso</span>
          <h1 className="text-6xl md:text-8xl text-white font-light italic tracking-tight mb-6 drop-shadow-lg">
            La Filosofía del Detalle
          </h1>
          <div className="w-24 h-[1px] bg-white/70 mx-auto mt-8"></div>
        </div>
      </header>

      <main className="relative bg-cream">
        {/* Philosophy Section */}
        <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] text-primary/10 font-serif italic select-none pointer-events-none opacity-20">
            “
          </div>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="text-3xl font-serif italic text-charcoal mb-4">Visión de Hospitalidad</h2>
              <div className="w-12 h-[1px] bg-primary mb-6"></div>
              <p className="font-body text-xs leading-relaxed text-gray-500 uppercase tracking-widest">
                Más de 25 años<br />curando experiencias globales
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="prose prose-lg">
                <p className="text-xl md:text-2xl leading-relaxed text-justify text-gray-800 font-light italic">
                  <span className="float-left text-6xl leading-[0.8] pr-2 pt-1 font-serif italic text-primary">C</span>on más de 25 años en la industria del turismo y una década dedicada exclusivamente al alquiler vacacional de ultra-lujo, mi trayectoria es un viaje de búsqueda constante de la excelencia. Haber recorrido más de 50 países me ha permitido entender que el verdadero lujo reside en la autenticidad y el servicio impecable.
                </p>
                <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed text-justify">
                  Desde mis inicios en la hotelería de 5 estrellas en Londres hasta la fundación de Luxury Villas Selection, he inspeccionado personalmente cientos de propiedades en Italia, Francia y España. Mi compromiso es garantizar que cada villa no sea solo un espacio, sino un refugio donde cada detalle respeta la historia del lugar y la exigencia del huésped.
                </p>
                <div className="mt-12 flex justify-end">
                  <div className="text-right">
                    <span className="font-signature text-5xl text-primary block mb-[-10px] animate-signature py-2">
                      Francesco Rosso
                    </span>
                    <span className="block text-xs font-body text-gray-400 mt-2 uppercase tracking-widest">Ultra-Luxury Villa Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-[#ebe8e1] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-3">Trayectoria</span>
              <h2 className="text-4xl md:text-5xl font-serif text-ink italic">Hitos de una Carrera Global</h2>
            </div>

            <div className="relative py-10">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>

              {/* late 90s Item */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-24 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <span className="block text-6xl font-serif text-primary/30 group-hover:text-primary transition-colors duration-500 mb-2">1990s</span>
                  <h3 className="text-2xl font-display text-ink mb-2">Inicios Internacionales</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed max-w-xs md:ml-auto">
                    Comienzo en Irlanda trabajando con marcas líderes como Hertz y Alitalia, forjando una base sólida en servicios globales.
                  </p>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cream border-2 border-primary rounded-full z-10 hidden md:block"></div>
                <div className="md:pl-12 order-1 md:order-2">
                  <span className="inline-block px-3 py-1 border border-primary/30 text-primary text-[10px] uppercase tracking-widest rounded-full mb-4">Europa</span>
                </div>
              </div>

              {/* 2000 Item */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-24 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <span className="inline-block px-3 py-1 border border-gray-400 text-gray-600 text-[10px] uppercase tracking-widest rounded-full mb-4 md:mb-0">Hospitalidad 5*</span>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-ink border-2 border-ink rounded-full z-10 hidden md:block"></div>
                <div className="md:pl-12 order-1 md:order-2">
                  <span className="block text-6xl font-serif text-primary/30 group-hover:text-primary transition-colors duration-500 mb-2">2000</span>
                  <h3 className="text-2xl font-display text-ink mb-2">The Franklin Hotel, Londres</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed max-w-xs">
                    Servicios de conserjería de élite en uno de los Small Luxury Hotels del mundo, perfeccionando el arte del servicio personalizado.
                  </p>
                </div>
              </div>

              {/* 2013 Item */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-24 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <span className="block text-6xl font-serif text-primary/30 group-hover:text-primary transition-colors duration-500 mb-2">2013</span>
                  <h3 className="text-2xl font-display text-ink mb-2">Fundación Your Villa Canaria</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed max-w-xs md:ml-auto">
                    Emprendimiento especializado en alquileres premium en las Islas Canarias, consolidando una red operativa de alto nivel.
                  </p>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cream border-2 border-primary rounded-full z-10 hidden md:block"></div>
                <div className="md:pl-12 order-1 md:order-2">
                  <span className="inline-block px-3 py-1 border border-primary/30 text-primary text-[10px] uppercase tracking-widest rounded-full mb-4">Emprendimiento</span>
                </div>
              </div>

              {/* Today Item */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center group">
                <div className="md:text-right md:pr-12 order-2 md:order-1">
                  <span className="inline-block px-3 py-1 bg-ink text-white text-[10px] uppercase tracking-widest rounded-full mb-4 md:mb-0">Actualidad</span>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-primary rounded-full z-10 hidden md:block shadow-[0_0_15px_rgba(176,141,85,0.5)]"></div>
                <div className="md:pl-12 order-1 md:order-2">
                  <span className="block text-6xl font-serif text-primary/30 group-hover:text-primary transition-colors duration-500 mb-2">Presente</span>
                  <h3 className="text-2xl font-display text-ink mb-2">Luxury Villas Selection</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed max-w-xs">
                    Consultoría estratégica y selección exclusiva de propiedades ultra-luxury, inspeccionadas personalmente por todo el Mediterráneo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-24 px-6 bg-ink text-cream relative">
          <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-4xl font-serif italic text-primary mb-4">Conexión Global</h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed mb-8">
                Habiendo visitado más de 50 países, la comunicación fluida y la comprensión cultural son los pilares de mi consultoría.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-5 gap-6 w-full">
              {['IT', 'EN', 'ES', 'FR', 'PT'].map((lang, idx) => (
                <div
                  key={lang}
                  className={`aspect-square border flex flex-col items-center justify-center transition-all duration-300 group cursor-default rounded-sm
                    ${idx === 2 ? 'bg-primary/20 border-primary/40' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                >
                  <span className={`text-3xl font-serif italic transition-transform group-hover:scale-110 ${idx === 2 ? 'text-white' : 'text-primary'}`}>{lang}</span>
                  <span className={`text-[10px] uppercase tracking-widest mt-2 ${idx === 2 ? 'text-primary' : 'text-gray-400 group-hover:text-white'}`}>
                    {['Italiano', 'English', 'Español', 'Français', 'Português'][idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-cream py-12 border-t border-ink/5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-gray-400 font-body uppercase tracking-wider">
              © 2024 Francesco Rosso - Luxury Villa Consultant.
            </div>
            <div className="flex gap-6">
              <a className="text-ink hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
              <a className="text-ink hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">mail</span></a>
              <a className="text-ink hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">call</span></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default History;
