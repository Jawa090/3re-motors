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

      {/* HERO SECTION */}
<section className="relative min-h-[420px] flex items-stretch bg-[#1a2236] overflow-hidden">
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
  {/* Main content */}
  <div className="relative z-20 flex-1 flex flex-col justify-center pl-40 md:pl-56">
    <h1 className="text-white text-2xl md:text-4xl font-extrabold uppercase mb-8 tracking-wide drop-shadow-lg leading-tight">
  Sell, Purchase & Import All Types of Motor Vehicles
</h1>
    <a
      href="/inventory"
      className="bg-red-600 text-white px-8 py-3 rounded font-bold shadow hover:bg-red-700 transition w-max text-lg"
      style={{ marginLeft: '4px' }}
    >
      View Inventory
    </a>
  </div>
  {/* Car image */}
  <div className="relative z-20 flex-1 flex items-end justify-end pr-16">
    <img
      src="/Car.png"
      alt="Car"
      className="w-[420px] h-auto object-contain drop-shadow-2xl"
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
    <form className="flex w-full max-w-xl gap-2">
      <input
        type="text"
        placeholder="Enter Make, Model Or Body Style"
        className="flex-1 px-4 py-2 rounded-l border border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-r bg-red-600 text-white font-bold"
      >
        Find Your Car
      </button>
    </form>
  </div>
</section>

      {/* Three Feature Boxes Section */}
      <section className="w-full flex justify-center mt-8">
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full justify-center items-center">
          {/* Buy New One */}
          <div className="flex-1 min-w-[260px] max-w-xs bg-[#e3342f] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">BUY NEW ONE</h3>
            <p className="text-white text-sm md:text-base mb-6">Multiple inspections. Free CARFAX® history report. Free limited warranty.</p>
            <a href="/inventory" className="bg-[#19233a] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-black transition">View Inventory</a>
          </div>
          {/* Sell Your Car */}
          <div className="flex-1 min-w-[260px] max-w-xs bg-[#19233a] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">SELL YOUR CAR</h3>
            <p className="text-white text-sm md:text-base mb-6">No haggling. No hassles. An easy and efficient car buying process— the way it should be.</p>
            <a href="/contact" className="bg-[#e3342f] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-red-700 transition">Contact Us</a>
          </div>
          {/* Import Cars */}
          <div className="flex-1 min-w-[260px] max-w-xs bg-[#a3a9ad] flex flex-col items-center justify-center p-8 min-h-[220px] text-center rounded-xl shadow-lg">
            <h3 className="text-white text-lg md:text-xl font-extrabold uppercase mb-2 tracking-wide">IMPORT CARS</h3>
            <p className="text-white text-sm md:text-base mb-6">Get your car or truck shipped to your home or a convenient nearby location.</p>
            <a href="/contact" className="bg-[#19233a] text-white px-5 py-2 rounded font-semibold text-sm md:text-base shadow hover:bg-black transition">Submit Detail</a>
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