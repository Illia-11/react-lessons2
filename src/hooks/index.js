import { useEffect, useState } from "react";

export function useLoadData(loadData) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [ ]);

  return {
    data,
    isLoading,
    error,
  };
}