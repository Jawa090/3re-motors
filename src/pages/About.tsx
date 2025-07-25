import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Award, Users, Clock, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Integrity",
      description: "We build lasting relationships through honest dealings and transparent processes."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, from sales to after-care."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to meet your needs."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliability",
      description: "Count on us for timely delivery and consistent quality in all our services."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace technology and innovation to provide better automotive solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Our love for automobiles drives us to help you find the perfect vehicle."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl logo-font mb-6 animate-fade-in">
            About <span className="text-red-400">3RE Motors</span>
          </h1>
          <p className="text-xl md:text-2xl body-font max-w-3xl mx-auto animate-fade-in delay-300">
            Your trusted automotive partner with years of experience in selling, purchasing, and importing quality vehicles.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span className="font-semibold">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Award Winning Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl heading-font text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 body-font text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the automotive industry, 3RE Motors has grown from a small local dealership to a trusted name in vehicle sales, purchases, and import services.
                </p>
                <p>
                  Our journey began with a simple belief: every customer deserves exceptional service and access to quality vehicles at competitive prices. Over the years, we've built strong relationships with customers, suppliers, and partners worldwide.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers, offering comprehensive automotive solutions that exceed expectations. Our commitment to excellence and customer satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562141961-da5c89ed3229?w=600&h=400&fit=crop" 
                alt="3RE Motors Showroom" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl">
                <div className="text-3xl logo-font">15+</div>
                <div className="subheading-font">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl body-font text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <div className="text-red-600 group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl subheading-font text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 body-font leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl heading-font text-gray-900 mb-6">Our Promise to You</h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">At 3RE Motors, we are committed to delivering not just cars, but peace of mind, trust, and a truly premium experience. Here’s what sets us apart:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <Shield className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Certified Quality</h3>
              <p className="text-gray-600">Every vehicle is thoroughly inspected and certified for your safety and satisfaction.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <Award className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Award-Winning Service</h3>
              <p className="text-gray-600">Our team is recognized for excellence and customer care, making your journey seamless.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <Heart className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Customer-First Approach</h3>
              <p className="text-gray-600">We listen, we care, and we deliver solutions tailored to your needs and dreams.</p>
            </div>
          </div>
          <blockquote className="max-w-2xl mx-auto text-xl italic text-gray-700 border-l-4 border-red-600 pl-6 py-6 bg-white/60 rounded-xl shadow animate-fade-in">
            “Buying my car from 3RE Motors was the best decision I made. The team was professional, honest, and truly cared about my needs.”<br/>
            <span className="block mt-4 text-base font-semibold text-red-600">— A Satisfied Customer</span>
          </blockquote>
        </div>
      </section>

      {/* Beautiful Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-font text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl body-font text-gray-600">The passionate people behind 3RE Motors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                name: "Usman Chaudhry",
                role: "Owner & CEO",
                image: "/usman.jpg",
                description: "Visionary owner and chief executive, leading 3RE Motors with passion and integrity."
              },
              {
                name: "Muhammad Raiyan",
                role: "COO",
                image: "/ryan.jpg",
                description: "Chief Operating Officer ensuring smooth operations and exceptional customer experience."
              },
              {
                name: "Daniyal Hassan",
                role: "Director Sales & Marketing",
                image: "/dnyal.jpg",
                description: "Driving growth and brand excellence through innovative sales and marketing strategies."
              },
              {
                name: "Asif Suleman Saigal",
                role: "Head of Accounts",
                image: "/asif.jpg",
                description: "Managing finances with precision and ensuring transparency in all transactions."
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Profile Image with border and subtle ring */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-red-100 via-white to-gray-200 flex items-center justify-center shadow-inner border-4 border-red-100 group-hover:border-red-400 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover object-center border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 bg-gray-100"
                      style={{ background: "#fff", objectFit: "cover" }}
                    />
                  </div>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow">
                    {member.role}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-center mb-2">{member.description}</p>
                {/* Social icons (example, replace with real links if needed) */}
                <div className="flex gap-3 mt-2">
                  <a href="#" className="text-red-400 hover:text-red-600 transition" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg>
                  </a>
                  <a href="#" className="text-red-400 hover:text-red-600 transition" aria-label="Email">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
                  </a>
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

export default About;
