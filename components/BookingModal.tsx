import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, CreditCard, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { Car, BookingDetails, UserDetails } from '../types';
import { LOCATIONS } from '../constants';

interface BookingModalProps {
  car: Car;
  onClose: () => void;
}

const steps = ['Itinerary', 'Driver', 'Review'];

const BookingModal: React.FC<BookingModalProps> = ({ car, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    pickupLocation: LOCATIONS[0],
    dropoffLocation: LOCATIONS[0],
    pickupDate: '',
    dropoffDate: '',
    insurance: false,
    driverAge: 25
  });
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const calculateTotal = () => {
    // Mock days calculation (default 3 days if not selected)
    const days = 3; 
    const base = car.pricePerDay * days;
    const insuranceCost = bookingDetails.insurance ? 30 * days : 0;
    const tax = base * 0.1;
    return base + insuranceCost + tax;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
        <div className="bg-white w-full max-w-md rounded-3xl p-8 text-center shadow-2xl transform scale-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
          <p className="text-slate-500 mb-8">
            You're all set to drive the <span className="font-semibold text-slate-900">{car.name}</span>. 
            A confirmation email has been sent to {userDetails.email}.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Left Side: Summary Panel */}
        <div className="bg-slate-50 md:w-1/3 p-8 border-r border-gray-100 flex flex-col">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Booking Summary</h3>
          
          <div className="flex-1 space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <img src={car.image} alt={car.name} className="w-full h-32 object-cover rounded-xl mb-3" />
              <h4 className="font-bold text-slate-900">{car.brand} {car.name}</h4>
              <p className="text-sm text-slate-500">${car.pricePerDay} / day</p>
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">Pick-up</p>
                  <p>{bookingDetails.pickupLocation}</p>
                  <p className="text-xs text-slate-400 mt-1">{bookingDetails.pickupDate || 'Select date'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">Drop-off</p>
                  <p>{bookingDetails.dropoffLocation}</p>
                  <p className="text-xs text-slate-400 mt-1">{bookingDetails.dropoffDate || 'Select date'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-end">
              <span className="text-slate-500 text-sm">Total Estimate</span>
              <span className="text-2xl font-bold text-slate-900">${Math.floor(calculateTotal())}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Wizard */}
        <div className="flex-1 p-8 flex flex-col bg-white">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              {currentStep === 0 && 'Plan Your Trip'}
              {currentStep === 1 && 'Driver Details'}
              {currentStep === 2 && 'Review & Pay'}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="text-slate-400" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center mb-8 space-x-2">
            {steps.map((label, idx) => (
              <React.Fragment key={label}>
                <div className={`flex items-center gap-2 ${idx <= currentStep ? 'text-blue-600' : 'text-slate-300'}`}>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 
                    ${idx < currentStep ? 'bg-blue-600 border-blue-600 text-white' : idx === currentStep ? 'border-blue-600 text-blue-600' : 'border-slate-200'}
                  `}>
                    {idx < currentStep ? <CheckCircle size={16} /> : idx + 1}
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{label}</span>
                </div>
                {idx < steps.length - 1 && <div className={`flex-1 h-0.5 ${idx < currentStep ? 'bg-blue-600' : 'bg-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar">
            {/* Step 1: Itinerary */}
            {currentStep === 0 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Pick-up Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                      <select 
                        value={bookingDetails.pickupLocation}
                        onChange={(e) => setBookingDetails({...bookingDetails, pickupLocation: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none"
                      >
                        {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Drop-off Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                      <select 
                        value={bookingDetails.dropoffLocation}
                        onChange={(e) => setBookingDetails({...bookingDetails, dropoffLocation: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none"
                      >
                        {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Pick-up Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                      <input 
                        type="date" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        onChange={(e) => setBookingDetails({...bookingDetails, pickupDate: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Drop-off Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                      <input 
                        type="date" 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        onChange={(e) => setBookingDetails({...bookingDetails, dropoffDate: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={bookingDetails.insurance}
                      onChange={(e) => setBookingDetails({...bookingDetails, insurance: e.target.checked})}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" 
                    />
                    <div className="flex-1">
                      <span className="font-medium text-slate-900">Add Full Coverage Insurance</span>
                      <p className="text-xs text-slate-500">Zero deductible, covers theft & collision. +$30/day</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Driver */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                      <input 
                        type="text" 
                        value={userDetails.firstName}
                        onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        placeholder="Jane"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      value={userDetails.lastName}
                      onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Pay */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                  <CreditCard className="text-blue-600 w-6 h-6 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Payment Information</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      You won't be charged until you pick up the vehicle. We just need a card to hold the reservation.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Expiry Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">CVC</label>
                      <input 
                        type="text" 
                        placeholder="123"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-mono"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-slate-400 text-center mt-4">
                  By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy.
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
            <button 
              onClick={handleBack}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-0 disabled:cursor-default transition-all flex items-center gap-2"
            >
              <ChevronLeft size={18} />
              Back
            </button>
            <button 
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              {currentStep === steps.length - 1 ? 'Confirm Booking' : 'Next Step'}
              {currentStep !== steps.length - 1 && <ChevronRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
