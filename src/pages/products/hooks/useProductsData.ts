import { getProducts } from "../../../api/products";
import useGetDataFromApi from "../../../utils/appHooks/useGetDataFromApi";

const useProductsData = () => {
  const { data, isLoading, isError } = useGetDataFromApi(getProducts);

  return { products: data || [], isLoading, isError };
};

export default useProductsData;
