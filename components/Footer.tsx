import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-0 text-sm md:text-base opacity-80">
          &copy; {new Date().getFullYear()} NamaPerusahaan. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;