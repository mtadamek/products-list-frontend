import React, { useEffect, useState } from "react";
import { IResponseData } from "../../api/products.d";
import { SUCCESS_HTTP_CODES } from "../../constants";

const useGetDataFromApi = <T>(getMethod: () => Promise<IResponseData<T>>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T>();

  const getData = async () => {
    setIsLoading(true);
    setIsError(false);
    const { data, status } = await getMethod();

    if (status && SUCCESS_HTTP_CODES.includes(status)) {
      setData(data);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [getMethod]);

  return { isLoading, isError, data };
};

export default useGetDataFromApi;
