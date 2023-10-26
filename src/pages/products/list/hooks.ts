import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../api/products";
import useAppSelector from "../../../utils/appHooks/useAppSelector";
import useGetData from "../../../utils/appHooks/useGetData";
import { setCurrentProduct, setProductsList } from "../slice";
import { useEffect, useState } from "react";
import useDeleteData from "../../../utils/appHooks/useDeleteData";
import { deleteProduct as deleteProductApi } from "../../../api/products";
import { deleteProduct as deleteProductAction } from "../slice";
import { IProduct } from "../../../api/products.d";
import useAppDispatch from "../../../utils/appHooks/useAppDispatch";

export const useProductsData = () => {
  const navigate = useNavigate();
  const { isLoading, isError, getData } = useGetData(
    getProducts,
    setProductsList
  );
  const products = useAppSelector((state) => state.products.list);

  useEffect(() => {
    if (products.length == 0) {
      getData();
    }
  }, []);

  const handleAddProduct = () => {
    navigate("/products/add");
  };

  return { products, isLoading, isError, handleAddProduct };
};

export const useListItemData = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { deleteData, isDeleting, isError } = useDeleteData(
    deleteProductApi,
    deleteProductAction
  );
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleItemClick = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const handleDeleteClick = (id: number) => {
    deleteData(id);
  };

  const handleEditProduct = (product: IProduct) => {
    dispatch(setCurrentProduct(product));
    navigate(`/products/${product.id}/edit`);
  };

  return {
    isDeleting,
    isError,
    isDetailsVisible,
    handleDeleteClick,
    handleItemClick,
    handleEditProduct,
  };
};
