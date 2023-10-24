export interface IResponseData<T> {
  status?: number;
  data?: T;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  count: number;
  date: Date;
  category: number;
  description?: string;
}
