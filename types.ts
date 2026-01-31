export enum CarType {
  SUV = 'SUV',
  SEDAN = 'Sedan',
  SPORTS = 'Sports',
  LUXURY = 'Luxury',
  ELECTRIC = 'Electric'
}

export enum Transmission {
  AUTO = 'Automatic',
  MANUAL = 'Manual'
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  type: CarType;
  pricePerDay: number;
  image: string;
  transmission: Transmission;
  seats: number;
  mpg: number | string; // Miles per gallon or range
  available: boolean;
  features: string[];
  rating: number;
}

export interface BookingDetails {
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
  insurance: boolean;
  driverAge: number;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
};
