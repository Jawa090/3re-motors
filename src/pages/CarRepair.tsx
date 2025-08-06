import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Wrench, Shield, CheckCircle, Clock, Users, Settings, Car, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CarRepair = () => {
  const repairServices = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair services",
      features: ["Engine diagnostics", "Performance tuning", "Oil change", "Filter replacement"],
      price: "From Rs. 5,000",
      duration: "2-6 hours"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Systems",
      description: "Electrical system repair and maintenance",
      features: ["Battery service", "Alternator repair", "Starter motor", "Wiring repair"],
      price: "From Rs. 3,000",
      duration: "1-4 hours"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Body Work",
      description: "Professional body repair and paint services",
      features: ["Dent removal", "Paint matching", "Rust repair", "Panel replacement"],
      price: "From Rs. 8,000",
      duration: "1-3 days"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "General Maintenance",
      description: "Regular maintenance and preventive care",
      features: ["Brake service", "Suspension repair", "Tire service", "Fluid checks"],
      price: "From Rs. 2,500",
      duration: "1-3 hours"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Diagnosis",
      description: "Comprehensive vehicle diagnosis and problem identification"
    },
    {
      step: "2",
      title: "Estimate",
      description: "Detailed cost estimate and repair timeline"
    },
    {
      step: "3",
      title: "Repair",
      description: "Professional repair using quality parts and tools"
    },
    {
      step: "4",
      title: "Quality Check",
      description: "Thorough testing and quality assurance"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Mechanics",
      description: "ASE certified technicians with years of experience"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Quality Parts",
      description: "Genuine OEM and high-quality aftermarket parts"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Service",
      description: "Quick turnaround times for most repairs"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Warranty Service",
      description: "Comprehensive warranty on all repairs and parts"
    }
  ];

  const specializations = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Engine & Transmission",
      description: "Complete engine and transmission repair services"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Electrical & Electronics",
      description: "Modern vehicle electrical system repair"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Body & Paint",
      description: "Professional body work and paint services"
    },
         {
       icon: <Wrench className="w-6 h-6" />,
       title: "Brake & Suspension",
       description: "Safety-critical brake and suspension systems"
     },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "AC & Heating",
      description: "Climate control system repair and maintenance"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "General Repairs",
      description: "All types of automotive repair and maintenance"
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
                                 Professional <span className="text-red-300">Car Repair</span>
              </h1>
                             <p className="text-xl body-font mb-8 text-red-100">
                Expert automotive repair services by certified mechanics. Quality workmanship and genuine parts for all your vehicle repair needs.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                                 <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                   <Shield className="w-5 h-5 text-red-300" />
                   <span className="font-semibold text-red-100">Certified Mechanics</span>
                 </div>
                 <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                   <Wrench className="w-5 h-5 text-red-300" />
                   <span className="font-semibold text-red-100">Quality Parts</span>
                 </div>
              </div>
                             <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <Wrench className="w-5 h-5 mr-2" />
                Book Repair
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                                     <Wrench className="w-16 h-16 mx-auto mb-4 text-red-300" />
                   <h3 className="text-2xl font-bold mb-2 text-white">Repair Services</h3>
                   <p className="text-red-100">Professional automotive repair</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Certified Mechanics</span>
                                             <span className="text-red-300 font-bold">✓</span>
                     </div>
                   </div>
                   <div className="bg-white/20 rounded-xl p-4">
                     <div className="flex items-center justify-between">
                       <span className="text-white/80">Quality Parts</span>
                       <span className="text-red-300 font-bold">✓</span>
                     </div>
                   </div>
                   <div className="bg-white/20 rounded-xl p-4">
                     <div className="flex items-center justify-between">
                       <span className="text-white/80">Warranty Service</span>
                       <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Repair Services</h2>
            <p className="text-xl body-font text-gray-600">Comprehensive automotive repair solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairServices.map((service, index) => (
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
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-xl body-font text-gray-600">Expert repair services for all vehicle systems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((specialization, index) => (
                             <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                   <div className="text-red-600 group-hover:text-white transition-colors">
                    {specialization.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{specialization.title}</h3>
                <p className="text-gray-600 body-font text-sm">{specialization.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Repair Process</h2>
            <p className="text-xl body-font text-gray-600">Professional and efficient repair workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {repairProcess.map((process, index) => (
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
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Our Repair?</h2>
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
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Book Your Repair</h2>
            <p className="text-xl body-font text-gray-600">Schedule your vehicle repair today</p>
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
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Repair Type *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select repair type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engine">Engine Repair</SelectItem>
                      <SelectItem value="electrical">Electrical Systems</SelectItem>
                      <SelectItem value="body">Body Work</SelectItem>
                      <SelectItem value="maintenance">General Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Preferred Date *</label>
                  <Input type="date" className="h-12" required />
                </div>
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Problem Description *</label>
                <Input className="h-12" placeholder="Describe the issue with your vehicle" required />
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Additional Notes</label>
                <Input className="h-12" placeholder="Any specific requirements or concerns" />
              </div>

                             <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <Wrench className="w-5 h-5 mr-2" />
                Book Repair
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

export default CarRepair; 