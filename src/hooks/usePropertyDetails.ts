import { useState, useEffect } from 'react';
import { fetchPropertyById } from '../api';
import type { Property } from '../types';

export function usePropertyDetails(id: string) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        const data = await fetchPropertyById(id);
        setProperty(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch property details'));
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  return { property, loading, error };
}