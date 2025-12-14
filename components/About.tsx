import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400" 
              alt="Tim Kami" 
              className="w-full h-auto rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Siapa Kami?
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Didirikan sejak 20XX, NamaPerusahaan telah berkomitmen untuk memberikan layanan teknologi yang transformatif. Kami didukung oleh tim ahli yang berdedikasi tinggi dan berpengalaman luas di berbagai industri.
              </p>
              <p>
                Visi kami adalah menjadi perusahaan teknologi terkemuka yang selalu mengedepankan kualitas dan kepuasan pelanggan. Kami percaya bahwa teknologi harus menjadi enabler, bukan hambatan.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;