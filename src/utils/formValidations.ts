import { IProduct } from "../api/products.d";

const products = (values: IProduct) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "Pole nazwa jest wymagane";
  }
  if (values.price === undefined) {
    errors.price = "Pole cena jest wymagane";
  }
  if (values.count === undefined) {
    errors.count = "Pole ilość jest wymagane";
  }
  if (!values.date) {
    errors.date = "Pole data jest wymagane";
  }
  if (values.category === undefined) {
    errors.category = "Pole kategoria jest wymagane";
  }
  return errors;
};

export default { products };
