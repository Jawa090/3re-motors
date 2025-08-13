import React, { useState, memo, useEffect } from 'react';
import { Search, Filter, Car, Heart, Eye, Fuel, Gauge, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cars } from '../lib/cars';
type Car = typeof cars[number];

const Inventory = () => {
  const location = useLocation();
  function getQueryParam(param) {
    const params = new URLSearchParams(location.search);
    return params.get(param) || '';
  }
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([2010, 2024]);
  const [mileageRange, setMileageRange] = useState([0, 200000]);
  const [search, setSearch] = useState(getQueryParam('search'));
  const [make, setMake] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [currentPage, setCurrentPage] = useState(() => {
    const raw = getQueryParam('page');
    const parsed = parseInt(raw || '1', 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  });
  const carsPerPage = 12;

  // Get all unique brands from the cars array for the Make filter
  const uniqueBrands = Array.from(new Set(cars.map(car => car.brand)));

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

  // Keep page in range when filters change and sync to URL
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
      return;
    }
    if (currentPage < 1) {
      setCurrentPage(1);
      return;
    }
    const params = new URLSearchParams(location.search);
    params.set('page', String(currentPage));
    window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
  }, [currentPage, totalPages, location.pathname, location.search]);

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
      
      {/* Hero Section - Match Home Page */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-14">
        {/* Optional blurred circles for visual consistency */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        {/* Main Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
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
                <Badge className="bg-gradient-to-r from-red-600 via-red-700 to-black text-white border-none">
                  Premium Selection
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Statistics - moved above filter section and unified color */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">{filteredCars.length}</div>
            <div className="text-gray-600 font-medium">Total Vehicles</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Customer Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">2.9%</div>
            <div className="text-gray-600 font-medium">Financing APR</div>
          </div>
        </div>
        {/* Filter Section - Professional Design */}
        <div className="mb-8">
          {/* Active Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {search && (
              <Badge className="bg-red-100 text-red-700 rounded-full px-3 py-1 flex items-center gap-1">
                <Search className="w-4 h-4" /> {search}
                <button onClick={() => setSearch('')} className="ml-1 text-red-500 hover:text-red-700 focus:outline-none">×</button>
              </Badge>
            )}
            {make && (
              <Badge className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 flex items-center gap-1">
                <Car className="w-4 h-4" /> {make.charAt(0).toUpperCase() + make.slice(1)}
                <button onClick={() => setMake('')} className="ml-1 text-blue-500 hover:text-blue-700 focus:outline-none">×</button>
              </Badge>
            )}
            {fuel && (
              <Badge className="bg-green-100 text-green-700 rounded-full px-3 py-1 flex items-center gap-1">
                <Fuel className="w-4 h-4" /> {fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                <button onClick={() => setFuel('')} className="ml-1 text-green-500 hover:text-green-700 focus:outline-none">×</button>
              </Badge>
            )}
            {transmission && (
              <Badge className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 flex items-center gap-1">
                <span role="img" aria-label="gear">⚙️</span> {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
                <button onClick={() => setTransmission('')} className="ml-1 text-purple-500 hover:text-purple-700 focus:outline-none">×</button>
              </Badge>
            )}
            {(priceRange[0] !== 0 || priceRange[1] !== 100000) && (
              <Badge className="bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 flex items-center gap-1">
                <Gauge className="w-4 h-4" /> ${priceRange[0]} - ${priceRange[1]}
                <button onClick={() => setPriceRange([0, 100000])} className="ml-1 text-yellow-500 hover:text-yellow-700 focus:outline-none">×</button>
              </Badge>
            )}
            {(yearRange[0] !== 2010 || yearRange[1] !== 2024) && (
              <Badge className="bg-pink-100 text-pink-700 rounded-full px-3 py-1 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {yearRange[0]} - {yearRange[1]}
                <button onClick={() => setYearRange([2010, 2024])} className="ml-1 text-pink-500 hover:text-pink-700 focus:outline-none">×</button>
              </Badge>
            )}
            {(mileageRange[0] !== 0 || mileageRange[1] !== 200000) && (
              <Badge className="bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {mileageRange[0]} - {mileageRange[1]} mi
                <button onClick={() => setMileageRange([0, 200000])} className="ml-1 text-indigo-500 hover:text-indigo-700 focus:outline-none">×</button>
              </Badge>
            )}
            {/* Clear All if any filter is active */}
            {(search || make || fuel || transmission || priceRange[0] !== 0 || priceRange[1] !== 100000 || yearRange[0] !== 2010 || yearRange[1] !== 2024 || mileageRange[0] !== 0 || mileageRange[1] !== 200000) && (
              <Button
                type="button"
                variant="ghost"
                className="ml-2 text-red-600 hover:text-white hover:bg-red-600 font-semibold px-4 py-2 rounded-full border border-red-200 transition"
                onClick={() => {
                  setPriceRange([0, 100000]);
                  setYearRange([2010, 2024]);
                  setMileageRange([0, 200000]);
                  setSearch('');
                  setMake('');
                  setFuel('');
                  setTransmission('');
                }}
                aria-label="Clear all filters"
              >
                Clear All
              </Button>
            )}
          </div>

          {/* Filter Card */}
          <form
            className="w-full bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
            onSubmit={e => e.preventDefault()}
            aria-label="Car inventory filters"
          >
            {/* Search */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><Search className="w-4 h-4" />Search</label>
              <Input
                placeholder="Search make, model..."
                className="h-12 rounded-full px-4 border-2 border-gray-200 focus:border-red-500 transition"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search by make or model"
              />
            </div>
            {/* Make */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><Car className="w-4 h-4" />Make</label>
              <Select value={make} onValueChange={setMake}>
                <SelectTrigger className="h-12 rounded-full px-4 border-2 border-gray-200 focus:border-blue-500 transition">
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent>
                  {uniqueBrands.map((brand) => (
                    <SelectItem key={brand.toLowerCase()} value={brand.toLowerCase()}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Price Range */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><Gauge className="w-4 h-4" />Price</label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                min={0}
                step={5000}
                className="w-full"
                aria-label="Price range"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            {/* Year */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><Calendar className="w-4 h-4" />Year</label>
              <Slider
                value={yearRange}
                onValueChange={setYearRange}
                max={2024}
                min={2010}
                step={1}
                className="w-full"
                aria-label="Year range"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>{yearRange[0]}</span>
                <span>{yearRange[1]}</span>
              </div>
            </div>
            {/* Mileage */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><MapPin className="w-4 h-4" />Mileage</label>
              <Slider
                value={mileageRange}
                onValueChange={setMileageRange}
                max={200000}
                min={0}
                step={5000}
                className="w-full"
                aria-label="Mileage range"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>{mileageRange[0]} mi</span>
                <span>{mileageRange[1]} mi</span>
              </div>
            </div>
            {/* Fuel */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><Fuel className="w-4 h-4" />Fuel</label>
              <Select value={fuel} onValueChange={setFuel}>
                <SelectTrigger className="h-12 rounded-full px-4 border-2 border-gray-200 focus:border-green-500 transition">
                  <SelectValue placeholder="Fuel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Transmission */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold mb-1 flex items-center gap-1"><span role="img" aria-label="gear">⚙️</span>Transmission</label>
              <Select value={transmission} onValueChange={setTransmission}>
                <SelectTrigger className="h-12 rounded-full px-4 border-2 border-gray-200 focus:border-purple-500 transition">
                  <SelectValue placeholder="Transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="cvt">CVT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </div>

        {/* Enhanced Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedCars.map((car) => (
            <CarCard key={car.id} car={car} currentPage={currentPage} />
          ))}
        </div>
        {/* Pagination Bar */}
        {renderPagination()}
      </div>
      
      <Footer />
    </div>
  );
};

// CarCard component for each car
const CarCard = memo(({ car, currentPage }: { car: Car, currentPage?: number }) => (
  <Link
    key={car.id}
    to={`/car/${car.id}`}
    state={{ fromInventoryPage: currentPage }}
    className="block group"
  >
    <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden w-full mx-auto flex flex-col cursor-pointer transition-transform duration-300 group-hover:shadow-2xl group-hover:scale-105 min-h-[420px] h-[480px] max-w-xs mx-auto">
      {/* Featured Badge */}
      {car.badges && car.badges.length > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow">{car.badges[0]}</span>
        </div>
      )}
      {/* Car Image */}
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={car.image} alt={car.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
      </div>
      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-red-500 font-semibold uppercase tracking-wide">{car.brand}</span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs text-gray-600 font-medium">{car.model}</span>
          </div>
          <div className="font-bold text-xl text-gray-900 mb-2 leading-tight">{car.name}</div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-600 mb-2">
            <div className="flex items-center gap-1"><span>⛽</span>{car.fuel}</div>
            <div className="flex items-center gap-1"><span>🛣️</span>{car.mileage.toLocaleString()} km</div>
            {car.id === 1002 ? (
              <div className="flex items-center gap-1"><span className='inline-block w-3 h-3 rounded-full mr-1' style={{background:'#888',border:'1px solid #ccc'}}></span>Silky Grey</div>
            ) : car.id === 1004 ? (
              <div className="flex items-center gap-1"><span className='inline-block w-3 h-3 rounded-full mr-1' style={{background:'#222',border:'1px solid #ccc'}}></span>Aggressive Black</div>
            ) : car.id === 1005 ? (
              <div className="flex items-center gap-1"><span className='inline-block w-3 h-3 rounded-full mr-1' style={{background:'#C0C0C0',border:'1px solid #ccc'}}></span>Silver</div>
            ) : car.id === 1007 ? (
              <div className="flex items-center gap-1"><span className='inline-block w-3 h-3 rounded-full mr-1' style={{background:'#C0C0C0',border:'1px solid #ccc'}}></span>Silver</div>
            ) : (
              <div className="flex items-center gap-1"><span className='inline-block w-3 h-3 rounded-full mr-1' style={{background:'#fff',border:'1px solid #ccc'}}></span>Pearl White</div>
            )}
          </div>
        </div>
        <div className="font-bold text-xl text-red-600 mt-4">
          {car.price && car.price > 0 ? `$${car.price.toLocaleString()}` : 'Call for Price'}
        </div>
      </div>
    </div>
  </Link>
));

export default Inventory;
