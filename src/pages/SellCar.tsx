import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Camera, DollarSign, Clock, CheckCircle, Upload, Car, Calculator, Star, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SellCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    description: '',
    contact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sellProcess = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Submit Details",
      description: "Fill out our simple form with your car's information and upload photos"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Get Instant Quote",
      description: "Receive a competitive quote within 24 hours based on market value"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vehicle Inspection",
      description: "Our experts conduct a thorough inspection to verify condition"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Get Paid Fast",
      description: "Complete the sale and receive payment within 48 hours"
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Best Market Price",
      description: "We offer competitive prices based on real market data"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Process",
      description: "Sell your car in as little as 24-48 hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transaction",
      description: "Safe and secure payment process guaranteed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated team to guide you through the process"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 via-red-100 to-white text-gray-900 overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-red-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-red-100 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl logo-font mb-6">
                Sell Your <span className="text-red-600">Car Today</span>
              </h1>
              <p className="text-xl body-font mb-8 text-red-600">
                Get the best price for your vehicle with our hassle-free selling process. 
                Quick quotes, fair prices, and instant payments.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-red-100/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-700">Best Market Prices</span>
                </div>
                <div className="flex items-center space-x-2 bg-red-100/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-700">48 Hour Process</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <Calculator className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-red-100/40 backdrop-blur-sm rounded-3xl p-8 border border-red-200">
                <div className="text-center mb-6">
                  <Car className="w-16 h-16 mx-auto mb-4 text-red-600" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Quick Valuation</h3>
                  <p className="text-red-600">Get an instant estimate</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-600">$45K+</div>
                      <div className="text-sm text-gray-500">Average Sale Price</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-red-600">24hrs</div>
                      <div className="text-sm text-gray-500">Average Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl body-font text-gray-600">Simple, fast, and transparent process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 transition-colors duration-300">
                    <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl subheading-font text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 body-font">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl body-font text-gray-600">Experience the difference with our premium service</p>
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

      {/* Sell Your Car Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Get Your Free Quote</h2>
            <p className="text-xl body-font text-gray-600">Fill out the form below to get started</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Make *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Make" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="ford">Ford</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Model *</label>
                  <Input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="h-12"
                    placeholder="e.g., X5, C-Class"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Year *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Mileage *</label>
                  <Input
                    type="number"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    className="h-12"
                    placeholder="e.g., 45000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Condition *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Additional Details</label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="min-h-24"
                  placeholder="Any additional information about your vehicle..."
                />
              </div>

              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Contact Information *</label>
                <Input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="h-12"
                  placeholder="Phone number or email"
                  required
                />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-red-500 transition-colors">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 body-font mb-2">Upload Photos of Your Vehicle</p>
                <p className="text-gray-500 text-sm">Add up to 10 photos for better valuation</p>
                <Button variant="outline" className="mt-4">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Photos
                </Button>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <DollarSign className="w-5 h-5 mr-2" />
                Get My Free Quote
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl body-font text-gray-600">Hear from satisfied car sellers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Rodriguez",
                car: "2020 BMW X3",
                amount: "$42,000",
                review: "Sold my BMW in just 2 days! The process was incredibly smooth and I got more than I expected.",
                rating: 5
              },
              {
                name: "David Kim",
                car: "2019 Mercedes C-Class",
                amount: "$38,500",
                review: "Best car selling experience ever. Professional, fast, and fair pricing. Highly recommend!",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                car: "2021 Toyota Camry",
                amount: "$28,000",
                review: "The team was amazing from start to finish. Got my quote within hours and payment in 2 days.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 body-font mb-4">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <p className="subheading-font text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.car} • Sold for {testimonial.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellCar;