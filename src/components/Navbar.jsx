import React from 'react';

const Navbar = () => (
  <header className="w-full px-4 md:px-8 py-6 border-b-4 border-black bg-white flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-20 shadow-lg">
    <div className="flex justify-center w-full md:w-auto mb-2 md:mb-0">
      <span className="border-2 border-black rounded px-3 py-1 font-bold tracking-wide bg-white text-lg">★ matiasespinoza.dev</span>
    </div>
    <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-base font-bold w-full md:w-auto">
      <a href="#about" className="hover:underline">Información //</a>
      <a href="#portfolio" className="text-yellow-600 underline">Portafolio</a>
    </nav>
  </header>
);

export default Navbar;
