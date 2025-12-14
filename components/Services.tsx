import React from 'react';
import { Code2, Smartphone, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-primary mb-4" />,
      title: "Pengembangan Aplikasi Web",
      description: "Membangun website dan aplikasi web yang cepat, aman, dan skalabel menggunakan teknologi terbaru seperti React, Node.js, dan lainnya."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary mb-4" />,
      title: "Aplikasi Mobile",
      description: "Pengembangan aplikasi mobile (iOS & Android) yang user-friendly, responsif, dan memberikan pengalaman pengguna terbaik."
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary mb-4" />,
      title: "Konsultasi Cloud & IT",
      description: "Memberikan solusi arsitektur cloud dan migrasi infrastruktur untuk meningkatkan efisiensi operasional bisnis Anda."
    }
  ];

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami menawarkan berbagai layanan yang dirancang secara khusus untuk mempercepat pertumbuhan dan efisiensi bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-xl p-8 text-center transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;