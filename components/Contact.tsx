import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Siap untuk memulai proyek Anda? Jangan ragu untuk menghubungi tim kami untuk konsultasi gratis.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 text-center">
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <MapPin className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Alamat</h3>
              <p className="text-gray-600 max-w-xs">
                Jl. Jenderal Sudirman No. 123<br />Jakarta, Indonesia
              </p>
            </div>

            <div className="w-full md:w-px h-px md:h-24 bg-gray-200"></div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">
                info@namaperusahaan.com
              </p>
            </div>

            <div className="w-full md:w-px h-px md:h-24 bg-gray-200"></div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Phone className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Telepon</h3>
              <p className="text-gray-600">
                (021) 1234 5678
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;