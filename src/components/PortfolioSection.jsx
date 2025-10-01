import React from 'react';
import PortfolioCard from './PortfolioCard.jsx';

export default function PortfolioSection() {
  return (
    <section className="bg-[#f8f6f0] py-16" id="portfolio">
      <h2 className="text-4xl font-extrabold text-center mb-12">Proyectos <span className="text-yellow-600 underline">Trabajados</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
  <PortfolioCard logo="/logolili.png" image="/liliappchile.png" title="Start-Up LiliApp Chile · Mobile App" desc="UI Design · Mobile App" url="https://play.google.com/store/apps/details?id=com.narustudio.liliapp&pli=1"/>
  <PortfolioCard logo="/logopasteleria.avif" image="/ecommercepasteleria.png" title="E-commerce Pastelería" desc="UI design · Branding · Desarrollo web" dev={true}/>
  <PortfolioCard logo="/logomyg.png" image="/mygweb.png" title="Constructora MyG" desc="UI design · User research · Webflow development" url="https://constructoramyg.cl"/>
  <PortfolioCard logo="/logopasteleria.avif" image="/crmpasteleria.png" title="CRM Pastelería" desc="UI/UX · Desarrollo web · Optimización" dev={true}/>
      </div>
    </section>
  );
}
