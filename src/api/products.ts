import { AxiosError, AxiosResponse } from "axios";
import axios from "../utils/axios";
import { IGetResponseData, IPostResponseData, IProduct } from "./products.d";

export const getProducts = (): Promise<IGetResponseData<IProduct[]>> =>
  axios
    .get("/products")
    .then(({ status, data }: AxiosResponse) => ({ status, data }))
    .catch(({ response }: AxiosError) => ({ status: response?.status }));

export const getProduct = (id: number): Promise<IGetResponseData<IProduct>> =>
  axios
    .get(`/products/${id}`)
    .then(({ status, data }: AxiosResponse) => ({ status, data }))
    .catch(({ response }: AxiosError) => ({ status: response?.status }));

export const deleteProduct = (id: number): Promise<number | undefined> =>
  axios
    .delete(`/products/${id}`)
    .then(({ status }: AxiosResponse) => status)
    .catch(({ response }: AxiosError) => response?.status);

export const createProduct = ({
  name,
  price,
  count,
  category,
  date,
  description,
}: IProduct): Promise<IPostResponseData> =>
  axios
    .post(`/products`, {
      name,
      price,
      count,
      category,
      date,
      description,
    })
    .then(({ status, data }: AxiosResponse) => ({ status, id: data }))
    .catch(({ response }: AxiosError) => ({ status: response?.status }));

export const editProduct = ({
  id,
  name,
  price,
  count,
  category,
  date,
  description,
}: IProduct): Promise<number | undefined> =>
  axios
    .put(`/products/${id}`, { name, price, count, category, date, description })
    .then(({ status }: AxiosResponse) => status)
    .catch(({ response }: AxiosError) => response?.status);
