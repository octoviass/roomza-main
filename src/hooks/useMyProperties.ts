import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchMyProperties } from '../api';
import type { Property } from '../types';

export function useMyProperties() {
  const { getAccessTokenSilently } = useAuth0();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const token = await getAccessTokenSilently();
        const data = await fetchMyProperties(token);
        setProperties(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch properties'));
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [getAccessTokenSilently]);

  return { properties, loading, error };
}