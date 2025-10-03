import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function UIUX() {
  return (
    <>
      <Navbar />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-extrabold mb-4 text-red-500">Diseño UI/UX personalizado</h1>
        <p className="text-lg text-gray-700 mb-6">Creo interfaces modernas, intuitivas y visualmente impactantes que conectan con tu audiencia. Diseño centrado en el usuario y adaptado a tu marca.</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Diseño visual y de interacción</li>
          <li>Guías de estilo</li>
          <li>Pruebas de usabilidad</li>
          <li>Optimización de experiencia</li>
        </ul>
        <a href="/" className="border-2 border-black rounded px-4 py-2 font-bold hover:bg-black hover:text-white transition">Volver</a>
      </section>
      <Footer />
    </>
  );
}
