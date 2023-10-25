import { AxiosError, AxiosResponse } from "axios";
import axios from "../utils/axios";
import { IResponseData, IProduct } from "./products.d";

export const getProducts = (): Promise<IResponseData<IProduct[]>> =>
  axios
    .get("/products")
    .then(({ status, data }: AxiosResponse) => ({ status, data }))
    .catch(({ response }: AxiosError) => ({ status: response?.status }));

export const deleteProduct = (id: number): Promise<number | undefined> =>
  axios
    .delete(`/products/${id}`)
    .then(({ status }: AxiosResponse) => status)
    .catch(({ response }: AxiosError) => response?.status);
