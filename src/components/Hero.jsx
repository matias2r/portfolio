import React from 'react';

export default function Hero({ webs, clientes }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-16 gap-8 md:gap-12 max-w-6xl w-full mx-auto mt-8 mb-8">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          ¡Hola!<span className="inline-block">👋</span> <span className="text-yellow-600">Soy  <span className="underline">Matías Espinoza</span></span>
        </h1>
        <p className="text-md md:text-md text-gray-700">Desarrollador web apasionado por crear experiencias digitales claras, útiles y con estilo. Ayudo a negocios y emprendedores a destacar en internet con soluciones creativas y funcionales.</p>
        <div className="flex gap-3 flex-wrap mt-2">
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">Diseño Web</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">UI/UX</span>
          <span className="bg-pink-400 text-black px-3 py-1 rounded-full text-sm font-bold">Diseño Grafico</span>
          <span className="bg-blue-400 text-black px-3 py-1 rounded-full text-sm font-bold">Desarrollo Web</span>
        </div>
        <div className='flex gap-4'>
          <a href="https://www.linkedin.com/in/matiasespinozamo/" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded-full p-2 bg-white hover:bg-blue-700 hover:text-white transition" title="LinkedIn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.75 16V10.75H6.25V19h3zm-1.5-9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10.25 9.25v-4.25c0-2.25-2.5-2.08-2.5 0V19h-3V10.75h3v1.13c.41-.75 1.5-1.13 2.5-1.13 2.5 0 2.5 1.75 2.5 4.25V19h-3z"/></svg>
          </a>
          <a href="https://github.com/matias2r" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded-full p-2 bg-white hover:bg-black hover:text-white transition" title="GitHub">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
          </a>
          <a href="mailto:matiasdev@gmail.com" className="border-2 border-black rounded-full p-2 bg-white hover:bg-red-600 hover:text-white transition" title="Email">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14zm0 2v.01l8 5.99 8-5.99V6H4zm16 2.24-7.19 5.39a2 2 0 0 1-2.62 0L4 8.24V18h16V8.24z"/></svg>
          </a>
        </div>
      </div>
      <img src="/character1.svg" alt="" className='svg hidden lg:block' draggable="false" onDragStart={e => e.preventDefault()} onContextMenu={e => e.preventDefault()} />
    </section>
  );
}
