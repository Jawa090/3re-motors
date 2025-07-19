import React, { useEffect, useState } from 'react';
import { Car, DollarSign, Import, Users, TrendingUp, Star, Shield, Award, Clock, MapPin, Phone, Mail, Calendar, Gauge, Fuel, Settings, Heart, Eye, MessageCircle, Share2, Sparkles, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCarBrands from '@/components/AnimatedCarBrands';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroCarSlider from '@/components/HeroCarSlider';
import { Link } from 'react-router-dom';
const Index = () => {
  const [counters, setCounters] = useState({
    delivered: 0,
    customers: 0,
    featured: 0
  });

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
      id: 1,
      name: 'Toyota Fortuner',
      year: '2024',
      price: 'PKR 18,000,000',
      originalPrice: 'PKR 19,000,000',
      image: '/toyta.avif',
      specs: {
        engine: '2.7L Petrol',
        fuel: 'Petrol',
        mileage: '15,000 km',
        transmission: 'Automatic'
      },
      badge: 'Premium SUV',
      location: 'Lahore, Pakistan',
      rating: 4.9,
      reviews: 120,
      features: ['7 Seater', 'Push Start', 'Cruise Control', 'Touchscreen Display']
    },
    {
      id: 2,
      name: 'Toyota Land Cruiser',
      year: '2023',
      price: 'PKR 55,000,000',
      originalPrice: 'PKR 58,000,000',
      image: '/land.jpg',
      specs: {
        engine: '4.5L Diesel',
        fuel: 'Diesel',
        mileage: '22,000 km',
        transmission: 'Automatic'
      },
      badge: 'Luxury SUV',
      location: 'Karachi, Pakistan',
      rating: 5.0,
      reviews: 98,
      features: ['Sunroof', 'Leather Seats', '4x4', 'Rear Entertainment']
    },
    {
      id: 3,
      name: 'Tesla Model S',
      year: '2024',
      price: 'PKR 32,000,000',
      originalPrice: 'PKR 34,000,000',
      image: 'teslamodal.avif',
      specs: {
        engine: 'Electric',
        fuel: 'Electric',
        mileage: '5,000 km',
        transmission: 'Automatic'
      },
      badge: 'Electric',
      location: 'Islamabad, Pakistan',
      rating: 4.8,
      reviews: 45,
      features: ['Autopilot', 'Long Range', 'Premium Audio', 'Touchscreen']
    },
    {
      id: 4,
      name: 'Honda Civic',
      year: '2023',
      price: 'PKR 8,500,000',
      originalPrice: 'PKR 9,000,000',
      image: '/civic.avif',
      specs: {
        engine: '1.5L Turbo',
        fuel: 'Petrol',
        mileage: '10,000 km',
        transmission: 'CVT'
      },
      badge: 'Sedan',
      location: 'Lahore, Pakistan',
      rating: 4.7,
      reviews: 210,
      features: ['Turbo Engine', 'Climate Control', 'Alloy Wheels', 'Rear Camera']
    },
    {
      id: 5,
      name: 'Toyota Corolla Grande',
      year: '2023',
      price: 'PKR 7,200,000',
      originalPrice: 'PKR 7,500,000',
      image: '/grande.jpg',
      specs: {
        engine: '1.8L Petrol',
        fuel: 'Petrol',
        mileage: '8,000 km',
        transmission: 'Automatic'
      },
      badge: 'Popular',
      location: 'Faisalabad, Pakistan',
      rating: 4.6,
      reviews: 180,
      features: ['Sunroof', 'Cruise Control', 'Push Start', 'Touchscreen']
    },
    {
      id: 6,
      name: 'Suzuki Alto',
      year: '2024',
      price: 'PKR 2,500,000',
      originalPrice: 'PKR 2,700,000',
      image: '/alto.webp',
      specs: {
        engine: '660cc',
        fuel: 'Petrol',
        mileage: '3,000 km',
        transmission: 'Automatic'
      },
      badge: 'Economy',
      location: 'Multan, Pakistan',
      rating: 4.5,
      reviews: 300,
      features: ['Fuel Efficient', 'Power Steering', 'Air Conditioning', 'ABS']
    },
    {
      id: 7,
      name: 'Kia Sportage',
      year: '2023',
      price: 'PKR 8,000,000',
      originalPrice: 'PKR 8,300,000',
      image: '/kiaaa.avif',
      specs: {
        engine: '2.0L Petrol',
        fuel: 'Petrol',
        mileage: '12,000 km',
        transmission: 'Automatic'
      },
      badge: 'SUV',
      location: 'Karachi, Pakistan',
      rating: 4.7,
      reviews: 160,
      features: ['AWD', 'Panoramic Sunroof', 'Infotainment', 'LED Headlamps']
    },
    {
      id: 8,
      name: 'MG HS',
      year: '2023',
      price: 'PKR 8,200,000',
      originalPrice: 'PKR 8,500,000',
      image: '/Mg.jpg',
      specs: {
        engine: '1.5L Turbo',
        fuel: 'Petrol',
        mileage: '7,000 km',
        transmission: 'Automatic'
      },
      badge: 'Crossover',
      location: 'Islamabad, Pakistan',
      rating: 4.6,
      reviews: 90,
      features: ['Panoramic Roof', 'Leather Seats', '360 Camera', 'Cruise Control']
    },
    {
      id: 9,
      name: 'Honda City',
      year: '2023',
      price: 'PKR 5,500,000',
      originalPrice: 'PKR 5,700,000',
      image: '/city.webp',
      specs: {
        engine: '1.2L Petrol',
        fuel: 'Petrol',
        mileage: '6,000 km',
        transmission: 'Automatic'
      },
      badge: 'Sedan',
      location: 'Lahore, Pakistan',
      rating: 4.5,
      reviews: 140,
      features: ['Eco Mode', 'Touchscreen', 'ABS', 'Rear Camera']
    },
    {
      id: 10,
      name: 'Hyundai Tucson',
      year: '2023',
      price: 'PKR 9,000,000',
      originalPrice: 'PKR 9,300,000',
      image: 'tucson.avif',
      specs: {
        engine: '2.0L Petrol',
        fuel: 'Petrol',
        mileage: '9,000 km',
        transmission: 'Automatic'
      },
      badge: 'SUV',
      location: 'Karachi, Pakistan',
      rating: 4.7,
      reviews: 110,
      features: ['AWD', 'Smart Trunk', 'Panoramic Roof', 'LED Lights']
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
  // Use local images from public folder for heroCars
  const heroCars = [
    { name: 'Audi A4', img: '/Audi-A4.png', badgeColor: 'bg-black/80 border-purple-400 text-purple-200', shadow: 'drop-shadow-xl' },
    { name: 'Chevrolet Camaro', img: '/camaro.png', badgeColor: 'bg-black/80 border-yellow-200 text-yellow-100', shadow: 'drop-shadow-xl' },
    { name: 'Ford Mustang', img: '/Ford Mustang.png', badgeColor: 'bg-black/80 border-yellow-300 text-yellow-200', shadow: 'drop-shadow-xl' },
    { name: 'Honda Civic', img: '/Honda-Civic.png', badgeColor: 'bg-black/80 border-blue-400 text-blue-200', shadow: 'drop-shadow-xl' },
    { name: 'Lexus ES', img: '/Lexus ES.png', badgeColor: 'bg-black/80 border-indigo-400 text-indigo-200', shadow: 'drop-shadow-xl' },
    { name: 'Mercedes Benz C-Class', img: '/Mercedes-Benz-C-Class-White.png', badgeColor: 'bg-black/80 border-gray-300 text-gray-100', shadow: 'drop-shadow-xl' },
    { name: 'Porsche 911', img: '/Porche 911.webp', badgeColor: 'bg-black/80 border-pink-400 text-pink-200', shadow: 'drop-shadow-xl' },
    { name: 'Range Rover', img: '/Range Rover.png', badgeColor: 'bg-black/80 border-green-300 text-green-100', shadow: 'drop-shadow-xl' },
    { name: 'Tesla Model S', img: '/Tesla Model S.png', badgeColor: 'bg-black/80 border-red-300 text-red-100', shadow: 'drop-shadow-xl' },
  ];
  // Add state for search
  const [search, setSearch] = React.useState("");
  // Compute filteredCars in Index
  const filteredCars = search.trim()
    ? heroCars.filter(car => car.name.toLowerCase().includes(search.trim().toLowerCase()))
    : heroCars;
  // Add filteredFeaturedCars for Premium Vehicles section
  const filteredFeaturedCars = search.trim()
    ? featuredCars.filter(car => car.name.toLowerCase().includes(search.trim().toLowerCase()))
    : featuredCars;
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
            <img src="https://images.unsplash.com/photo-1562141961-5cb7cafd8deb?w=600&h=400&fit=crop" alt="Modern car showroom" className="rounded-2xl shadow-2xl" />
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Main Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            {/* Left Column - Tightly Stacked, Left-Aligned Text Content */}
            <div className="relative text-left space-y-2 max-w-lg w-full">
              {/* Premium Badge with Gold Gradient, Border, and Icons */}
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-red-600 via-red-700 to-black border-2 border-red-600 rounded-full shadow-lg backdrop-blur-sm">
                  <Award className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                  <span className="text-red-100 font-bold tracking-wide uppercase text-sm drop-shadow">PREMIUM AUTOMOTIVE DEALER</span>
                  <Star className="w-5 h-5 text-red-400 ml-2 animate-pulse" />
                </span>
              </div>

              {/* Subtle Glow/Blurred Background Shapes */}
              <div className="absolute -z-10 left-0 top-0 w-80 h-80 bg-gradient-to-br from-red-200 via-red-100 to-transparent rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -z-10 right-0 top-10 w-40 h-40 bg-gradient-to-tr from-red-200 via-red-100 to-transparent rounded-full blur-2xl opacity-30"></div>

              {/* Premium Heading with More Icons, Gold Gradient, Shadow, and Sparkle */}
              <div className="space-y-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-xl">
                  <span className="flex items-center animate-[fade-in_1s_ease-out_0.5s_forwards] transform translate-y-8 text-white">
                    <Shield className="w-8 h-8 lg:w-12 lg:h-12 mr-3 text-red-600 animate-pulse flex-shrink-0" />
                    <span className="relative">Premium</span>
                    <Gem className="w-7 h-7 ml-3 text-red-400 animate-bounce" />
                  </span>
                  <span className="flex items-center animate-[fade-in_1s_ease-out_1s_forwards] transform translate-y-8 bg-gradient-to-r from-red-600 via-red-700 to-black bg-clip-text text-transparent drop-shadow-lg">
                    <Car className="w-8 h-8 lg:w-12 lg:h-12 mr-3 text-red-600 animate-bounce flex-shrink-0" />
                    Cars
                    <Sparkles className="w-6 h-6 ml-3 text-red-400 animate-spin-slow" />
                  </span>
                  <span className="flex items-center animate-[fade-in_1s_ease-out_1.5s_forwards] transform translate-y-8 text-white">
                    Delivered
                    <TrendingUp className="w-8 h-8 lg:w-12 lg:h-12 ml-3 text-red-600 animate-pulse flex-shrink-0" />
                    <Shield className="w-6 h-6 ml-2 text-red-400 animate-bounce" />
                  </span>
                </h1>
              </div>

              <div className="text-base text-gray-300 font-medium leading-snug">Experience luxury, performance, and reliability<br/>with our curated collection of premium vehicles</div>

              {/* Feature Pills with Icons */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="flex items-center bg-black rounded px-2 py-1 text-xs font-semibold text-red-200"><Star className="w-4 h-4 mr-1 text-red-400" />Premium Quality</span>
                <span className="flex items-center bg-black rounded px-2 py-1 text-xs font-semibold text-red-200"><Car className="w-4 h-4 mr-1 text-red-400" />500+ Vehicles</span>
                <span className="flex items-center bg-black rounded px-2 py-1 text-xs font-semibold text-red-200"><Award className="w-4 h-4 mr-1 text-red-400" />Award Winning</span>
                <span className="flex items-center bg-black rounded px-2 py-1 text-xs font-semibold text-red-200"><Shield className="w-4 h-4 mr-1 text-red-400" />Certified</span>
                <span className="flex items-center bg-black rounded px-2 py-1 text-xs font-semibold text-red-200"><Clock className="w-4 h-4 mr-1 text-red-400" />Fast Delivery</span>
                <span className="flex items-center bg-black rounded px-2 py-1 text-xs font-semibold text-red-200"><Users className="w-4 h-4 mr-1 text-red-400" />Expert Team</span>
              </div>

              <div className="flex gap-3 mt-4">
                <a href="/inventory" className="bg-gradient-to-r from-red-600 via-red-700 to-black text-white px-5 py-2 rounded font-semibold text-base shadow-lg hover:from-red-700 hover:to-black transition">Explore Collection</a>
                <a href="/sell-car" className="border-2 border-red-600 text-red-200 px-5 py-2 rounded font-semibold text-base hover:bg-red-700 hover:text-white transition">Sell Your Car</a>
              </div>

              <div className="flex gap-6 mt-4">
                <div>
                  <div className="text-xl font-bold text-red-400 flex items-center"><Car className="w-5 h-5 mr-1" />500+</div>
                  <div className="text-xs text-red-200">Premium Cars</div>
              </div>
                <div>
                  <div className="text-xl font-bold text-red-400 flex items-center"><Users className="w-5 h-5 mr-1" />10K+</div>
                  <div className="text-xs text-red-200">Happy Customers</div>
                  </div>
                <div>
                  <div className="text-xl font-bold text-red-400 flex items-center"><Clock className="w-5 h-5 mr-1" />24/7</div>
                  <div className="text-xs text-red-200">Support</div>
                </div>
              </div>

              <div className="mt-3 text-xs text-red-200">
                <div className="font-semibold flex items-center"><Phone className="w-4 h-4 mr-1" />+1 (555) 123-4567</div>
                <div className="flex items-center"><Mail className="w-4 h-4 mr-1" />info@3remotors.com</div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Nationwide Delivery</div>
                </div>
                </div>
            {/* Right Column - Keep as is or empty for now */}
            <div className="hidden lg:flex items-center justify-center relative h-[450px]">
              <HeroCarsGrid cars={filteredCars} />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Vehicles Section */}
      <section className="py-24 bg-white">
        {/* Update the search bar container to center the form */}
        <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col items-center justify-center gap-4">
          <form
            className="flex w-full max-w-xl gap-2 justify-center"
            onSubmit={e => { e.preventDefault(); }}
          >
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-l-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg bg-white shadow"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-r-lg bg-gradient-to-r from-red-600 via-red-700 to-black text-white font-bold text-lg shadow hover:from-red-700 hover:to-black transition"
            >
              Find Cars
            </button>
          </form>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeaturedCars.length === 0 ? (
              <div className="col-span-full text-center text-xl text-red-600 py-12">
                No cars found.
              </div>
            ) : (
              filteredFeaturedCars.map((car, index) => (
                <Card key={car.id} className="overflow-hidden border-0 bg-white modern-card">
                  <div className="relative overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
                    {/* Badge only, no icons */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {car.badge}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    {/* Car Title and Price */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h3>
                        <p className="text-gray-600 text-sm">{car.year} • {car.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">{car.price}</p>
                        {car.originalPrice && <p className="text-sm text-gray-500 line-through">{car.originalPrice}</p>}
                      </div>
                    </div>
                    {/* Rating and Reviews */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {car.rating} ({car.reviews} reviews)
                      </span>
                    </div>
                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Settings className="w-4 h-4 text-gray-400" />
                        <span>{car.specs.engine}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Fuel className="w-4 h-4 text-gray-400" />
                        <span>{car.specs.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Gauge className="w-4 h-4 text-gray-400" />
                        <span>{car.specs.mileage}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Settings className="w-4 h-4 text-gray-400" />
                        <span>{car.specs.transmission}</span>
                      </div>
                    </div>
                    {/* Key Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {car.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                        {car.features.length > 3 && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                            +{car.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-4">
                      <Link to={`/car/${car.id}`} className="flex-1">
                        <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                          View Details
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" className="h-12 px-6 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300">
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
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