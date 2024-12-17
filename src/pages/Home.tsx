import React from 'react';
import { PropertyGrid } from '../components/property/PropertyGrid';
import { useProperties } from '../hooks/useProperties';

export function Home() {
  const { properties, loading, error } = useProperties();

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error loading properties</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Find Your Perfect Home in South Africa
      </h1>
      <PropertyGrid properties={properties} />
    </main>
  );
}