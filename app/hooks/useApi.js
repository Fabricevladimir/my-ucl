import { useState } from 'react';
import { isCancel, CancelToken } from 'apisauce';

export default function useApi(apiFunction, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { cancel, token } = CancelToken.source();

  async function request(...args) {
    setLoading(true);
    const response = await apiFunction(...modifyArgs(args, { cancelToken: token }));
    setLoading(false);

    setError(!response.ok);
    setData(response.data.api);
    return response;
  }

  function modifyArgs(initialArgs, options) {
    const length = initialArgs.length;

    if (length === 0) return [null, null, options];
    if (length === 1) return [initialArgs[0], null, options];
    if (length === 2) return [initialArgs[0], initialArgs[1], options];
    if (length === 3) return [initialArgs[0], initialArgs[1], { ...initialArgs[2], ...options }];
  }

  return {
    data,
    error,
    cancel,
    loading,
    request,
    isCancel,
    setLoading,
  };
}
