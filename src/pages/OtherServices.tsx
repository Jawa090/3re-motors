import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Shield, Wrench, Sparkles, FileText, CheckCircle, Star, Clock, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OtherServices = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Car Inspection",
      description: "Comprehensive vehicle inspection services to ensure quality and safety",
      features: ["Pre-purchase inspection", "Safety assessment", "Mechanical evaluation", "Detailed reports"],
      path: "/car-inspection",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Auction Sheet Verification",
      description: "Verify auction sheets and vehicle history for transparency",
      features: ["Document verification", "History check", "Authenticity validation", "Detailed analysis"],
      path: "/auction-sheet-verification",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Car Repair",
      description: "Professional repair services with certified mechanics and quality parts",
      features: ["Engine repair", "Electrical systems", "Body work", "Warranty service"],
      path: "/car-repair",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Car Detailing",
      description: "Premium detailing services to restore your vehicle's beauty",
      features: ["Interior cleaning", "Exterior detailing", "Paint protection", "Ceramic coating"],
      path: "/car-detailing",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Experts",
      description: "All services performed by certified professionals"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Service",
      description: "Fast turnaround times for all services"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Support",
      description: "24/7 customer support for all your needs"
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
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl logo-font mb-6">
                Professional <span className="text-red-400">Car Services</span>
              </h1>
              <p className="text-xl body-font mb-8 text-red-100 max-w-3xl mx-auto">
                Comprehensive automotive services to keep your vehicle in perfect condition. From inspection to repair, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-100">Certified Experts</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-100">Quick Service</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-100">Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl body-font text-gray-600">Comprehensive automotive solutions for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-600 font-semibold">Learn More</span>
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <div className="w-2 h-2 bg-red-600 group-hover:bg-white transition-colors rounded-full"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl body-font text-gray-600">Professional expertise you can trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
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

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">How Our Services Work</h2>
            <p className="text-xl body-font text-gray-600">Simple and efficient process for all services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Book Service</h3>
              <p className="text-gray-600 body-font text-sm">Choose your service and schedule an appointment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Expert Assessment</h3>
              <p className="text-gray-600 body-font text-sm">Our certified experts evaluate your vehicle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Quality Service</h3>
              <p className="text-gray-600 body-font text-sm">Professional service with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 body-font text-sm">Quality check and customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl heading-font text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl body-font text-gray-600 mb-8">Choose the service you need and we'll take care of the rest</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link key={index} to={service.path}>
                <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-bold py-3`}>
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherServices; 