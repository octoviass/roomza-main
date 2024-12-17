import React from 'react';
import { useParams } from 'react-router-dom';
import { usePropertyDetails } from '../hooks/usePropertyDetails';
import { PropertyGallery } from '../components/property/PropertyGallery';
import { PropertyInfo } from '../components/property/PropertyInfo';
import { PropertyFeatures } from '../components/property/PropertyFeatures';

export function PropertyDetails() {
  const { id } = useParams();
  const { property, loading, error } = usePropertyDetails(id!);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error || !property) {
    return <div className="text-red-500">Error loading property details</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PropertyGallery images={property.images} />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyInfo property={property} />
          <PropertyFeatures features={property.features} />
        </div>
        <div>
          <ContactHost propertyId={property.id} hostId={property.hostId} />
        </div>
      </div>
    </div>
  );
}