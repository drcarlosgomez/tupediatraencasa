
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-auto" />
              <h2 className="text-lg font-bold">Tu Pediatra en Casa</h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Dedicados al cuidado integral de la infancia con un enfoque humano y actualizado. Tu tranquilidad es nuestra prioridad.
            </p>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Inicio</a></li>
              <li><a className="hover:text-primary transition-colors" href="#servicios">Servicios</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Agendar Cita</a></li>
              <li><a className="hover:text-primary transition-colors" href="#testimonios">Testimonios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Servicios</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Control de Niño Sano</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Asesoría Lactancia</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Telemedicina</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Urgencias</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                <span>Valledupar, cesar </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">call</span>
                <span>+57 3145908687</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Tu Pediatra en Casa. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary" href="#">Política de Privacidad</a>
            <a className="hover:text-primary" href="#">Términos de Servicio</a>
            <a className="hover:text-primary" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
