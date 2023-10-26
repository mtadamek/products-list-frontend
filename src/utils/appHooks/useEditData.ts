import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState } from "react";
import useAppDispatch from "./useAppDispatch";
import { SUCCESS_HTTP_CODES } from "../../constants";

const useEditData = <T>(
  editMethod: (data: T) => Promise<number | undefined>,
  action: ActionCreatorWithPayload<T, string>
) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseStatus, setResponseStatus] = useState<number>();

  const editData = React.useMemo(
    () => async (data: T) => {
      setIsEditing(true);
      setIsError(false);
      setResponseStatus(undefined);

      const status = await editMethod(data);

      if (status && SUCCESS_HTTP_CODES.includes(status)) {
        dispatch(action(data));
      } else {
        setIsError(true);
      }
      setResponseStatus(status);
      setIsEditing(false);
    },
    [editMethod, action]
  );

  return { isEditing, isError, responseStatus, editData };
};

export default useEditData;
