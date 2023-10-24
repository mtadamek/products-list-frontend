import { AxiosError, AxiosResponse } from "axios";
import axios from "../utils/axios";
import { IResponseData, IProduct } from "./products.d";

export const getProducts = (): Promise<IResponseData<IProduct[]>> =>
  axios
    .get("/products")
    .then(({ status, data }: AxiosResponse) => ({ status, data }))
    .catch(({ response }: AxiosError) => ({ status: response?.status }));
