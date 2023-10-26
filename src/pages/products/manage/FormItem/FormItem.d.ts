import { IProduct } from "../../../../api/products.d";

export interface IFormItemConfig {
  name: string;
  propName: keyof IProduct;
  type: "input" | "select";
  inputType?: React.HTMLInputTypeAttribute;
}

export type IFormItemProps = IFormItemConfig & {
  formik: FormikProps<IProduct>;
};
