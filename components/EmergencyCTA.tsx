
import React from 'react';

const EmergencyCTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 md:px-16 md:py-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 size-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-black md:text-4xl">¿Tienes una emergencia o duda rápida?</h2>
            <p className="text-slate-300 text-lg">
              No esperes más. Estamos disponibles para atender las consultas de tus pequeños de manera prioritaria y profesional.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-slate-900 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">
              <span className="material-symbols-outlined font-bold">chat</span>
              WhatsApp Prioritario
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
