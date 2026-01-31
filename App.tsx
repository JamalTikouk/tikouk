import React, { useState, useMemo } from 'react';
import { CARS, LOCATIONS } from './constants';
import { Car, CarType } from './types';
import ChatAssistant from './components/ChatAssistant';
import BookingModal from './components/BookingModal';
import { Search, SlidersHorizontal, User, Fuel, Calendar, Users, Star, ArrowRight, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedType, setSelectedType] = useState<CarType | 'All'>('All');
  const [searchLocation, setSearchLocation] = useState(LOCATIONS[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredCars = useMemo(() => {
    return CARS.filter(car => 
      selectedType === 'All' ? true : car.type === selectedType
    );
  }, [selectedType]);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-slate-900">LuxDrive</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Fleet</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg">
                Sign In
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider mb-6 border border-blue-100">
              PREMIUM CAR RENTAL
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              Elevate your journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">luxury.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Experience the thrill of the open road with our curated fleet of high-end vehicles. 
              Seamless booking, concierge support, and unforgettable drives.
            </p>
          </div>

          {/* Advanced Search Bar */}
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 transform translate-y-0 hover:-translate-y-1 transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 relative group">
                <label className="text-xs font-semibold text-slate-400 ml-3 mb-1 block">Location</label>
                <div className="flex items-center px-4 py-3 bg-gray-50 rounded-2xl group-focus-within:bg-white group-focus-within:ring-2 ring-blue-500/20 transition-all">
                  <Search className="text-slate-400 mr-3 w-5 h-5" />
                  <select 
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="bg-transparent w-full text-slate-900 font-medium outline-none appearance-none cursor-pointer"
                  >
                    {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>
              </div>
              
              <div className="md:col-span-3 relative group">
                <label className="text-xs font-semibold text-slate-400 ml-3 mb-1 block">Pick-up</label>
                <div className="flex items-center px-4 py-3 bg-gray-50 rounded-2xl group-focus-within:bg-white group-focus-within:ring-2 ring-blue-500/20 transition-all">
                  <Calendar className="text-slate-400 mr-3 w-5 h-5" />
                  <input type="date" className="bg-transparent w-full text-slate-900 font-medium outline-none" />
                </div>
              </div>

              <div className="md:col-span-3 relative group">
                <label className="text-xs font-semibold text-slate-400 ml-3 mb-1 block">Drop-off</label>
                <div className="flex items-center px-4 py-3 bg-gray-50 rounded-2xl group-focus-within:bg-white group-focus-within:ring-2 ring-blue-500/20 transition-all">
                  <Calendar className="text-slate-400 mr-3 w-5 h-5" />
                  <input type="date" className="bg-transparent w-full text-slate-900 font-medium outline-none" />
                </div>
              </div>

              <div className="md:col-span-2 flex items-end">
                <button className="w-full h-[52px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
          <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Premium Fleet</h2>
            <p className="text-slate-500 max-w-md">Browse our collection of premium vehicles, maintained to the highest standards.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedType('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedType === 'All' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'}`}
            >
              All Models
            </button>
            {Object.values(CarType).map(type => (
              <button 
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedType === type ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  {car.type}
                </div>
                {!car.available && (
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-slate-900 font-bold rounded-lg transform -rotate-6">Currently Unavailable</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{car.brand} {car.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{car.rating}</span>
                      <span className="text-sm text-slate-400">(42 trips)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-blue-600">${car.pricePerDay}</span>
                    <span className="text-xs text-slate-400">per day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-slate-500">
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded-xl">
                    <Users size={18} className="mb-1 text-slate-400" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded-xl">
                    <Fuel size={18} className="mb-1 text-slate-400" />
                    <span>{car.mpg}</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded-xl">
                    <SlidersHorizontal size={18} className="mb-1 text-slate-400" />
                    <span>{car.transmission === 'Automatic' ? 'Auto' : 'Manual'}</span>
                  </div>
                </div>

                <button 
                  onClick={() => car.available && setSelectedCar(car)}
                  disabled={!car.available}
                  className="mt-auto w-full py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group-hover:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 font-bold tracking-wider text-sm mb-4 block">PREMIUM SERVICE</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">More than just a rental.</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We provide a full-service experience. From 24/7 concierge support to vehicle delivery directly to your door, LuxDrive ensures your journey starts effortlessly.
            </p>
            <ul className="space-y-4">
              {['Door-to-door delivery', '24/7 Roadside Assistance', 'Chauffeur services available', 'Clean & sanitized vehicles'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <ArrowRight size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Premium Service" 
              className="relative rounded-3xl border border-slate-700 shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-serif font-bold text-slate-900">LuxDrive</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 LuxDrive Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
             <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
             <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </footer>

      {/* Components */}
      <ChatAssistant />
      {selectedCar && (
        <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
};

export default App;
