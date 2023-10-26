import React, { useState } from "react";
import { IGetResponseData } from "../../api/products.d";
import { SUCCESS_HTTP_CODES } from "../../constants";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import useAppDispatch from "./useAppDispatch";

type GetOneFunction<T> = (id: number) => Promise<IGetResponseData<T>>;
type GetAllFunction<T> = () => Promise<IGetResponseData<T>>;

const useGetData = <T>(
  getMethod: GetOneFunction<T> | GetAllFunction<T>,
  action: ActionCreatorWithPayload<T | undefined, string>
) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = React.useMemo(
    () => async (id?: number) => {
      setIsLoading(true);
      setIsError(false);

      const { data, status } = id
        ? await (getMethod as GetOneFunction<T>)(id)
        : await (getMethod as GetAllFunction<T>)();

      if (status && SUCCESS_HTTP_CODES.includes(status)) {
        dispatch(action(data));
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    },
    [getMethod, action]
  );

  return { isLoading, isError, getData };
};

export default useGetData;
