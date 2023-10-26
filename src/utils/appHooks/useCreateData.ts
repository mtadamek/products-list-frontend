import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState } from "react";
import useAppDispatch from "./useAppDispatch";
import { SUCCESS_HTTP_CODES } from "../../constants";
import { IPostResponseData } from "../../api/products.d";

const useCreateData = <T>(
  createMethod: (data: T) => Promise<IPostResponseData>,
  action: ActionCreatorWithPayload<T, string>
) => {
  const dispatch = useAppDispatch();
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseStatus, setResponseStatus] = useState<number>();

  const createData = React.useMemo(
    () => async (data: T) => {
      setIsCreating(true);
      setIsError(false);
      setResponseStatus(undefined);
      const { status, id } = await createMethod(data);

      if (status && SUCCESS_HTTP_CODES.includes(status)) {
        dispatch(action({ ...data, id }));
      } else {
        setIsError(true);
      }
      setResponseStatus(status);
      setIsCreating(false);
    },
    [createMethod, action]
  );

  return { isCreating, isError, responseStatus, createData };
};

export default useCreateData;
