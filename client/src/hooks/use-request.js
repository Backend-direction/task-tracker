import axios from 'axios';
import { useState } from 'react';

export default function useRequest ({ url, method, body, onSuccess, onError, headers}) {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props }, { headers: {...headers} });

      if(onSuccess) {
        onSuccess(response.data);
      }
      
      return response.data;
    } catch (err) {
      setErrors(err.response.data.errors);

      if(onError) {
        onError(err.response.data.errors);
      }
    }
  }

  return { doRequest, errors };
};