import { useEffect, useState } from 'react';
import axios from 'axios';

import { NYT_API } from '../.env.js'; // dotenv 로 처리하자

export default function useFetch() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fetchData가 useEffect 밖에 있으면 처리가 잘 되지 않음 원인은 잘 모르겠다
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // NYT book API
        const res = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${NYT_API}`,
        );
        setResponse(res.data.results);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
}
