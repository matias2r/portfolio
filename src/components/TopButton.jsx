import React from 'react';

const TopButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-8 right-8 z-50 bg-black text-white rounded-full p-4 shadow-lg hover:bg-yellow-400 hover:text-black transition flex items-center gap-2 border-2 border-black"
    aria-label="Subir al inicio"
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 15l7-7 7 7"/>
    </svg>
  </button>
);

export default TopButton;
