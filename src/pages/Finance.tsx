import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calculator, CreditCard, CheckCircle, DollarSign, Percent, Calendar, Shield, Users, Clock, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const Finance = () => {
  const [loanAmount, setLoanAmount] = useState([35000]);
  const [downPayment, setDownPayment] = useState([7000]);
  const [loanTerm, setLoanTerm] = useState([60]);
  const [creditScore, setCreditScore] = useState([750]);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0] - downPayment[0];
    const interestRate = creditScore[0] >= 750 ? 0.035 : creditScore[0] >= 700 ? 0.045 : 0.065;
    const monthlyRate = interestRate / 12;
    const numPayments = loanTerm[0];
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment.toFixed(0);
  };

  const financeOptions = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Traditional Auto Loan",
      description: "Competitive rates with flexible terms up to 84 months",
      features: ["Rates from 2.9% APR", "Up to 84 months", "No prepayment penalty"],
      bestFor: "Good to excellent credit"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Lease Options",
      description: "Lower monthly payments with newest vehicle features",
      features: ["Lower payments", "Warranty coverage", "Upgrade options"],
      bestFor: "Those who like new cars"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Special Financing",
      description: "0% APR promotions and manufacturer incentives",
      features: ["0% APR available", "Cash rebates", "Special programs"],
      bestFor: "Qualified buyers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bad Credit Financing",
      description: "Second chance financing with credit rebuilding",
      features: ["No credit check", "Rebuild credit", "Guaranteed approval"],
      bestFor: "Credit challenges"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Approval",
      description: "Get approved in as little as 10 minutes"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Competitive Rates",
      description: "Best rates in the market from 2.9% APR"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Finance specialists to help you choose"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Flexible Terms",
      description: "Terms from 12 to 84 months available"
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
                Car <span className="text-red-600">Financing</span> Made Easy
              </h1>
              <p className="text-xl body-font mb-8 text-red-600">
                Get pre-approved in minutes with competitive rates starting from 2.9% APR. 
                Flexible terms and expert guidance to fit your budget.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-red-100/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Percent className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-700">From 2.9% APR</span>
                </div>
                <div className="flex items-center space-x-2 bg-red-100/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-700">10 Min Approval</span>
                </div>
              </div>
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3 font-bold transform hover:scale-105 transition-all duration-300">
                <CreditCard className="w-5 h-5 mr-2" />
                Get Pre-Approved
              </Button>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              <div className="bg-red-100/40 backdrop-blur-sm rounded-3xl p-8 border border-red-200">
                <div className="text-center mb-6">
                  <Calculator className="w-16 h-16 mx-auto mb-4 text-red-600" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Loan Calculator</h3>
                  <p className="text-red-600">Estimate your payments</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      ${calculateMonthlyPayment()}
                    </div>
                    <div className="text-sm text-gray-500">Estimated Monthly Payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Payment Calculator</h2>
            <p className="text-xl body-font text-gray-600">Customize your loan terms to see estimated payments</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-3">
                    Vehicle Price: ${loanAmount[0].toLocaleString()}
                  </label>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={100000}
                      min={10000}
                      step={1000}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-3">
                    Down Payment: ${downPayment[0].toLocaleString()}
                  </label>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <Slider
                      value={downPayment}
                      onValueChange={setDownPayment}
                      max={loanAmount[0] * 0.5}
                      min={0}
                      step={500}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-3">
                    Loan Term: {loanTerm[0]} months
                  </label>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={84}
                      min={12}
                      step={12}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-3">
                    Credit Score: {creditScore[0]}
                  </label>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <Slider
                      value={creditScore}
                      onValueChange={setCreditScore}
                      max={850}
                      min={300}
                      step={10}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                <h3 className="text-2xl heading-font text-gray-900 mb-6">Payment Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="body-font text-gray-700">Vehicle Price:</span>
                    <span className="subheading-font text-gray-900">${loanAmount[0].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="body-font text-gray-700">Down Payment:</span>
                    <span className="subheading-font text-gray-900">${downPayment[0].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="body-font text-gray-700">Loan Amount:</span>
                    <span className="subheading-font text-gray-900">${(loanAmount[0] - downPayment[0]).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="body-font text-gray-700">Interest Rate:</span>
                    <span className="subheading-font text-gray-900">
                      {creditScore[0] >= 750 ? '3.5%' : creditScore[0] >= 700 ? '4.5%' : '6.5%'} APR
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-red-600 text-white rounded-xl px-4 mt-6">
                    <span className="text-lg font-bold">Monthly Payment:</span>
                    <span className="text-2xl logo-font">${calculateMonthlyPayment()}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Apply for This Loan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Finance Options</h2>
            <p className="text-xl body-font text-gray-600">Choose the best plan for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financeOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-lg subheading-font text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 body-font text-sm mb-2">{option.description}</p>
                <ul className="text-sm text-gray-700 mb-2 list-disc list-inside">
                  {option.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="text-xs text-red-600 font-semibold">Best for: {option.bestFor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Why Finance With Us?</h2>
            <p className="text-xl body-font text-gray-600">Experience the difference with our premium finance service</p>
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

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Apply for Pre-Approval</h2>
            <p className="text-xl body-font text-gray-600">Get approved in minutes with no impact to your credit score</p>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Annual Income *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Income Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30000-50000">$30,000 - $50,000</SelectItem>
                      <SelectItem value="50000-75000">$50,000 - $75,000</SelectItem>
                      <SelectItem value="75000-100000">$75,000 - $100,000</SelectItem>
                      <SelectItem value="100000+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Employment Status *</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">Full-time Employed</SelectItem>
                      <SelectItem value="self-employed">Self-employed</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Desired Loan Amount *</label>
                  <Input type="number" className="h-12" placeholder="35000" required />
                </div>
                <div>
                  <label className="block text-sm subheading-font text-gray-700 mb-2">Down Payment *</label>
                  <Input type="number" className="h-12" placeholder="7000" required />
                </div>
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg font-bold">
                <CreditCard className="w-5 h-5 mr-2" />
                Get Pre-Approved Now
              </Button>

              <p className="text-center text-sm text-gray-500">
                Secure application • No impact to credit score • Instant decision
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;