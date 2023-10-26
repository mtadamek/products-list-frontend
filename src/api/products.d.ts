export interface IGetResponseData<T> {
  status?: number;
  data?: T;
}

export interface IPostResponseData {
  status?: number;
  id?: number;
}

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  count: number;
  date: string;
  category: number;
  description?: string;
}
