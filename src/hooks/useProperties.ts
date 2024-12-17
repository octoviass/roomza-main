import { useState, useEffect } from 'react';
import { fetchProperties } from '../api';
import type { Property } from '../types';

export function useProperties(filters?: {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
}) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const data = await fetchProperties(filters);
        setProperties(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch properties'));
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [filters]);

  return { properties, loading, error };
}