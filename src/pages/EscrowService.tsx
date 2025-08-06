import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, CreditCard, FileText, CheckCircle, Clock, Users, Lock, Car, Globe, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EscrowService = () => {
  const escrowTypes = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Vehicle Purchase Escrow",
      description: "Funds are held securely until the vehicle is transferred and verified. Ideal for both new and used car transactions.",
      features: [
        "Funds held in trust",
        "Release only after transfer",
        "Buyer & seller protection"
      ],
      fee: "0.5%",
      duration: "1-3 days"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Import Vehicle Escrow",
      description: "Protect your payment when importing vehicles from abroad. Funds are released only after customs clearance and inspection.",
      features: [
        "Funds released after customs",
        "Document verification",
        "Protection from import scams"
      ],
      fee: "1%",
      duration: "3-7 days"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Private Sale Escrow",
      description: "Buy or sell with confidence in private transactions. No direct contact or risk of fraud.",
      features: [
        "Third-party verification",
        "No direct contact needed",
        "Dispute resolution support"
      ],
      fee: "0.75%",
      duration: "1-3 days"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auction Escrow",
      description: "Safe payments for auctioned vehicles. Auction sheet and vehicle verification included.",
      features: [
        "Funds held until delivery",
        "Auction sheet verification",
        "Buyer & seller protection"
      ],
      fee: "1%",
      duration: "2-5 days"
    }
  ];

  const escrowProcess = [
    {
      step: "1",
      title: "Agreement",
      description: "Buyer and seller agree to use escrow and set transaction terms."
    },
    {
      step: "2",
      title: "Deposit",
      description: "Buyer deposits funds with the escrow service."
    },
    {
      step: "3",
      title: "Verification",
      description: "Vehicle and documents are inspected and verified by our experts."
    },
    {
      step: "4",
      title: "Transfer & Release",
      description: "Ownership is transferred, and funds are released to the seller."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Protection",
      description: "Funds are only released when all conditions are met, protecting both parties."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Verification",
      description: "All paperwork and vehicle details are checked by our experts."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Peace of Mind",
      description: "Both buyer and seller are protected throughout the transaction."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast & Transparent",
      description: "Clear, step-by-step process with regular updates."
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Payment",
      description: "All funds are held in a regulated escrow account."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dispute Resolution",
      description: "Professional mediation in case of disagreements."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted by Dealers",
      description: "Used by top car dealers and importers in Pakistan."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vehicle Verification",
      description: "Physical and document checks before payment release."
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
                Secure <span className="text-red-300">Escrow Service</span> for Vehicle Transactions
              </h1>
              <p className="text-xl body-font mb-8 text-red-100">
                Buy or sell your car with complete confidence. Our escrow service protects your payment and ensures a safe, transparent transaction for both parties—whether you’re buying locally, importing, or dealing with auctions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">Fraud Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Lock className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-red-300" />
                  <span className="font-semibold text-red-100">Verified Transfer</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <CreditCard className="w-5 h-5 mr-2" />
                Start Escrow
              </Button>
            </div>
            <div className="relative animate-fade-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <CreditCard className="w-16 h-16 mx-auto mb-4 text-red-300" />
                  <h3 className="text-2xl font-bold mb-2 text-white">Escrow for Vehicles</h3>
                  <p className="text-red-100">Trusted by buyers and sellers across Pakistan</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Secure Payment</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Verified Transfer</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Dispute Resolution</span>
                      <span className="text-red-300 font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escrow Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Escrow Service Types</h2>
            <p className="text-xl body-font text-gray-600">Choose the right escrow solution for your transaction</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {escrowTypes.map((escrow, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {escrow.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{escrow.title}</h3>
                <p className="text-gray-600 body-font text-sm mb-4">{escrow.description}</p>
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                  {escrow.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-red-600">{escrow.fee} Fee</span>
                  <span className="text-sm text-gray-500">{escrow.duration}</span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Start Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escrow Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">How Escrow Works</h2>
            <p className="text-xl body-font text-gray-600">Simple, transparent, and secure process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {escrowProcess.map((process, index) => (
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
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Use Our Escrow Service?</h2>
            <p className="text-xl body-font text-gray-600">Trust, security, and peace of mind for every transaction</p>
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

      {/* Security Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Security Features</h2>
            <p className="text-xl body-font text-gray-600">Your safety is our top priority</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 body-font text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escrow Booking Form */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Start Your Escrow</h2>
            <p className="text-xl body-font text-gray-600">Begin your secure transaction today</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Full Name *</label>
                  <Input className="h-12" placeholder="Ali Khan" required />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Email *</label>
                  <Input type="email" className="h-12" placeholder="ali@example.com" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Phone *</label>
                  <Input type="tel" className="h-12" placeholder="+92 300 1234567" required />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Escrow Type *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select escrow type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vehicle-purchase">Vehicle Purchase Escrow</SelectItem>
                      <SelectItem value="private-sale">Private Sale Escrow</SelectItem>
                      <SelectItem value="import-vehicle">Import Vehicle Escrow</SelectItem>
                      <SelectItem value="auction">Auction Escrow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="block text-sm subheading-font text-gray-700 mb-2">Transaction Details *</label>
                <Input className="h-12" placeholder="Briefly describe your transaction" required />
              </div>
              <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <CreditCard className="w-5 h-5 mr-2" />
                Start Escrow
              </Button>
              <p className="text-center text-sm text-gray-500">
                Our team will contact you within 2 hours to confirm your escrow setup.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EscrowService; 