
import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Phone, Mail, MapPin, Calendar, Gauge, Fuel, Settings, Shield, Award, Star, Check, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cars } from '../lib/cars';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const CarDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const fromInventoryPage = (location.state as any)?.fromInventoryPage as number | undefined;
  const car = cars.find(c => c.id === parseInt(id || '0'));
  if (!car) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-2xl text-red-600">Car not found.</div>;
  }

  // Use gallery for images
  const carImages = car.gallery;
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = React.useState(false);

  const openFullscreen = () => {
    setIsFullscreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      closeFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to={{ pathname: '/inventory', search: fromInventoryPage ? `?page=${fromInventoryPage}` : '' }}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Inventory
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="modern-card">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="modern-card">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4 animate-slide-in-left">
            <div 
              className="relative overflow-hidden rounded-3xl bg-white shadow-2xl modern-card flex items-center justify-center cursor-pointer group" 
              style={{minHeight: '400px', height: 'auto'}}
              onClick={openFullscreen}
            >
              <img 
                src={carImages[currentImageIndex]} 
                alt={car.name}
                className="max-h-[500px] w-auto h-auto object-contain mx-auto"
              />
              {/* Fullscreen icon overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 rounded-full p-3">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            {/* Horizontal scroller for images */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-2">
              {carImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-20 md:w-32 md:h-28 overflow-hidden rounded-xl transition-all duration-300 modern-card border-2 ${
                    currentImageIndex === index ? 'border-red-600 scale-105' : 'border-transparent hover:scale-105'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${car.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Information */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 modern-card">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 responsive-title">{car.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    <span className="responsive-text">{car.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">4.9</span>
                      <span className="text-gray-500 ml-1">(128 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                   {/* Price removed as requested */}
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-100">
                <div className="text-center bg-gray-50 rounded-2xl p-4 modern-card">
                  <Calendar className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{car.year}</p>
                  <p className="text-sm text-gray-500">Year</p>
                </div>
                <div className="text-center bg-gray-50 rounded-2xl p-4 modern-card">
                  <Gauge className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{car.mileage.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Miles</p>
                </div>
                <div className="text-center bg-gray-50 rounded-2xl p-4 modern-card">
                  <Fuel className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{car.fuel}</p>
                  <p className="text-sm text-gray-500">Fuel</p>
                </div>
                <div className="text-center bg-gray-50 rounded-2xl p-4 modern-card">
                  <Settings className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{car.transmission}</p>
                  <p className="text-sm text-gray-500">Trans</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-red-500 mr-2" />
                  Description
                </h3>
                <ul className="list-disc pl-6 text-gray-600 leading-relaxed responsive-text">
                  {car.description
                    .split(/\.|;|,/)
                    .map((item, idx) => item.trim())
                    .filter(item => item.length > 0)
                    .map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center">
                <a href="tel:03452221114" className="bg-red-600 hover:bg-red-700 text-lg py-4 px-8 rounded-2xl glow-button modern-card flex items-center justify-center font-bold text-white transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Dealer
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 modern-card animate-fade-in delay-500">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-2" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700 bg-gray-50 rounded-xl p-3 modern-card animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium responsive-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-6 md:p-8 modern-card animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            <Settings className="w-8 h-8 text-red-500 inline mr-3" />
            Technical Specifications
          </h3>
          <div className="responsive-grid gap-6">
            {Object.entries(car.specifications).map(([key, value], index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl modern-card animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="text-sm text-gray-500 mb-2 font-medium">{key}</p>
                <p className="text-lg font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle History & Documentation */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8 modern-card animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Shield className="w-8 h-8 text-red-500 mr-3" />
            Vehicle History & Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl modern-card">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Clean Title</h4>
              <p className="text-sm text-gray-600">No accidents or damage reported</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl modern-card">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Single Owner</h4>
              <p className="text-sm text-gray-600">Well-maintained by original owner</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl modern-card">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Service Records</h4>
              <p className="text-sm text-gray-600">Complete maintenance history available</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl modern-card">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certified</h4>
              <p className="text-sm text-gray-600">200-point inspection passed</p>
            </div>
          </div>
        </div>

        {/* Financing Options */}
        <div className="mt-12 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-2xl p-8 text-white modern-card animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Financing Made Easy</h3>
            <p className="text-red-100 text-lg">Get pre-approved in minutes with competitive rates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl modern-card">
              <div className="text-4xl font-bold mb-2">2.9%</div>
              <div className="text-red-100">Starting APR</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl modern-card">
              <div className="text-4xl font-bold mb-2">84</div>
              <div className="text-red-100">Max Months</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl modern-card">
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-red-100">Down Payment</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-2xl text-lg">
              Get Pre-Approved Now
            </Button>
          </div>
        </div>

        {/* Extended Warranty & Protection Plans */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8 modern-card animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Protection Plans Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-red-500 transition-colors modern-card">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-red-500 mr-3" />
                <h4 className="text-xl font-bold">Extended Warranty</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Engine & transmission coverage</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Up to 100,000 miles protection</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />24/7 roadside assistance</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Rental car coverage</li>
              </ul>
            </div>
            <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-red-500 transition-colors modern-card">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-red-500 mr-3" />
                <h4 className="text-xl font-bold">Maintenance Plan</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Scheduled maintenance included</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Oil changes & filter replacements</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Brake inspections</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Multi-point inspections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Vehicles */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8 modern-card animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(() => {
              const primary = cars
                .filter(c => c.id !== car.id && (c.brand === car.brand || c.bodyStyle === car.bodyStyle))
                .slice(0, 3);
              const fallback = primary.length < 3
                ? cars.filter(c => c.id !== car.id && !primary.some(p => p.id === c.id)).slice(0, 3 - primary.length)
                : [];
              const related = [...primary, ...fallback];
              return related.map((rc) => (
                <Link
                  key={rc.id}
                  to={`/car/${rc.id}`}
                  state={{ fromInventoryPage }}
                  className="group cursor-pointer modern-card hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={rc.image} alt={rc.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 truncate">{rc.name}</h4>
                    <p className="text-red-600 font-bold">{rc.price && rc.price > 0 ? `$${rc.price.toLocaleString()}` : 'Call for Price'}</p>
                  </div>
                </Link>
              ));
            })()}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 responsive-grid gap-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center modern-card animate-scale-in">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-6 animate-pulse-glow" />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Certified Quality</h4>
            <p className="text-gray-600 responsive-text">Every vehicle undergoes comprehensive 200-point inspection</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center modern-card animate-scale-in delay-200">
            <Award className="w-16 h-16 text-red-600 mx-auto mb-6 animate-pulse-glow" />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Warranty Included</h4>
            <p className="text-gray-600 responsive-text">Comprehensive warranty coverage and roadside assistance</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center modern-card animate-scale-in delay-400">
            <Phone className="w-16 h-16 text-red-600 mx-auto mb-6 animate-pulse-glow" />
            <h4 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h4>
            <p className="text-gray-600 responsive-text">Round-the-clock customer support and assistance</p>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Fullscreen Image Modal */}
      <Dialog open={isFullscreenOpen} onOpenChange={setIsFullscreenOpen}>
        <DialogContent className="max-w-none w-screen h-screen p-0 bg-black border-0 rounded-none">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <img 
              src={carImages[currentImageIndex]} 
              alt={`${car.name} - Image ${currentImageIndex + 1}`}
              className="w-auto h-auto max-w-none max-h-none object-contain"
              style={{ maxWidth: '100vw', maxHeight: '100vh' }}
            />
            
            {/* Close button */}
            <button 
              onClick={closeFullscreen} 
              className="absolute top-4 right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Previous button */}
            <button 
              onClick={goToPrevious} 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            {/* Next button */}
            <button 
              onClick={goToNext} 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full z-10">
              {currentImageIndex + 1} / {carImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CarDetails;
