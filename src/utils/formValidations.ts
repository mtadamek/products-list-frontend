import { IProduct } from "../api/products.d";

const products = (values: IProduct) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "Pole nazwa jest wymagane";
  }
  if (values.name.length > 100) {
    errors.name = "Nazwa może posiadać maksymalnie 100 znaków";
  }
  if (values.price === undefined) {
    errors.price = "Pole cena jest wymagane";
  }
  if (values.price < 0) {
    errors.price = "Cena nie może być mniejsza od 0";
  }
  if (values.count === undefined) {
    errors.count = "Pole ilość jest wymagane";
  }
  if (values.count < 0) {
    errors.count = "Ilość nie może być mniejsza od 0";
  }
  if (!values.date) {
    errors.date = "Pole data jest wymagane";
  }
  if (values.category === undefined) {
    errors.category = "Pole kategoria jest wymagane";
  }
  if (values.description && values.description.length > 2000) {
    errors.description = "Opis może posiadać maksymalnie 2000 znaków";
  }
  return errors;
};

export default { products };
