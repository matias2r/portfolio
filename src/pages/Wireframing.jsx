import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Wireframing() {
  return (
    <>
      <Navbar />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-extrabold mb-4 text-purple-500">Wireframing y prototipos</h1>
        <p className="text-lg text-gray-700 mb-6">Diseño la estructura y experiencia de tu web antes de desarrollarla, asegurando claridad y funcionalidad. Prototipo ideas y flujos para validar antes de invertir en desarrollo.</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Wireframes interactivos</li>
          <li>Prototipos navegables</li>
          <li>Validación con usuarios</li>
          <li>Iteración rápida</li>
        </ul>
        <a href="/" className="border-2 border-black rounded px-4 py-2 font-bold hover:bg-black hover:text-white transition">Volver</a>
      </section>
      <Footer />
    </>
  );
}
