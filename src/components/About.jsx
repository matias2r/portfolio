import React from 'react';
// ...existing code...
import { useState } from 'react';

export default function About() {

    // Animación de conteo progresivo
      const [webs, setWebs] = useState(0);
      const [clientes, setClientes] = useState(0);
    
      React.useEffect(() => {
        let w = 0;
        let c = 0;
        const interval = setInterval(() => {
          if (w < 5) setWebs(++w);
          if (c < 5) setClientes(++c);
          if (w >= 5 && c >= 5) clearInterval(interval);
        }, 200);
        return () => clearInterval(interval);
      }, []);

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto w-full" id="about">
  <h2 className="text-3xl font-extrabold mb-2">Soluciones creativas para tu negocio <span className="text-2xl">😊</span></h2>
  <p className="mb-8 text-xl text-gray-700 font-semibold">Impulsa tu marca con diseño y tecnología</p>
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start w-full">
          <div className="md:col-span-1 flex flex-col gap-4 items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black pb-8 md:pb-0 md:pr-8">
            <div className="text-4xl font-extrabold">{webs}</div>
            <div className="text-gray-700 font-bold">Webs desarrolladas</div>
            <div className="text-4xl font-extrabold mt-6">{clientes}</div>
            <div className="text-gray-700 font-bold">Clientes satisfechos</div>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-4 border-black rounded-xl p-8 flex flex-col justify-between h-full shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-yellow-500 font-extrabold text-lg"><span>●</span> Investigación de usuarios</div>
              <div className="text-gray-700 text-base font-semibold">Descubro lo que tus clientes realmente necesitan para crear soluciones efectivas y atractivas.</div>
              </div>
            <div className="bg-white border-4 border-black rounded-xl p-8 flex flex-col justify-between h-full shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-purple-500 font-extrabold text-lg"><span>●</span> Wireframing y prototipos</div>
              <div className="text-gray-700 text-base font-semibold">Diseño la estructura y experiencia de tu web antes de desarrollarla, asegurando claridad y funcionalidad.</div>
              </div>
            <div className="bg-white border-4 border-black rounded-xl p-8 flex flex-col justify-between h-full shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-red-500 font-extrabold text-lg"><span>●</span> Diseño UI/UX personalizado</div>
              <div className="text-gray-700 text-base font-semibold">Creo interfaces modernas, intuitivas y visualmente impactantes que conectan con tu audiencia.</div>
              </div>
            <div className="bg-white border-4 border-black rounded-xl p-8 flex flex-col justify-between h-full shadow-lg hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-blue-500 font-extrabold text-lg"><span>●</span> Desarrollo web profesional</div>
              <div className="text-gray-700 text-base font-semibold">Construyo sitios rápidos, seguros y adaptados a cualquier dispositivo, listos para crecer con tu negocio.</div>            </div>
          </div>
        </div>
      </section>
    
  );
}
