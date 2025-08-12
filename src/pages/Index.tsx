import React, { useEffect, useState } from 'react';
import { Car, DollarSign, Import, Users, TrendingUp, Star, Shield, Award, Clock, MapPin, Phone, Mail, Calendar, Gauge, Fuel, Settings, Heart, Eye, MessageCircle, Share2, Sparkles, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCarBrands from '@/components/AnimatedCarBrands';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroCarSlider from '@/components/HeroCarSlider';
import { Link, useNavigate } from 'react-router-dom';
const Index = () => {
  const [counters, setCounters] = useState({
    delivered: 0,
    customers: 0,
    featured: 0
  });
  
  // Add carousel state with slide direction
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right'); // 'left' or 'right'
  
  const heroBanners = [
    {
      id: 1,
      title: "Buy, Sell & Import Services",
      subtitle: "Find Your Perfect Vehicle, Anywhere!",
      description: "Browse, buy, sell, or import cars with ease. All the services you need—seamlessly in one place.",
      buttonText: "View Inventory",
      buttonLink: "/inventory"
    },
    {
      id: 2,
      title: "Sell Your Car",
      subtitle: "Ready to Upgrade? Sell Your Car Fast!",
      description: "Get the best value and a wide audience—list your car today and let buyers come to you.",
      buttonText: "Sell Now",
      buttonLink: "/sell-car"
    },
    {
      id: 3,
      title: "Import Car",
      subtitle: "Dream Car Not Available Here? Import It!",
      description: "We simplify car imports—sourcing, shipping, and customs, all handled with transparent pricing.",
      buttonText: "Import Car",
      buttonLink: "/buy-import-services"
    },
    {
      id: 4,
      title: "7 Days Money Back Guarantee",
      subtitle: "Buy with Total Confidence!",
      description: "Every purchase is backed by our 7-Day Money Back Guarantee. Love it—or return it, no questions asked.",
      buttonText: "Learn More",
      buttonLink: "/about"
    }
  ];

  // Enhanced auto-rotate carousel with smooth transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('right');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBanner(prev => (prev + 1) % heroBanners.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    if (isTransitioning) return;
    setSlideDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBanner(prev => (prev + 1) % heroBanners.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevBanner = () => {
    if (isTransitioning) return;
    setSlideDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBanner(prev => (prev - 1 + heroBanners.length) % heroBanners.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToBanner = (index: number) => {
    if (isTransitioning || index === currentBanner) return;
    setSlideDirection(index > currentBanner ? 'right' : 'left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBanner(index);
      setIsTransitioning(false);
    }, 500);
  };

  // Animation for counters
  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        delivered: 1238,
        customers: 1238,
        featured: 1238
      };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCounters({
          delivered: Math.floor(targets.delivered * easeOut),
          customers: Math.floor(targets.customers * easeOut),
          featured: Math.floor(targets.featured * easeOut)
        });
        if (step >= steps) clearInterval(timer);
      }, increment);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    });
    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);
  const featuredCars = [
    {
      id: 1001,
      name: 'TESLA Model X Dual Motor & Long Range',
      year: '2018',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Tesla Model X/1.jpg',
      specs: {
        engine: 'Electric Power 350 kW (469 hp)',
        fuel: 'Electric',
        mileage: '33,500 km',
        transmission: 'AWD/4WD'
      },
      badge: 'Premium Electric SUV',
      location: 'Un-Registered, Import from Japan',
      rating: 5.0,
      reviews: 150,
      features: ['7 Seater', '450 Km Range', 'Smart Air Suspension', 'AWD Drivetrain']
    },
    {
      id: 1002,
      name: 'TESLA Model X Dual Motor & Long Range (Grey)',
      year: '2018',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Tesla Model X Grey/1.jpg',
      specs: {
        engine: 'Electric Power 350 kW (469 hp)',
        fuel: 'Electric',
        mileage: '33,500 km',
        transmission: 'AWD/4WD'
      },
      badge: 'Premium Electric SUV',
      location: 'Un-Registered, Import from Japan',
      rating: 5.0,
      reviews: 120,
      features: ['7 Seater', '450 Km Range', 'Smart Air Suspension', 'AWD Drivetrain']
    },
    {
      id: 1003,
      name: 'Toyota Prius HEV',
      year: '2023',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Toyota Prius/1.jpg',
      specs: {
        engine: 'Hybrid System Net Power 194 hp',
        fuel: 'Hybrid',
        mileage: '8,000 km',
        transmission: 'ECVT'
      },
      badge: 'Premium Hybrid',
      location: 'Punjab',
      rating: 4.9,
      reviews: 200,
      features: ['Hybrid Technology', 'Fuel Efficient', 'Modern Design', 'Advanced Safety']
    },
    {
      id: 1004,
      name: 'Toyota Raize Z',
      year: '2020',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Toyota Raize XS - 2020/1.jpg',
      specs: {
        engine: 'Top of the Line Z Package',
        fuel: 'Petrol',
        mileage: '56,610 km',
        transmission: 'Automatic'
      },
      badge: 'Premium SUV',
      location: 'Un-Registered, Import from Japan',
      rating: 4.8,
      reviews: 180,
      features: ['4.5 Grade Auction', '360 Cameras', 'TOYOTA Safety Sense', '18-20 Km/L']
    },
    {
      id: 1005,
      name: 'Honda Civic Oriel 1.8 i-VTEC',
      year: '2018',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Civic/1.jpg',
      specs: {
        engine: '1.8L - X UG Leather Package',
        fuel: 'Petrol',
        mileage: '31,000 km',
        transmission: 'Automatic'
      },
      badge: 'Premium Sedan',
      location: 'Punjab',
      rating: 4.7,
      reviews: 250,
      features: ['Sunroof', 'Push Start', 'Smart Entry', 'Leather Package']
    },
    {
      id: 1006,
      name: 'Nissan Kicks',
      year: '2021',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Nissan kicks/10.jpg',
      specs: {
        engine: '1300 cc',
        fuel: 'Petrol',
        mileage: '42,000 km',
        transmission: 'Automatic'
      },
      badge: 'Premium Crossover',
      location: 'Punjab',
      rating: 4.6,
      reviews: 160,
      features: ['Imported Assembly', 'White Color', 'Crossover Design', 'Modern Features']
    },
    {
      id: 1007,
      name: 'Toyota Aqua S',
      year: '2020',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/toyota aqua prius/7.jpg',
      specs: {
        engine: '1500 cc',
        fuel: 'Hybrid',
        mileage: '108,500 km',
        transmission: 'Automatic'
      },
      badge: 'Premium Hybrid',
      location: 'Un-Registered, Import from Japan',
      rating: 4.8,
      reviews: 140,
      features: ['4 Grade Auction', '30 KM/L Mileage', 'Hybrid Technology', 'Import 2024']
    },
    {
      id: 1008,
      name: 'Toyota Corolla Altis Grande X CVT-i 1.8',
      year: '2021',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Toyota Corolla grande/6.jpg',
      specs: {
        engine: '1800 cc',
        fuel: 'Petrol',
        mileage: '45,000 km',
        transmission: 'CVT-i'
      },
      badge: 'Premium Sedan',
      location: 'Punjab',
      rating: 4.9,
      reviews: 220,
      features: ['Sunroof', 'White with Beige Interior', 'Local Assembly', 'CVT Transmission']
    },
    {
      id: 1009,
      name: 'Toyota Prado TX L Package 2.7',
      year: '2010',
      price: 'Call for Price',
      originalPrice: 'Call for Price',
      image: '/Toyota Land Cruser/2.jpg',
      specs: {
        engine: '2700 cc',
        fuel: 'Petrol',
        mileage: '89,000 km',
        transmission: 'Automatic'
      },
      badge: 'Premium SUV',
      location: 'Punjab',
      rating: 4.7,
      reviews: 180,
      features: ['TX L Package', 'Uplifted to 2018 Model', 'Verified Auction Sheet', 'Imported Assembly']
    }
  ];
  const services = [{
    icon: <Car className="w-12 h-12" />,
    title: "Premium Car Sales",
    description: "Discover our extensive collection of luxury and premium vehicles from top brands worldwide.",
    features: ["Quality Certified", "Warranty Included", "Test Drive Available"]
  }, {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Sell Your Vehicle",
    description: "Get the best market value for your car with our professional evaluation and quick sale process.",
    features: ["Free Valuation", "Quick Process", "Best Price Guarantee"]
  }, {
    icon: <Import className="w-12 h-12" />,
    title: "Import Services",
    description: "Professional car importing services from international markets with full documentation support.",
    features: ["Global Network", "Full Documentation", "Customs Clearance"]
  }];
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Business Executive',
    review: 'Exceptional service and incredible car selection. The team helped me find my dream BMW within just a few days!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
    location: 'New York'
  }, {
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    review: 'Professional staff, transparent pricing, and excellent after-sales support. Highly recommend 3RE Motors!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
    location: 'San Francisco'
  }, {
    name: 'Emma Davis',
    role: 'Marketing Director',
    review: 'Smooth buying process from start to finish. The financing options were flexible and competitive.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
    location: 'Miami'
  }];
  const whyChooseUs = [{
    icon: <Shield className="w-12 h-12" />,
    title: "Certified Quality Assurance",
    description: "Every vehicle undergoes our comprehensive 200-point inspection process and comes with extended warranty coverage.",
    features: ["200-Point Inspection", "Extended Warranty", "Quality Guarantee", "Certified Mechanics"],
    stats: "99.8% Customer Satisfaction"
  }, {
    icon: <Award className="w-12 h-12" />,
    title: "Award Winning Service",
    description: "Recognized industry leader with multiple national awards for excellence in customer service and automotive sales.",
    features: ["24/7 Customer Support", "Expert Consultation", "Industry Recognition", "Professional Team"],
    stats: "15+ Industry Awards"
  }, {
    icon: <Clock className="w-12 h-12" />,
    title: "Lightning Fast Delivery",
    description: "Express delivery service with nationwide coverage to get you on the road as quickly as possible.",
    features: ["Same Day Delivery", "Nationwide Coverage", "Express Service", "Real-time Tracking"],
    stats: "Average 24hr Delivery"
  }];
  // Use actual cars from cars.ts for heroCars
  const heroCars = [
    { name: 'Tesla Model X', img: '/Tesla Model X/1.jpg', badgeColor: 'bg-black/80 border-red-400 text-red-200', shadow: 'drop-shadow-xl' },
    { name: 'Toyota Prius HEV', img: '/Toyota Prius/1.jpg', badgeColor: 'bg-black/80 border-green-400 text-green-200', shadow: 'drop-shadow-xl' },
    { name: 'Toyota Raize Z', img: '/Toyota Raize XS - 2020/1.jpg', badgeColor: 'bg-black/80 border-blue-400 text-blue-200', shadow: 'drop-shadow-xl' },
    { name: 'Honda Civic', img: '/Civic/1.jpg', badgeColor: 'bg-black/80 border-silver-400 text-silver-200', shadow: 'drop-shadow-xl' },
    { name: 'Nissan Kicks', img: '/Nissan kicks/10.jpg', badgeColor: 'bg-black/80 border-white-400 text-white-200', shadow: 'drop-shadow-xl' },
    { name: 'Toyota Corolla Grande', img: '/Toyota Corolla grande/6.jpg', badgeColor: 'bg-black/80 border-gray-400 text-gray-200', shadow: 'drop-shadow-xl' },
    { name: 'Toyota Aqua S', img: '/toyota aqua prius/7.jpg', badgeColor: 'bg-black/80 border-silver-400 text-silver-200', shadow: 'drop-shadow-xl' },
    { name: 'Toyota Prado', img: '/Toyota Land Cruser/2.jpg', badgeColor: 'bg-black/80 border-white-400 text-white-200', shadow: 'drop-shadow-xl' },
  ];
  // Add state for search
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const [heroSearch, setHeroSearch] = useState("");
  // Compute filteredCars in Index
  const filteredCars = search.trim()
    ? heroCars.filter(car => car.name.toLowerCase().includes(search.trim().toLowerCase()))
    : heroCars;
  // Add filteredFeaturedCars for Premium Vehicles section
  const filteredFeaturedCars = search.trim()
    ? featuredCars.filter(car => car.name.toLowerCase().includes(search.trim().toLowerCase()))
    : featuredCars;
  // Add this filtered array for home page search results
  const filteredHomeCars = heroSearch.trim()
    ? featuredCars.filter(car =>
        car.name.toLowerCase().includes(heroSearch.trim().toLowerCase()) ||
        car.specs.engine.toLowerCase().includes(heroSearch.trim().toLowerCase()) ||
        car.specs.fuel.toLowerCase().includes(heroSearch.trim().toLowerCase()) ||
        car.badge.toLowerCase().includes(heroSearch.trim().toLowerCase())
      )
    : [];
  // Replace AnimatedHeroCars with a grid display
  function HeroCarsGrid({ cars }) {
    const [start, setStart] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setStart((prev) => (prev + 4) % cars.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [cars.length]);
    const carsToShow = [];
    for (let i = 0; i < 4; i++) {
      const car = cars[(start + i) % cars.length];
      if (car) carsToShow.push(car);
    }
    if (carsToShow.length === 0) {
      return <div className="text-center text-xl text-red-600 py-12">No cars found.</div>;
    }
    return (
      <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
        {carsToShow.map((car, idx) => (
          <div key={car.name + idx} className="flex flex-col items-center justify-end">
            <div className={`w-[320px] h-[200px] rounded-2xl flex items-center justify-center ${car.shadow} mb-2 relative`}>
              <div className="absolute inset-0 z-0 rounded-2xl bg-red-600 blur-2xl opacity-40"></div>
              <img
                src={car.img}
                alt={car.name}
                className="object-contain w-full h-full relative z-10"
                style={{ maxHeight: '180px' }}
              />
            </div>
            <div className={`px-4 py-1 rounded-full font-bold text-lg tracking-wide shadow border-2 ${car.badgeColor}`}>{car.name}</div>
          </div>
        ))}
      </div>
    );
  }
  const aboutSection = (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                About 3RE Motors
              </span>
              <h2 className="text-4xl heading-font text-gray-900 mb-6">Your Trusted Automotive Partner Since 2015</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At 3RE Motors, we've been revolutionizing the car buying experience for over 8 years. Our commitment to excellence, 
                transparency, and customer satisfaction has made us the preferred choice for thousands of car enthusiasts nationwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From luxury sedans to rugged SUVs, electric vehicles to classic sports cars, we offer an unparalleled selection 
                of premium automobiles. Every vehicle in our inventory undergoes rigorous quality checks and comes with our 
                comprehensive warranty coverage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">8+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-700">Premium Brands</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-700">Customer Support</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
                <div className="text-gray-700">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/showroom.jpg" alt="Modern car showroom" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Industry Leader</div>
                  <div className="text-sm text-gray-600">Award Winning Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[420px] flex items-stretch bg-[#1a2236] overflow-hidden">
        {/* Left Carousel Navigation */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
          <button 
            className={`bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:bg-white/40'
            }`}
            onClick={prevBanner}
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Right Carousel Navigation */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
          <button 
            className={`bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:bg-white/40'
            }`}
            onClick={nextBanner}
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroBanners.map((banner, index) => (
            <button
              key={banner.id}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentBanner 
                  ? 'bg-red-600 scale-125 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50 hover:scale-110'
              }`}
              onClick={() => goToBanner(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <div 
            className="h-full bg-red-600 transition-all duration-300 ease-linear"
            style={{ 
              width: `${((currentBanner + 1) / heroBanners.length) * 100}%`,
              transition: isTransitioning ? 'none' : 'width 6s linear'
            }}
          />
        </div>

        {/* Single Red angled stripe */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 flex items-start">
          <div
            className="w-24 h-[420px] bg-red-600"
            style={{
              transform: 'rotate(-22deg) translate(-30px, -40px)',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          />
        </div>

        {/* Large semi-transparent 3RE */}
        <div className="absolute inset-0 flex items-center justify-end z-0 pointer-events-none select-none">
          <span
            style={{
              fontSize: '350px',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.04)',
              letterSpacing: '-0.1em',
              marginRight: '60px',
              fontFamily: 'Montserrat, Poppins, Nunito Sans, Arial, sans-serif',
              lineHeight: 1,
            }}
          >
            3RE
          </span>
        </div>

        {/* Main content with beautiful slide animations */}
        <div className="relative z-20 flex-1 flex flex-col justify-center pl-40 md:pl-56 overflow-hidden">
          <div className={`transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? slideDirection === 'right'
                ? 'opacity-0 transform translate-x-full scale-95' 
                : 'opacity-0 transform -translate-x-full scale-95'
              : 'opacity-100 transform translate-x-0 scale-100'
          }`}>
            <h1 className="text-white text-2xl md:text-4xl font-extrabold uppercase mb-4 tracking-wide drop-shadow-lg leading-tight">
              {heroBanners[currentBanner].title}
            </h1>
            <h2 className="text-red-400 text-lg md:text-2xl font-bold mb-4 tracking-wide drop-shadow-lg">
              {heroBanners[currentBanner].subtitle}
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
              {heroBanners[currentBanner].description}
            </p>
            <a
              href={heroBanners[currentBanner].buttonLink}
              className="bg-red-600 text-white px-8 py-3 rounded font-bold shadow hover:bg-red-700 transition-all duration-300 w-max text-lg hover:scale-105 hover:shadow-xl"
              style={{ marginLeft: '4px' }}
            >
              {heroBanners[currentBanner].buttonText}
            </a>
          </div>
        </div>

        {/* Car image with slide animation */}
        <div className="relative z-20 flex-1 flex items-end justify-end pr-16 overflow-hidden">
          <img
            src="/Car.png"
            alt="Car"
            className={`w-[420px] h-auto object-contain drop-shadow-2xl transition-all duration-500 ${
              isTransitioning 
                ? slideDirection === 'right'
                  ? 'opacity-50 transform translate-x-8 scale-95' 
                  : 'opacity-50 transform -translate-x-8 scale-95'
                : 'opacity-100 transform translate-x-0 scale-100'
            }`}
            style={{ maxHeight: 300 }}
          />
        </div>
      </section>

      {/* Bottom search bar */}
      <section className="bg-[#e9eef4] py-8 border-t border-gray-200">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-bold text-lg md:text-2xl mb-4 text-center tracking-wide text-[#1a2236]">
            YOU CHOOSE YOUR CAR ONLINE. WE DELIVER IT.
          </h2>
          <form className="flex w-full max-w-xl gap-2" onSubmit={e => {
            e.preventDefault();
            if (heroSearch.trim()) {
              navigate(`/inventory?search=${encodeURIComponent(heroSearch.trim())}`);
            } else {
              navigate('/inventory');
            }
          }}>
            <input
              type="text"
              placeholder="Enter Make, Model Or Body Style"
              className="flex-1 px-4 py-2 rounded-l border border-gray-300 focus:outline-none"
              value={heroSearch}
              onChange={e => setHeroSearch(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-r bg-red-600 text-white font-bold"
            >
              Find Your Car
            </button>
          </form>
          {/* Show search results below the search bar if there is a search */}
          {heroSearch.trim() && (
            <div className="w-full mt-8">
              {filteredHomeCars.length === 0 ? (
                <div className="text-center text-red-600 text-lg font-semibold">No cars found.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredHomeCars.map(car => (
                    <div key={car.id} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4 items-center">
                      <img src={car.image} alt={car.name} className="w-32 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg">{car.name}</div>
                        <div className="text-gray-600 text-sm">{car.specs.engine} | {car.specs.fuel} | {car.badge}</div>
                        <div className="text-red-600 font-bold mt-1">{car.price}</div>
                      </div>
                      <Link to={`/car/${car.id}`} className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-red-700 transition">View Details</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Four Feature Boxes Section */}
      <section className="w-full flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {/* Buy New One */}
          <div className="bg-[#e3342f] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">BUY NEW ONE</h3>
            <p className="text-white text-sm md:text-base mb-6">Multiple inspections. Free CARFAX® history report. Free limited warranty.</p>
            <a href="/inventory" className="bg-[#19233a] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-black transition">View Inventory</a>
          </div>
          {/* Sell Your Car */}
          <div className="bg-[#19233a] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">SELL YOUR CAR</h3>
            <p className="text-white text-sm md:text-base mb-6">No haggling. No hassles. An easy and efficient car buying process— the way it should be.</p>
            <a href="/contact" className="bg-[#e3342f] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-red-700 transition">Contact Us</a>
          </div>
          {/* Import Cars */}
          <div className="bg-[#a3a9ad] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">IMPORT CARS</h3>
            <p className="text-white text-sm md:text-base mb-6">Get your car or truck shipped to your home or a convenient nearby location.</p>
            <a href="/contact" className="bg-[#19233a] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-black transition">Submit Detail</a>
          </div>
          {/* Escrow Service */}
          <div className="bg-[#dc2626] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">ESCROW SERVICE</h3>
            <p className="text-white text-sm md:text-base mb-6">Secure payment protection for vehicle transactions. Buy and sell with complete confidence.</p>
            <a href="/escrow-service" className="bg-[#19233a] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-black transition">Learn More</a>
          </div>
        </div>
      </section>

      {/* Premium Vehicles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Featured Collection
            </span>
            <h2 className="text-5xl heading-font text-gray-900 mb-6">Premium Vehicles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of luxury and performance vehicles, each one carefully inspected and certified for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredFeaturedCars.length === 0 ? (
              <div className="col-span-full text-center text-xl text-red-600 py-12">
                No cars found.
              </div>
            ) : (
              filteredFeaturedCars.map((car, index) => (
                <Link key={car.id} to={`/car/${car.id}`} className="block group">
                  <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden w-full mx-auto flex flex-col cursor-pointer transition-transform group-hover:shadow-lg group-hover:scale-105">
                    {/* Featured Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">Featured</span>
                    </div>
                    {/* Car Image */}
                    <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-red-500 font-semibold mb-1">{car.name.split(' ')[0]}</div>
                        <div className="font-bold text-gray-900 mb-2 leading-tight text-sm md:text-base">{car.name}</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-600 mb-2">
                          <div className="flex items-center gap-1"><span>⛽</span>{car.specs.fuel}</div>
                          <div className="flex items-center gap-1"><span>🔧</span>{car.specs.engine}</div>
                          <div className="flex items-center gap-1"><span>🛣️</span>{car.specs.mileage}</div>
                          <div className="flex items-center gap-1"><span>🚗</span>{car.badge}</div>
                          <div className="flex items-center gap-1"><span>🎨</span>Silver</div>
                        </div>
                      </div>
                      <div className="font-bold text-lg text-red-600 mt-2">{car.price}</div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="text-center mt-16">
            <Link to="/inventory">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                View All 500+ Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3RE MOTORS VALUES Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 tracking-wide">3RE MOTORS VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-50 border border-gray-200 rounded-xl p-6">
            <div className="text-xs text-red-500 font-bold mb-1">Price</div>
            <div className="font-bold text-lg text-gray-900 mb-1">No haggling. No pressure.</div>
            <div className="text-gray-600 text-sm">We've eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-xs text-red-500 font-bold mb-1">Reconditioning</div>
            <div className="font-bold text-lg text-gray-900 mb-1">Multiple Inspections</div>
            <div className="text-gray-600 text-sm">Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.</div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-xs text-red-500 font-bold mb-1">Finance</div>
            <div className="font-bold text-lg text-gray-900 mb-1">Get a Competitive Rate</div>
            <div className="text-gray-600 text-sm">We've eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</div>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-xs text-red-500 font-bold mb-1">Delivery to you</div>
            <div className="font-bold text-lg text-gray-900 mb-1">Delivery Straight to You</div>
            <div className="text-gray-600 text-sm">Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.</div>
          </div>
          {/* Card 5 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-xs text-red-500 font-bold mb-1">7 Days Returns</div>
            <div className="font-bold text-lg text-gray-900 mb-1">7 Days to Decide</div>
            <div className="text-gray-600 text-sm">We've eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</div>
          </div>
          {/* Card 6 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-xs text-red-500 font-bold mb-1">Coverage</div>
            <div className="font-bold text-lg text-gray-900 mb-1">Free Limited Warranty</div>
            <div className="text-gray-600 text-sm">Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.</div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-5xl heading-font text-gray-900 mb-6">Complete Automotive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium car sales to professional importing services, we provide comprehensive automotive solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white text-gray-900">
                <div className="h-2 bg-gradient-to-r from-red-100 via-white to-gray-100"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 via-white to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-red-600">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-red-600 transition-colors text-gray-900 font-bold drop-shadow-lg">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-red-200 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-4">
              Why Choose 3RE Motors?
            </span>
            <h2 className="text-5xl heading-font mb-6">Excellence in Every Detail</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover why thousands of customers trust us with their automotive needs. We deliver exceptional service, quality vehicles, and unmatched satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => <Card key={index} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl subheading-font text-white group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mt-2">
                    {item.stats}
                  </div>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-3 justify-center animate-fade-in" style={{
                  animationDelay: `${featureIndex * 100}ms`
                }}>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300 font-medium">{feature}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl font-bold mb-2 logo-font">{counters.delivered.toLocaleString()}+</div>
              <div className="text-xl">Cars Delivered</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl font-bold mb-2 logo-font">{counters.customers.toLocaleString()}+</div>
              <div className="text-xl">Active Customers</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl font-bold mb-2 logo-font">{counters.featured.toLocaleString()}+</div>
              <div className="text-xl">Featured Ads</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      {aboutSection}

      {/* Animated Car Brands */}
      <AnimatedCarBrands />

      {/* Shop Popular Models Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900 mb-4 uppercase text-center" style={{letterSpacing: '0.02em'}}>SHOP POPULAR MODELS</h2>
          <div className="flex justify-center mb-10">
            <div className="h-1 w-24 bg-red-500 rounded-full"></div>
          </div>
          <div className="rounded-2xl shadow-xl bg-white/90 p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-12 text-lg">
            <div className="space-y-2 text-gray-500 font-medium">
              <div>Acura MDX</div>
              <div>Audi Q5</div>
              <div>BMW 4-Series</div>
              <div>Chevrolet Camaro</div>
              <div>Chevrolet Corvette</div>
              <div>Chevrolet Silverado 1500</div>
            </div>
            <div className="space-y-2 text-gray-500 font-medium">
              <div>Chevrolet Tahoe</div>
              <div>Dodge Challenger</div>
              <div>Dodge Charger</div>
              <div>Ford Explorer</div>
              <div>Ford F-150</div>
              <div>Ford F-250 Super-Duty</div>
            </div>
            <div className="space-y-2 text-gray-500 font-medium">
              <div>Jeep Grand-Cherokee</div>
              <div>Jeep Wrangler</div>
              <div>Jeep Wrangler Unlimited</div>
              <div>Lexus RX-350</div>
              <div>Mazda CX-5</div>
              <div>Nissan Maxima</div>
            </div>
            <div className="space-y-2 text-gray-500 font-medium">
              <div>Jeep Grand-Cherokee</div>
              <div>Jeep Wrangler</div>
              <div>Jeep Wrangler Unlimited</div>
              <div>Lexus RX-350</div>
              <div>Mazda CX-5</div>
              <div>Nissan Maxima</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Customer Reviews */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Customer Reviews
            </span>
            <h2 className="text-5xl heading-font text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers who found their perfect vehicles with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 modern-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-4 border-red-100" />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-xs">{testimonial.location}</div>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.review}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            Ready to Get Started?
          </span>
          <h2 className="text-5xl heading-font text-gray-900 mb-6">Find Your Perfect Car Today</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with our expert team and discover why thousands of customers choose 3RE Motors for their automotive needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us Now</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email Support</h3>
                <p className="text-gray-600">info@3remotors.com</p>
                <p className="text-sm text-gray-500">Quick Response</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Visit Showroom</h3>
                <p className="text-gray-600">123 Auto Plaza</p>
                <p className="text-sm text-gray-500">Car City, State</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300 glow-button">
              Schedule Test Drive
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300">
              Get Financing Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;