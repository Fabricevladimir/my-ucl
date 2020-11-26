import { useState } from 'react';
import axios from 'axios';

export default function useApi(apiFunction, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { cancel, token } = axios.CancelToken.source();

  async function request(...args) {
    setLoading(true);
    const response = await apiFunction(...args, { cancelToken: token });
    cancel();
    setLoading(false);

    setError(!response.ok);
    setData(response.data.api);
    return response;
  }

  return { cancel, data, error, loading, request };
}
