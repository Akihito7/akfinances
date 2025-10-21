import { useEffect, useState } from "react";
import { api } from "../axios";

interface UseFetchProps {
  url: string;
  refetchDependecies: any[];
}
export function useFetch<DataType>({
  url,
  refetchDependecies
}: UseFetchProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<null | Error>()

  async function fetchData() {
    try {
      const response = await api.get(url);
      setData(response.data);
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData();

  }, [...refetchDependecies])

  return {
    data,
    isLoading,
    error
  }
}