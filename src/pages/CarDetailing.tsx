import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Sparkles, Shield, CheckCircle, Clock, Users, Droplets, Car, Zap, Star, Brush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CarDetailing = () => {
  const detailingServices = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Basic Wash",
      description: "Exterior wash and basic interior cleaning",
      features: ["Exterior wash", "Tire cleaning", "Basic interior", "Window cleaning"],
      price: "Rs. 1,500",
      duration: "1-2 hours"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Standard Detailing",
      description: "Comprehensive exterior and interior detailing",
      features: ["Full exterior wash", "Interior deep clean", "Tire dressing", "Glass treatment"],
      price: "Rs. 3,500",
      duration: "3-4 hours"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Detailing",
      description: "Complete detailing with paint protection",
      features: ["Paint correction", "Ceramic coating", "Interior protection", "Engine bay cleaning"],
      price: "Rs. 8,000",
      duration: "6-8 hours"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Showroom Detailing",
      description: "Ultimate detailing for showroom finish",
      features: ["Paint correction", "Ceramic coating", "Interior restoration", "Engine detailing"],
      price: "Rs. 15,000",
      duration: "1-2 days"
    }
  ];

  const detailingProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "Vehicle condition assessment and service planning"
    },
    {
      step: "2",
      title: "Preparation",
      description: "Vehicle preparation and surface cleaning"
    },
    {
      step: "3",
      title: "Detailing",
      description: "Professional detailing with premium products"
    },
    {
      step: "4",
      title: "Protection",
      description: "Final protection and quality inspection"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Expert Detailers",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Products",
      description: "High-quality detailing products and equipment"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Convenient Service",
      description: "Mobile detailing service at your location"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all services"
    }
  ];

  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Exterior Detailing",
      description: "Complete exterior cleaning and protection"
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Interior Detailing",
      description: "Deep interior cleaning and sanitization"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Paint Protection",
      description: "Ceramic coating and paint correction"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Engine Detailing",
      description: "Engine bay cleaning and protection"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Headlight Restoration",
      description: "Professional headlight restoration service"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Leather Care",
      description: "Leather cleaning and conditioning"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl logo-font mb-6">
                                 Professional <span className="text-red-300">Car Detailing</span>
              </h1>
                             <p className="text-xl body-font mb-8 text-red-100">
                Premium automotive detailing services to restore your vehicle's beauty. From basic wash to showroom finish, we bring out the best in your car.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">Premium Service</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">Expert Detailers</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" />
                Book Detailing
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-red-300" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Detailing Services</h3>
                  <p className="text-red-100">Professional car care</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Expert Detailers</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Premium Products</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Mobile Service</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Detailing Services</h2>
            <p className="text-xl body-font text-gray-600">Choose the perfect detailing package for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detailingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 body-font text-sm mb-4">{service.description}</p>
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                                 <div className="flex justify-between items-center mb-4">
                   <span className="text-lg font-bold text-red-600">{service.price}</span>
                   <span className="text-sm text-gray-500">{service.duration}</span>
                 </div>
                 <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl body-font text-gray-600">Comprehensive detailing solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                             <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                   <div className="text-red-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 body-font text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Detailing Process</h2>
            <p className="text-xl body-font text-gray-600">Professional and thorough detailing workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {detailingProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 body-font text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Our Detailing?</h2>
            <p className="text-xl body-font text-gray-600">Professional expertise you can trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                             <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100">
                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                   <div className="text-red-600 group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 body-font text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Used */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Premium Products We Use</h2>
            <p className="text-xl body-font text-gray-600">Only the best products for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Ceramic Coatings</h3>
              <p className="text-gray-600 body-font text-sm">Long-lasting paint protection and shine</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Brush className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Premium Shampoos</h3>
              <p className="text-gray-600 body-font text-sm">pH-balanced cleaning solutions</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Interior Products</h3>
              <p className="text-gray-600 body-font text-sm">Safe and effective interior cleaners</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Protection Products</h3>
              <p className="text-gray-600 body-font text-sm">Advanced protection and sealants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Book Your Detailing</h2>
            <p className="text-xl body-font text-gray-600">Schedule your vehicle detailing today</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">First Name *</label>
                  <Input className="h-12" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Last Name *</label>
                  <Input className="h-12" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Email *</label>
                  <Input type="email" className="h-12" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Phone *</label>
                  <Input type="tel" className="h-12" placeholder="+92 300 1234567" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Vehicle Make *</label>
                  <Input className="h-12" placeholder="Toyota" required />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Vehicle Model *</label>
                  <Input className="h-12" placeholder="Corolla" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Service Type *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Wash</SelectItem>
                      <SelectItem value="standard">Standard Detailing</SelectItem>
                      <SelectItem value="premium">Premium Detailing</SelectItem>
                      <SelectItem value="showroom">Showroom Detailing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Preferred Date *</label>
                  <Input type="date" className="h-12" required />
                </div>
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Service Location</label>
                <Input className="h-12" placeholder="Your address for mobile service" />
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Special Requirements</label>
                <Input className="h-12" placeholder="Any specific detailing needs or concerns" />
              </div>

                             <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <Sparkles className="w-5 h-5 mr-2" />
                Book Detailing
              </Button>

              <p className="text-center text-sm text-gray-500">
                We'll contact you within 2 hours to confirm your appointment
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarDetailing; 