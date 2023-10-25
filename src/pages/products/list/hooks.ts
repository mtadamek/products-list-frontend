import { getProducts } from "../../../api/products";
import useAppSelector from "../../../utils/appHooks/useAppSelector";
import useGetDataFromApi from "../../../utils/appHooks/useGetDataFromApi";
import { setProductsList } from "../slice";

export const useProductsData = () => {
  const { isLoading, isError } = useGetDataFromApi(
    getProducts,
    setProductsList
  );
  const products = useAppSelector((state) => state.products.list);

  return { products, isLoading, isError };
};
