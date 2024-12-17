export interface User {
  id: string;
  name: string;
  email: string;
  role: 'tenant' | 'host' | 'admin';
  profileImage?: string;
  verified: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    province: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: string[];
  images: string[];
  bedrooms: number;
  bathrooms: number;
  propertyType: 'apartment' | 'house' | 'room' | 'studio';
  hostId: string;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Lease {
  id: string;
  propertyId: string;
  tenantId: string;
  hostId: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  status: 'pending' | 'active' | 'completed' | 'terminated';
  documents: {
    name: string;
    url: string;
    type: string;
  }[];
  createdAt: string;
  updatedAt: string;
}