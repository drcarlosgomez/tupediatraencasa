
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import EmergencyCTA from './components/EmergencyCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <EmergencyCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
