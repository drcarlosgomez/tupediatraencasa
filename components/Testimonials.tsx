
import React from 'react';

interface TestimonialCardProps {
  stars: number;
  text: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ stars, text, name, role }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
    <div>
      <div className="flex text-primary mb-4">
        {[...Array(stars)].map((_, i) => (
          <span key={i} className="material-symbols-outlined star-filled">star</span>
        ))}
      </div>
      <p className="text-slate-600 italic mb-8">
        "{text}"
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden ring-2 ring-primary/20">
        <img src={`https://picsum.photos/seed/${name}/100/100`} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h5 className="font-bold text-slate-900">{name}</h5>
        <p className="text-xs text-slate-500 uppercase tracking-wide">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      stars: 5,
      text: "La atención a domicilio fue increíble. El doctor fue súper paciente con mi hijo y nos explicó todo con mucha claridad. ¡Muy recomendado!",
      name: "María González",
      role: "Mamá de Sofía"
    },
    {
      stars: 5,
      text: "La asesoría en lactancia cambió nuestra vida. Teníamos muchas dudas y miedos, pero recibimos el apoyo humano que necesitábamos.",
      name: "Andrés Rivera",
      role: "Papá de Mateo"
    },
    {
      stars: 5,
      text: "Poder hacer consultas virtuales es una maravilla para nosotros que viajamos mucho. Rapidez y profesionalismo garantizado.",
      name: "Carla Méndez",
      role: "Mamá de Lucas"
    }
  ];

  return (
    <section className="py-24 bg-background-light" id="testimonios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Testimonios</h2>
          <h3 className="text-3xl font-black text-slate-900 sm:text-5xl">Lo que dicen los padres</h3>
          <p className="text-slate-600 text-lg">
            La confianza de las familias es nuestro mayor orgullo. Conoce las experiencias de quienes ya cuidan la salud de sus hijos con nosotros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
