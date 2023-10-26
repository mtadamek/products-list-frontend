import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import useCreateData from "../../../utils/appHooks/useCreateData";
import {
  createProduct,
  getProduct,
  editProduct as editProductApi,
} from "../../../api/products";
import { addProduct, editProduct, setCurrentProduct } from "../slice";
import useAppSelector from "../../../utils/appHooks/useAppSelector";
import useGetData from "../../../utils/appHooks/useGetData";
import useEditData from "../../../utils/appHooks/useEditData";
import { SUCCESS_HTTP_CODES } from "../../../constants";
import formValidations from "../../../utils/formValidations";
import useAppDispatch from "../../../utils/appHooks/useAppDispatch";

const useProductManageData = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { isError: isGetError, getData } = useGetData(
    getProduct,
    setCurrentProduct
  );
  const {
    isCreating,
    responseStatus: createResponseStatus,
    createData,
  } = useCreateData(createProduct, addProduct);
  const {
    isEditing,
    responseStatus: editResponseStatus,
    editData,
  } = useEditData(editProductApi, editProduct);

  const currentProduct = useAppSelector((state) => state.products.current);

  const isInted = React.useMemo(
    () => (productId ? !!currentProduct : true),
    [productId, currentProduct]
  );

  const isSaveing = React.useMemo(
    () => isCreating || isEditing,
    [isCreating, isEditing]
  );

  const saveResponseStatus = createResponseStatus || editResponseStatus;

  const navigate = useNavigate();

  const goBack = () => {
    dispatch(setCurrentProduct(undefined));
    navigate("..");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      count: 0,
      date: "",
      category: 0,
      description: "",
    },
    validate: formValidations.products,
    onSubmit: (values) => {
      productId ? editData(values) : createData(values);
    },
  });

  useEffect(() => {
    if (currentProduct && productId) {
      formik.setValues({ ...currentProduct, description: "" });
    } else if (productId) {
      getData(Number(productId));
    }
  }, [currentProduct, productId]);

  useEffect(() => {
    if (isGetError) {
      goBack();
    }
  }, [isGetError]);

  useEffect(() => {
    if (!isSaveing && saveResponseStatus) {
      if (SUCCESS_HTTP_CODES.includes(saveResponseStatus)) {
        alert("Zapisano pomyślnie!");
        goBack();
      } else {
        alert("Błąd podczas zapisu");
      }
    }
  }, [isSaveing, saveResponseStatus]);

  return {
    formik,
    isSaveing,
    isInted,
    handleBackClick: goBack,
  };
};

export default useProductManageData;
