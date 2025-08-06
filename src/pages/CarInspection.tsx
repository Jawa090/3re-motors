import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Shield, CheckCircle, Clock, Users, FileText, AlertTriangle, Settings, Car, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CarInspection = () => {
  const inspectionTypes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Pre-Purchase Inspection",
      description: "Comprehensive evaluation before buying a vehicle",
      features: ["Engine performance", "Transmission check", "Body condition", "Interior assessment"],
      price: "Rs. 5,000",
      duration: "2-3 hours"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Inspection",
      description: "Focus on safety-critical components",
      features: ["Brake system", "Steering components", "Tire condition", "Lighting systems"],
      price: "Rs. 3,000",
      duration: "1-2 hours"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Mechanical Inspection",
      description: "Detailed mechanical system evaluation",
      features: ["Engine diagnostics", "Electrical systems", "Suspension check", "Exhaust system"],
      price: "Rs. 4,000",
      duration: "2-3 hours"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Comprehensive Inspection",
      description: "Complete vehicle assessment including all systems",
      features: ["Full mechanical check", "Safety systems", "Cosmetic evaluation", "Road test"],
      price: "Rs. 7,000",
      duration: "3-4 hours"
    }
  ];

  const inspectionProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Visual inspection and basic functionality tests"
    },
    {
      step: "2",
      title: "Mechanical Testing",
      description: "Engine, transmission, and electrical system diagnostics"
    },
    {
      step: "3",
      title: "Safety Check",
      description: "Brakes, steering, tires, and safety systems evaluation"
    },
    {
      step: "4",
      title: "Detailed Report",
      description: "Comprehensive report with photos and recommendations"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Inspectors",
      description: "ASE certified mechanics with years of experience"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Detailed Reports",
      description: "Comprehensive reports with photos and recommendations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Service",
      description: "Most inspections completed within 2-4 hours"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all inspections"
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
                                 Professional <span className="text-red-300">Car Inspection</span>
              </h1>
                             <p className="text-xl body-font mb-8 text-red-100">
                Comprehensive vehicle inspection services by certified mechanics. Ensure your vehicle's safety and reliability with our detailed assessment.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">Certified Experts</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">2-4 Hours</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <Search className="w-5 h-5 mr-2" />
                Book Inspection
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <Search className="w-16 h-16 mx-auto mb-4 text-red-300" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Inspection Services</h3>
                  <p className="text-red-100">Professional vehicle assessment</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Certified Inspectors</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Detailed Reports</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Quality Guarantee</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Inspection Services</h2>
            <p className="text-xl body-font text-gray-600">Choose the right inspection for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionTypes.map((inspection, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {inspection.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{inspection.title}</h3>
                <p className="text-gray-600 body-font text-sm mb-4">{inspection.description}</p>
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                  {inspection.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                                 <div className="flex justify-between items-center mb-4">
                   <span className="text-lg font-bold text-red-600">{inspection.price}</span>
                   <span className="text-sm text-gray-500">{inspection.duration}</span>
                 </div>
                 <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Inspection Process</h2>
            <p className="text-xl body-font text-gray-600">Professional and thorough assessment procedure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {inspectionProcess.map((process, index) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Our Inspection?</h2>
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

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Book Your Inspection</h2>
            <p className="text-xl body-font text-gray-600">Schedule your vehicle inspection today</p>
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
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Inspection Type *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select inspection type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pre-purchase">Pre-Purchase Inspection</SelectItem>
                      <SelectItem value="safety">Safety Inspection</SelectItem>
                      <SelectItem value="mechanical">Mechanical Inspection</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive Inspection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Preferred Date *</label>
                  <Input type="date" className="h-12" required />
                </div>
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Additional Notes</label>
                <Input className="h-12" placeholder="Any specific concerns or requirements" />
              </div>

                             <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <Search className="w-5 h-5 mr-2" />
                Book Inspection
              </Button>

              <p className="text-center text-sm text-gray-500">
                We'll confirm your appointment within 2 hours
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarInspection; 