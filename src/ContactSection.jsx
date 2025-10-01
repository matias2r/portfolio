import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 border-t-4 border-black">
      <h2 className="text-3xl font-extrabold text-center mb-8">Contacto</h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="mb-6 text-lg text-gray-700">¿Listo para impulsar tu negocio? Escríbeme y te ayudo a crear tu web ideal.</p>
        <a href="mailto:matias@tucorreo.com" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition text-lg font-bold">Enviar Email</a>
      </div>
    </section>
  );
}
