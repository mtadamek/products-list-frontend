import React, { useEffect, useState } from "react";
import { IResponseData } from "../../api/products.d";
import { SUCCESS_HTTP_CODES } from "../../constants";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import useAppDispatch from "./useAppDispatch";

const useGetDataFromApi = <T>(
  getMethod: () => Promise<IResponseData<T>>,
  action: ActionCreatorWithPayload<T | undefined, string>
) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setIsError(false);
    const { data, status } = await getMethod();

    if (status && SUCCESS_HTTP_CODES.includes(status)) {
      dispatch(action(data));
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [getMethod]);

  return { isLoading, isError };
};

export default useGetDataFromApi;
