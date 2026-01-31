import { Car, CarType, Transmission } from './types';

export const LOCATIONS = [
  "New York, JFK Airport",
  "Los Angeles, LAX Airport",
  "Miami, South Beach",
  "San Francisco, Union Square",
  "Chicago, O'Hare Airport",
  "Las Vegas, The Strip"
];

export const CARS: Car[] = [
  {
    id: '1',
    brand: 'Tesla',
    name: 'Model S Plaid',
    type: CarType.ELECTRIC,
    pricePerDay: 189,
    image: 'https://picsum.photos/600/400?random=1',
    transmission: Transmission.AUTO,
    seats: 5,
    mpg: '396 mi',
    available: true,
    features: ['Autopilot', '0-60 in 1.99s', 'Premium Sound'],
    rating: 4.9
  },
  {
    id: '2',
    brand: 'Porsche',
    name: '911 Carrera',
    type: CarType.SPORTS,
    pricePerDay: 299,
    image: 'https://picsum.photos/600/400?random=2',
    transmission: Transmission.AUTO,
    seats: 2,
    mpg: '24 mpg',
    available: true,
    features: ['Sport Chrono', 'Leather Interior', 'Convertible'],
    rating: 5.0
  },
  {
    id: '3',
    brand: 'Range Rover',
    name: 'Autobiography',
    type: CarType.SUV,
    pricePerDay: 249,
    image: 'https://picsum.photos/600/400?random=3',
    transmission: Transmission.AUTO,
    seats: 5,
    mpg: '18 mpg',
    available: true,
    features: ['Massage Seats', 'AWD', 'Panoramic Roof'],
    rating: 4.8
  },
  {
    id: '4',
    brand: 'Mercedes-Benz',
    name: 'S-Class',
    type: CarType.LUXURY,
    pricePerDay: 220,
    image: 'https://picsum.photos/600/400?random=4',
    transmission: Transmission.AUTO,
    seats: 5,
    mpg: '25 mpg',
    available: false,
    features: ['Chauffeur Package', 'Burmester Sound', 'Ambient Lighting'],
    rating: 4.9
  },
  {
    id: '5',
    brand: 'Toyota',
    name: 'RAV4 Hybrid',
    type: CarType.SUV,
    pricePerDay: 85,
    image: 'https://picsum.photos/600/400?random=5',
    transmission: Transmission.AUTO,
    seats: 5,
    mpg: '41 mpg',
    available: true,
    features: ['Apple CarPlay', 'Safety Sense', 'Spacious Trunk'],
    rating: 4.6
  },
  {
    id: '6',
    brand: 'BMW',
    name: 'M4 Competition',
    type: CarType.SPORTS,
    pricePerDay: 195,
    image: 'https://picsum.photos/600/400?random=6',
    transmission: Transmission.AUTO,
    seats: 4,
    mpg: '23 mpg',
    available: true,
    features: ['Carbon Fiber Trim', 'Drift Analyzer', 'Head-up Display'],
    rating: 4.8
  }
];
