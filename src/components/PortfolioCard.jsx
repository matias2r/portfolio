import React, { useState } from 'react';

export default function PortfolioCard(props) {
  const { logo, image, title, desc, dev = false, url = '#' } = props;
  const [hover, setHover] = useState(false);

  return (
    <div className="border-2 border-black rounded-xl bg-white p-4 flex flex-col relative">
      {dev && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black z-10">En desarrollo</span>
      )}
      <div className="relative w-full h-48">
        <img
          src={logo}
          alt="Logo"
          className={`absolute inset-0 w-full h-full object-contain bg-white border-b-2 border-black transition-opacity duration-700 ease-in-out ${hover ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={image}
          alt="Proyecto"
          className={`absolute inset-0 w-full h-full object-cover border-b-2 border-black transition-opacity duration-700 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className="absolute inset-0 w-full h-full cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{desc}</p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 self-end border border-black rounded p-2 bg-white hover:bg-black hover:text-white transition" title="Ver proyecto">
          <span className="sr-only">Ver proyecto</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M14 3h7v7"/>
            <path d="M5 19l16-16"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
