import { AxiosError, AxiosResponse } from "axios";
import axios from "../utils/axios";

export const getProducts = () =>
  axios
    .get("/products")
    .then(({ status, data }: AxiosResponse) => ({ status, data }))
    .catch(({ response }: AxiosError) => ({ status: response?.status }));
