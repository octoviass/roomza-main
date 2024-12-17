const API_BASE_URL = 'http://localhost:8000/api';

export async function fetchProperties(filters?: {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
}) {
  const queryParams = new URLSearchParams();
  
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const response = await fetch(`${API_BASE_URL}/properties?${queryParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  return response.json();
}

export async function fetchPropertyById(id: string) {
  const response = await fetch(`${API_BASE_URL}/properties/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch property');
  }
  return response.json();
}