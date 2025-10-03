import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-500">Desarrollo web profesional</h1>
        <p className="text-lg text-gray-700 mb-6">Construyo sitios rápidos, seguros y adaptados a cualquier dispositivo, listos para crecer con tu negocio. Desarrollo optimizado para SEO y rendimiento.</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Webs responsivas</li>
          <li>Optimización SEO</li>
          <li>Integración de herramientas</li>
          <li>Escalabilidad y seguridad</li>
        </ul>
        <a href="/" className="border-2 border-black rounded px-4 py-2 font-bold hover:bg-black hover:text-white transition">Volver</a>
      </section>
      <Footer />
    </>
  );
}
