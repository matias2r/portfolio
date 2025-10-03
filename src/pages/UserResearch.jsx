import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function UserResearch() {
  return (
    <>
      <Navbar />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-extrabold mb-4 text-yellow-500">Investigación de usuarios</h1>
        <p className="text-lg text-gray-700 mb-6">Descubro lo que tus clientes realmente necesitan para crear soluciones efectivas y atractivas. Analizo comportamientos, necesidades y motivaciones para que tu web convierta mejor y conecte con tu público objetivo.</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Entrevistas y encuestas</li>
          <li>Mapas de empatía</li>
          <li>Definición de buyer persona</li>
          <li>Análisis de competencia</li>
        </ul>
        <a href="/" className="border-2 border-black rounded px-4 py-2 font-bold hover:bg-black hover:text-white transition">Volver</a>
      </section>
      <Footer />
    </>
  );
}
