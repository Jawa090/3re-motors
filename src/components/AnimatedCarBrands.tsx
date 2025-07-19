
import React from 'react';

// Real car brand SVG logo URLs (from SimpleIcons CDN)
const carBrands = [
  {
    name: 'BMW',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bmw.svg',
  },
  {
    name: 'Mercedes-Benz',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mercedes.svg',
  },
  {
    name: 'Toyota',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/toyota.svg',
  },
  {
    name: 'Honda',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/honda.svg',
  },
  {
    name: 'Ford',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ford.svg',
  },
  {
    name: 'Audi',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/audi.svg',
  },
  {
    name: 'Volkswagen',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/volkswagen.svg',
  },
  {
    name: 'Nissan',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nissan.svg',
  },
  {
    name: 'Hyundai',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hyundai.svg',
  },
  {
    name: 'Kia',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kia.svg',
  },
  {
    name: 'Mazda',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mazda.svg',
  },
  {
    name: 'Subaru',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/subaru.svg',
  },
];

const AnimatedCarBrands = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-14 border-t border-b border-gray-200 overflow-hidden">
      {/* Soft blurred background for depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-96 h-32 bg-gradient-to-r from-yellow-200 via-yellow-100 to-transparent rounded-full blur-2xl opacity-30"></div>
        <div className="absolute right-1/4 bottom-0 w-96 h-32 bg-gradient-to-l from-red-200 via-red-100 to-transparent rounded-full blur-2xl opacity-20"></div>
      </div>
      <div className="mb-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-lg">Trusted by Leading Brands</h2>
        <p className="text-gray-600 text-lg">We work with all major automotive manufacturers</p>
      </div>
      <div className="relative z-10">
        {/* First row - moving right */}
        <div className="flex animate-scroll-right space-x-10 md:space-x-16 mb-8">
          {[...carBrands, ...carBrands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-4 md:p-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-yellow-400 group-hover:bg-yellow-50/80 relative">
                <img
                  src={brand.logo}
                  alt={brand.name + ' logo'}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(8%) saturate(500%) hue-rotate(180deg) brightness(1.1)' }}
                />
                {/* Sparkle effect */}
                <span className="absolute -top-2 -right-2 animate-ping text-yellow-300 opacity-70">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="4" fill="currentColor" /></svg>
                </span>
              </div>
              <span className="mt-2 text-base md:text-lg font-semibold text-gray-700 group-hover:text-yellow-700 transition-colors duration-300 tracking-wide drop-shadow">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        {/* Second row - moving left */}
        <div className="flex animate-scroll-left space-x-10 md:space-x-16">
          {[...carBrands.slice().reverse(), ...carBrands.slice().reverse()].map((brand, index) => (
            <div
              key={`${brand.name}-reverse-${index}`}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-4 md:p-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-yellow-400 group-hover:bg-yellow-50/80 relative">
                <img
                  src={brand.logo}
                  alt={brand.name + ' logo'}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(8%) saturate(500%) hue-rotate(180deg) brightness(1.1)' }}
                />
                {/* Sparkle effect */}
                <span className="absolute -top-2 -right-2 animate-ping text-yellow-300 opacity-70">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="4" fill="currentColor" /></svg>
                </span>
              </div>
              <span className="mt-2 text-base md:text-lg font-semibold text-gray-700 group-hover:text-yellow-700 transition-colors duration-300 tracking-wide drop-shadow">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCarBrands;
