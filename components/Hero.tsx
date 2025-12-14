import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1500/700?grayscale&blur=2')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          SOLUSI DIGITAL TERBAIK<br />UNTUK ANDA
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Kami adalah mitra terpercaya Anda dalam mewujudkan inovasi teknologi dan mencapai target bisnis.
        </p>
        <a 
          href="#services" 
          className="inline-block bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
        >
          Lihat Layanan Kami
        </a>
      </div>
    </section>
  );
};

export default Hero;