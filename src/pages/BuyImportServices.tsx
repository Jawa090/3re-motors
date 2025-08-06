import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Globe, Truck, Shield, CheckCircle, Star, MapPin, DollarSign, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BuyImportServices = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Vehicle Search & Sourcing",
      description: "Find your perfect vehicle from our extensive network of dealers and private sellers worldwide",
      features: ["Global vehicle database", "Expert sourcing", "Quality verification", "Price comparison"],
      bestFor: "Anyone looking for specific vehicles"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Import Services",
      description: "Complete import solutions from any country with full documentation and compliance",
      features: ["Customs clearance", "Documentation handling", "Shipping coordination", "Tax compliance"],
      bestFor: "International vehicle buyers"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transportation & Delivery",
      description: "Door-to-door delivery service with full insurance and tracking",
      features: ["Door-to-door delivery", "Full insurance", "Real-time tracking", "White glove service"],
      bestFor: "Convenience seekers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Comprehensive vehicle inspection and quality guarantee",
      features: ["Pre-purchase inspection", "Quality guarantee", "Warranty options", "Return policy"],
      bestFor: "Quality-conscious buyers"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Access to vehicles from over 50 countries"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Best prices guaranteed with price match promise"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Service",
      description: "Complete process from search to delivery in weeks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated specialists for every step of the process"
    }
  ];

  const featuredVehicles = [
    {
      name: "Tesla Model S",
      image: "/Tesla Model S.png",
      price: "$85,000",
      location: "California, USA",
      features: ["Electric", "Autopilot", "Premium Interior"]
    },
    {
      name: "BMW X5",
      image: "/Car.png",
      price: "$65,000",
      location: "Germany",
      features: ["Luxury SUV", "Advanced Safety", "Premium Sound"]
    },
    {
      name: "Toyota Prius",
      image: "/Toyota Prius/1.jpg",
      price: "$35,000",
      location: "Japan",
      features: ["Hybrid", "Fuel Efficient", "Reliable"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl logo-font mb-6">
                Find Your Perfect <span className="text-red-400">Vehicle</span>, Anywhere!
              </h1>
              <p className="text-xl body-font mb-8 text-red-100">
                Browse, buy, sell, or import cars with ease. All the services you need—seamlessly in one place.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-100">50+ Countries</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-100">Quality Guaranteed</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <Search className="w-5 h-5 mr-2" />
                Start Your Search
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-red-400" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Global Vehicle Search</h3>
                  <p className="text-red-100">Find vehicles worldwide</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Available Countries</span>
                      <span className="text-red-400 font-bold">50+</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Vehicle Types</span>
                      <span className="text-red-400 font-bold">1000+</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Success Rate</span>
                      <span className="text-red-400 font-bold">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Find Your Perfect Vehicle</h2>
            <p className="text-xl body-font text-gray-600">Search our global database of vehicles</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Make</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tesla">Tesla</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Model</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="model-s">Model S</SelectItem>
                    <SelectItem value="x5">X5</SelectItem>
                    <SelectItem value="prius">Prius</SelectItem>
                    <SelectItem value="civic">Civic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Price Range</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-25000">$0 - $25,000</SelectItem>
                    <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100000+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Location</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
              <Search className="w-5 h-5 mr-2" />
              Search Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl body-font text-gray-600">Comprehensive solutions for all your vehicle needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 body-font text-sm mb-2">{service.description}</p>
                <ul className="text-sm text-gray-700 mb-2 list-disc list-inside">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="text-xs text-red-600 font-semibold">Best for: {service.bestFor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Car Import Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl heading-font">Dream Car Not Available Here?</h2>
              </div>
              <h3 className="text-5xl logo-font mb-6 text-red-400">Import It!</h3>
              <p className="text-xl body-font mb-8 text-red-100">
                We simplify car imports—sourcing, shipping, and customs, all handled with transparent pricing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400" />
                  <span className="text-lg">Global vehicle sourcing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400" />
                  <span className="text-lg">Complete customs clearance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400" />
                  <span className="text-lg">Door-to-door delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400" />
                  <span className="text-lg">Transparent pricing</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Start Import Process
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-red-400" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Import Process</h3>
                  <p className="text-red-100">Simple 4-step process</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Step 1: Vehicle Selection</span>
                      <span className="text-red-400 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Step 2: Documentation</span>
                      <span className="text-red-400 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Step 3: Shipping</span>
                      <span className="text-red-400 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Step 4: Delivery</span>
                      <span className="text-red-400 font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl heading-font text-gray-900 mb-4">7 Days Money Back Guarantee</h2>
            <p className="text-xl body-font text-gray-600">Buy with Total Confidence!</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl heading-font text-gray-900 mb-4">Every purchase is backed by our 7-Day Money Back Guarantee</h3>
              <p className="text-lg body-font text-gray-700 mb-6">Love it—or return it, no questions asked.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg subheading-font text-gray-900 mb-2">No Questions Asked</h4>
                <p className="text-gray-600 body-font text-sm">Return for any reason within 7 days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg subheading-font text-gray-900 mb-2">Full Refund</h4>
                <p className="text-gray-600 body-font text-sm">100% money back guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg subheading-font text-gray-900 mb-2">Quick Process</h4>
                <p className="text-gray-600 body-font text-sm">Refund processed within 24 hours</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3">
                <Shield className="w-5 h-5 mr-2" />
                Shop with Confidence
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Featured Vehicles</h2>
            <p className="text-xl body-font text-gray-600">Hand-picked vehicles from around the world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {vehicle.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl subheading-font text-gray-900 mb-2">{vehicle.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{vehicle.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature, i) => (
                      <span key={i} className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl body-font text-gray-600">Experience the difference with our premium services</p>
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

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl body-font text-gray-600">Tell us what you're looking for and we'll help you find it</p>
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
                  <Input type="tel" className="h-12" placeholder="+1 (555) 123-4567" required />
                </div>
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">What are you looking for? *</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy a Vehicle</SelectItem>
                    <SelectItem value="import">Import a Vehicle</SelectItem>
                    <SelectItem value="sell">Sell a Vehicle</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Vehicle Details</label>
                <Input className="h-12" placeholder="e.g., Tesla Model S, BMW X5, etc." />
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Additional Requirements</label>
                <Input className="h-12" placeholder="Any specific requirements or preferences" />
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <Search className="w-5 h-5 mr-2" />
                Start Your Search
              </Button>

              <p className="text-center text-sm text-gray-500">
                We'll get back to you within 24 hours with personalized options
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyImportServices; 