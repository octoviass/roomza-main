import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import type { Property } from '../types';

export function CreateProperty() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch('http://localhost:8000/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/my-properties');
      }
    } catch (error) {
      console.error('Failed to create property:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Property Listing</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            {...register('title', { required: true })}
            className="w-full p-2 border rounded-md"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">Title is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register('description', { required: true })}
            className="w-full p-2 border rounded-md"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (per month)
          </label>
          <input
            type="number"
            {...register('price', { required: true, min: 0 })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <input
              type="number"
              {...register('bedrooms', { required: true, min: 0 })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bathrooms
            </label>
            <input
              type="number"
              {...register('bathrooms', { required: true, min: 0 })}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            {...register('propertyType', { required: true })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="studio">Studio</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Create Property
        </button>
      </form>
    </div>
  );
}