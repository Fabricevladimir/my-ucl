import { useState } from 'react';

export default function useApi(apiFunction, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function request(...args) {
    setLoading(true);
    const response = await apiFunction(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data.api);
    return response;
  }

  return { data, error, loading, request };
}
