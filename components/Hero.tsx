
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <span className="material-symbols-outlined text-sm mr-2">verified</span>
              Atención con Calidad
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl leading-[1.1]">
              Cuidado experto y <span className="text-primary">amoroso</span> para el crecimiento de tus hijos
            </h1>
            <p className="text-lg leading-8 text-slate-600 max-w-2xl">
              Pediatría integral con atención personalizada en consultorio, a domicilio o desde la comodidad de tu hogar. Porque la salud de tus pequeños no puede esperar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-slate-900 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                Agendar Cita Ahora
              </button>
              <button className="flex items-center justify-center rounded-xl border-2 border-slate-200 px-8 py-4 text-base font-bold hover:bg-slate-50 transition-all">
                Ver Servicios
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-8 rounded-full bg-slate-200 ring-2 ring-white overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p>Más de 500+ familias confían en nosotros</p>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-emerald-400 opacity-20 blur group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFBQNUvOqBWslMMMWsFblWfAC38k3-Iyi2-rK8dR3exWSSZx-DXFCq-CoD3vidFkpynjUqn1IZvna1GpTOVd1WLCUToiIGi8vJiBAKZ4JYUWhZ06xzyuDjhhzxh6MTyPQamiSwyPNYBJXcnkHCxgLOfZq3ljoqqmw04cC_qqolPRVA2ru9j0DwU2iSkxbKVpWyg5xLuVJ-_29QTe-bH3Qz3PQ-BjLZqw-WXi9onm92R2QGx8WYunzOr_TGzoi1ntyUDE0ykAmv6wO1" 
                  alt="Doctor con niño"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100">
                <div className="bg-blue-500/10 text-blue-500 p-2 rounded-lg">
                  <span className="material-symbols-outlined">video_call</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Próxima Consulta</p>
                  <p className="text-sm font-bold text-slate-900">Mañana, 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
