import React from 'react';
import { Heart, Star } from 'lucide-react';
import type { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-48 w-full object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">4.8</span>
          </div>
          <span className="text-sm text-gray-500">{property.location.city}</span>
        </div>
        
        <h3 className="mt-2 text-lg font-medium text-gray-900 truncate">
          {property.title}
        </h3>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span>{property.bedrooms} beds</span>
          <span className="mx-1">•</span>
          <span>{property.bathrooms} baths</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">
            R{property.price.toLocaleString()}/month
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}