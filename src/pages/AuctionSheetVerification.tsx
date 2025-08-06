import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Shield, CheckCircle, Clock, Search, AlertTriangle, Car, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const verificationTypes = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Basic Verification",
    description: "Quick check for auction sheet authenticity and basic translation.",
    features: [
      "Auction sheet authenticity check",
      "Basic translation (grades, mileage, year)",
      "Major accident & tampering check"
    ],
    price: "Rs. 1,500",
    duration: "Same Day"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Standard Verification",
    description: "Detailed verification with full translation and expert comments.",
    features: [
      "Full auction sheet translation",
      "Accident, repair & rust check",
      "Expert comments on condition"
    ],
    price: "Rs. 2,500",
    duration: "Same Day"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Premium Verification",
    description: "Comprehensive verification with market analysis and phone support.",
    features: [
      "All Standard features",
      "Market value analysis",
      "Phone consultation with expert"
    ],
    price: "Rs. 3,500",
    duration: "Same Day"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Import Verification",
    description: "For imported vehicles: verify auction sheet, chassis, and import docs.",
    features: [
      "Auction sheet & chassis verification",
      "Import documents check",
      "Customs clearance status"
    ],
    price: "Rs. 4,000",
    duration: "1-2 Days"
  }
];

const verificationProcess = [
  {
    step: "1",
    title: "Submit Auction Sheet",
    description: "Upload or share a link to your auction sheet or vehicle documents."
  },
  {
    step: "2",
    title: "Expert Review",
    description: "Our experts verify authenticity, translate, and analyze the sheet."
  },
  {
    step: "3",
    title: "Get Report",
    description: "Receive a detailed report with translation, findings, and recommendations."
  },
  {
    step: "4",
    title: "Consultation (Premium)",
    description: "Discuss the report and next steps with our experts (Premium only)."
  }
];

const whatWeCheck = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Authenticity",
    description: "We verify the auction sheet is genuine and not tampered."
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Accident & Repair",
    description: "Check for accident history, repairs, rust, and repaint marks."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Translation",
    description: "Full translation of Japanese auction sheets into English/Urdu."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Chassis & Import Docs",
    description: "Chassis verification and import document check for imported cars."
  }
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trusted Experts",
    description: "Experienced team with 10+ years in Japanese auction verification."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Accurate Reports",
    description: "Clear, unbiased, and detailed reports for confident decisions."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Turnaround",
    description: "Same-day service for most verifications."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Support",
    description: "Phone and WhatsApp support for all your queries."
  }
];

const AuctionSheetVerification = () => (
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
              Auction Sheet <span className="text-red-300">Verification</span>
            </h1>
            <p className="text-xl body-font mb-8 text-red-100">
              Ensure your imported or local vehicle is genuine. Our experts verify, translate, and analyze Japanese auction sheets for you—protecting you from fraud and costly mistakes.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-red-300" />
                <span className="font-semibold text-red-100">Expert Verification</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-red-300" />
                <span className="font-semibold text-red-100">Accurate Translation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-red-300" />
                <span className="font-semibold text-red-100">Same Day Report</span>
              </div>
            </div>
            <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
              <FileText className="w-5 h-5 mr-2" />
              Book Verification
            </Button>
          </div>
          <div className="relative animate-fade-in delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <FileText className="w-16 h-16 mx-auto mb-4 text-red-300" />
                <h3 className="text-2xl font-bold mb-2 text-white">Auction Sheet Experts</h3>
                <p className="text-red-100">Trusted by buyers and dealers across Pakistan</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Authenticity Check</span>
                    <span className="text-red-300 font-bold">✓</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Full Translation</span>
                    <span className="text-red-300 font-bold">✓</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Market Analysis</span>
                    <span className="text-red-300 font-bold">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Verification Packages */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-font text-gray-900 mb-4">Verification Packages</h2>
          <p className="text-xl body-font text-gray-600">Choose the right level of verification for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verificationTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <div className="text-red-600 group-hover:text-white transition-colors">
                  {type.icon}
                </div>
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600 body-font text-sm mb-4">{type.description}</p>
              <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                {type.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-red-600">{type.price}</span>
                <span className="text-sm text-gray-500">{type.duration}</span>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Verification Process */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-font text-gray-900 mb-4">How Verification Works</h2>
          <p className="text-xl body-font text-gray-600">A simple, transparent, and secure process</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {verificationProcess.map((process, index) => (
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

    {/* What We Check */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-font text-gray-900 mb-4">What We Check</h2>
          <p className="text-xl body-font text-gray-600">Comprehensive verification for your peace of mind</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatWeCheck.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <div className="text-red-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg subheading-font text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 body-font text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Choose Our Verification?</h2>
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
          <h2 className="text-4xl heading-font text-gray-900 mb-4">Book Your Verification</h2>
          <p className="text-xl body-font text-gray-600">Get your auction sheet verified today</p>
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
                <label className="block text-sm subheading-font text-gray-700 mb-2">Verification Package *</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Verification</SelectItem>
                    <SelectItem value="standard">Standard Verification</SelectItem>
                    <SelectItem value="premium">Premium Verification</SelectItem>
                    <SelectItem value="import">Import Verification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm subheading-font text-gray-700 mb-2">Auction Sheet / Document Link *</label>
              <Input className="h-12" placeholder="Paste Google Drive or Dropbox link" required />
            </div>
            <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
              <FileText className="w-5 h-5 mr-2" />
              Book Verification
            </Button>
            <p className="text-center text-sm text-gray-500">
              Our team will contact you within 2 hours to confirm your booking.
            </p>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AuctionSheetVerification;