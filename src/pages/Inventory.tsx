
import React, { useState } from 'react';
import { Search, Filter, Car, Heart, Eye, Fuel, Gauge, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Inventory = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([2015, 2024]);
  const [mileageRange, setMileageRange] = useState([0, 50000]);
  const [search, setSearch] = useState("");
  const [make, setMake] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const cars = [
    {
      id: 1,
      name: 'BMW X5 M Sport',
      year: 2023,
      price: 75000,
      originalPrice: 82000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      brand: 'BMW',
      model: 'X5',
      mileage: 8500,
      fuel: 'Petrol',
      transmission: 'Automatic',
      engine: '3.0L V6 Turbo',
      location: 'New York, NY',
      badges: ['Premium', 'Low Miles'],
      features: ['Leather Seats', 'Sunroof', 'Navigation', 'Backup Camera']
    },
    {
      id: 2,
      name: 'Mercedes-Benz C-Class AMG',
      year: 2023,
      price: 68000,
      originalPrice: 72000,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      brand: 'Mercedes',
      model: 'C-Class',
      mileage: 5200,
      fuel: 'Petrol',
      transmission: 'Automatic',
      engine: '2.0L Turbo',
      location: 'Los Angeles, CA',
      badges: ['Featured', 'Best Deal'],
      features: ['Premium Sound', 'Heated Seats', 'Wireless Charging', 'LED Lights']
    },
    {
      id: 3,
      name: 'Toyota Camry Hybrid',
      year: 2024,
      price: 32000,
      originalPrice: 35000,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      brand: 'Toyota',
      model: 'Camry',
      mileage: 2800,
      fuel: 'Hybrid',
      transmission: 'CVT',
      engine: '2.5L Hybrid',
      location: 'Chicago, IL',
      badges: ['Eco-Friendly', 'New'],
      features: ['Hybrid Engine', 'Apple CarPlay', 'Safety Sense', 'Adaptive Cruise']
    },
    {
      id: 4,
      name: 'Honda Accord Sport',
      year: 2023,
      price: 34000,
      originalPrice: 38000,
      image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&h=600&fit=crop',
      brand: 'Honda',
      model: 'Accord',
      mileage: 12000,
      fuel: 'Petrol',
      transmission: 'Manual',
      engine: '2.0L Turbo',
      location: 'Miami, FL',
      badges: ['Sport', 'Manual'],
      features: ['Sport Suspension', 'Racing Stripes', 'Performance Tires', 'Bose Audio']
    },
    {
      id: 5,
      name: 'Audi Q7 Prestige',
      year: 2023,
      price: 85000,
      originalPrice: 92000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      brand: 'Audi',
      model: 'Q7',
      mileage: 6800,
      fuel: 'Petrol',
      transmission: 'Automatic',
      engine: '3.0L V6 Supercharged',
      location: 'Dallas, TX',
      badges: ['Luxury', 'Premium'],
      features: ['Quattro AWD', 'Virtual Cockpit', 'Massage Seats', 'Bang & Olufsen']
    },
    {
      id: 6,
      name: 'Ford Mustang GT',
      year: 2022,
      price: 42000,
      originalPrice: 47000,
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&h=600&fit=crop',
      brand: 'Ford',
      model: 'Mustang',
      mileage: 18000,
      fuel: 'Petrol',
      transmission: 'Manual',
      engine: '5.0L V8',
      location: 'Phoenix, AZ',
      badges: ['Performance', 'V8 Power'],
      features: ['V8 Engine', 'Performance Package', 'Recaro Seats', 'Track Apps']
    }
  ];

  // Filtering logic
  const filteredCars = cars.filter(car => {
    // Price
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
    // Year
    if (car.year < yearRange[0] || car.year > yearRange[1]) return false;
    // Mileage
    if (car.mileage < mileageRange[0] || car.mileage > mileageRange[1]) return false;
    // Make
    if (make && car.brand.toLowerCase() !== make.toLowerCase()) return false;
    // Fuel
    if (fuel && car.fuel.toLowerCase() !== fuel.toLowerCase()) return false;
    // Transmission
    if (transmission && car.transmission.toLowerCase() !== transmission.toLowerCase()) return false;
    // Search
    if (search && !(
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase()) ||
      car.model.toLowerCase().includes(search.toLowerCase())
    )) return false;
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => (
    <div className="flex justify-center items-center gap-2 mt-12">
      <Button
        variant="outline"
        className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-xl px-4 py-2"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i + 1}
          variant={currentPage === i + 1 ? "default" : "outline"}
          className={`border-2 border-red-600 ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'text-red-600 hover:bg-red-600 hover:text-white'} font-semibold rounded-xl px-4 py-2`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-xl px-4 py-2"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 logo-font">Premium Car Inventory</h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Discover your perfect vehicle from our curated collection of premium automobiles
            </p>
            <div className="flex items-center justify-center space-x-8 text-red-100">
              <div className="flex items-center space-x-2">
                <Car className="w-5 h-5" />
                <span>{filteredCars.length} Vehicles Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  Premium Selection
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8">
        <div className="flex gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="w-[28rem] bg-white rounded-3xl shadow-2xl p-8 h-[calc(100vh-4rem)] sticky top-8 border border-gray-100 -ml-12 overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white z-10 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 logo-font">Filters</h2>
              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => {
                setPriceRange([0, 100000]);
                setYearRange([2015, 2024]);
                setMileageRange([0, 50000]);
                setSearch("");
                setMake("");
                setFuel("");
                setTransmission("");
              }}>
                Clear All
              </Button>
            </div>

            <div className="space-y-8 divide-y divide-gray-100">
              <div className="pt-0">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Search</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder="Search by make, model..." 
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Make</label>
                <Select value={make} onValueChange={setMake}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl">
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
              <div className="pt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={0}
                    step={5000}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="pt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Year: {yearRange[0]} - {yearRange[1]}
                </label>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Slider
                    value={yearRange}
                    onValueChange={setYearRange}
                    max={2024}
                    min={2010}
                    step={1}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="pt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Mileage: {mileageRange[0].toLocaleString()} - {mileageRange[1].toLocaleString()} miles
                </label>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <Slider
                    value={mileageRange}
                    onValueChange={setMileageRange}
                    max={100000}
                    min={0}
                    step={5000}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="pt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Fuel Type</label>
                <Select value={fuel} onValueChange={setFuel}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl">
                    <SelectValue placeholder="Select Fuel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Transmission</label>
                <Select value={transmission} onValueChange={setTransmission}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl">
                    <SelectValue placeholder="Select Transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-8 pb-2">
                <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300">
                  <Filter className="w-5 h-5 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Car Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-900">{filteredCars.length} vehicles found</span>
                <Badge variant="secondary" className="bg-red-100 text-red-700">
                  Premium Collection
                </Badge>
              </div>
              <Select defaultValue="price-low">
                <SelectTrigger className="w-64 h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">{filteredCars.length}</div>
                <div className="text-gray-600 font-medium">Total Vehicles</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Customer Satisfaction</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.9%</div>
                <div className="text-gray-600 font-medium">Financing APR</div>
              </div>
            </div>

            {/* Enhanced Car Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {paginatedCars.map((car) => (
                <div key={car.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 group border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Enhanced Badges */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {car.badges.map((badge, index) => (
                        <Badge key={index} className="bg-red-600 text-white px-3 py-1 text-sm font-semibold shadow-lg">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Enhanced Action Buttons */}
                    <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Button size="sm" className="bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 p-0 shadow-lg">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button size="sm" className="bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 p-0 shadow-lg">
                        <Eye className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    {/* Enhanced Savings Badge */}
                    {car.originalPrice > car.price && (
                      <div className="absolute bottom-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Save ${(car.originalPrice - car.price).toLocaleString()}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    {/* Enhanced Car Info Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{car.name}</h3>
                        <p className="text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-red-500" />
                          {car.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-red-600">${car.price.toLocaleString()}</p>
                        {car.originalPrice > car.price && (
                          <p className="text-lg text-gray-500 line-through">${car.originalPrice.toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Specs Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-6 py-6 border-t border-b border-gray-100">
                      <div className="text-center group-hover:bg-red-50 p-3 rounded-xl transition-colors duration-300">
                        <Calendar className="w-6 h-6 text-red-500 mx-auto mb-2" />
                        <p className="text-lg font-bold text-gray-900">{car.year}</p>
                        <p className="text-sm text-gray-500">Year</p>
                      </div>
                      <div className="text-center group-hover:bg-red-50 p-3 rounded-xl transition-colors duration-300">
                        <Gauge className="w-6 h-6 text-red-500 mx-auto mb-2" />
                        <p className="text-lg font-bold text-gray-900">{car.mileage.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Miles</p>
                      </div>
                      <div className="text-center group-hover:bg-red-50 p-3 rounded-xl transition-colors duration-300">
                        <Fuel className="w-6 h-6 text-red-500 mx-auto mb-2" />
                        <p className="text-lg font-bold text-gray-900">{car.fuel}</p>
                        <p className="text-sm text-gray-500">Fuel</p>
                      </div>
                    </div>

                    {/* Enhanced Features */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Key Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {car.features.slice(0, 4).map((feature, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                        {car.features.length > 4 && (
                          <span className="text-xs text-red-600 font-semibold">+{car.features.length - 4} more</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Action Buttons */}
                    <div className="flex space-x-4">
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
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Bar */}
            {renderPagination()}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Inventory;
