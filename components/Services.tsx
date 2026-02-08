
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group relative bg-background-light p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
    <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h4 className="text-xl font-bold mb-3 text-slate-900">{title}</h4>
    <p className="text-slate-600 mb-6 leading-relaxed">
      {description}
    </p>
    <a className="inline-flex items-center text-primary font-bold text-sm group/link" href="#">
      Saber más
      <span className="material-symbols-outlined ml-1 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
    </a>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: 'psychology_alt',
      title: 'Asesorías',
      description: 'Guía experta en lactancia materna, alimentación complementaria BLW y monitoreo de hitos del desarrollo psicomotor.'
    },
    {
      icon: 'home_health',
      title: 'Consultas Domiciliarias',
      description: 'Evita traslados y salas de espera. Atención médica profesional en la seguridad y tranquilidad de tu propio hogar.'
    },
    {
      icon: 'devices',
      title: 'Consultas Virtuales',
      description: 'Telemedicina inmediata para resolver dudas rápidas, lectura de exámenes y seguimiento médico desde cualquier lugar.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">¿Cómo podemos ayudarte?</h2>
          <h3 className="text-3xl font-black text-slate-900 sm:text-5xl">Nuestros Servicios</h3>
          <p className="text-slate-600 text-lg">
            Ofrecemos diferentes modalidades de atención adaptadas a las necesidades reales de tu familia y el bienestar de tus hijos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
