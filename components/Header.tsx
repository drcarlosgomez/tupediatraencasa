
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-auto" />
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Tu Pediatra en Casa</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Inicio</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Sobre Mí</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonios">Testimonios</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contacto</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-primary/90 transition-all shadow-sm">
              Agendar Cita
            </button>
            <button className="md:hidden text-slate-600">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
