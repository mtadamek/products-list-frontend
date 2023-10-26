import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState } from "react";
import useAppDispatch from "./useAppDispatch";
import { SUCCESS_HTTP_CODES } from "../../constants";

const useDeleteData = (
  deleteMethod: (id: number) => Promise<number | undefined>,
  action: ActionCreatorWithPayload<number, string>
) => {
  const dispatch = useAppDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isError, setIsError] = useState(false);

  const deleteData = React.useMemo(
    () => async (id: number) => {
      setIsDeleting(true);
      setIsError(false);
      const status = await deleteMethod(id);

      if (status && SUCCESS_HTTP_CODES.includes(status)) {
        dispatch(action(id));
      } else {
        setIsError(true);
      }
      setIsDeleting(false);
    },
    [deleteMethod, action]
  );

  return { isDeleting, isError, deleteData };
};

export default useDeleteData;
