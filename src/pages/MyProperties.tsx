import React from 'react';
import { useMyProperties } from '../hooks/useMyProperties';
import { PropertyGrid } from '../components/property/PropertyGrid';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export function MyProperties() {
  const { properties, loading, error } = useMyProperties();

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error loading your properties</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Properties</h1>
        <Link
          to="/create-property"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" />
          <span>Add Property</span>
        </Link>
      </div>
      <PropertyGrid properties={properties} />
    </div>
  );
}