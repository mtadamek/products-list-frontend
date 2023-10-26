import { IFormItemConfig } from "../pages/products/manage/FormItem/FormItem";

export const SUCCESS_HTTP_CODES = [200, 201];
export const CATEGORIES = ["smartfony", "laptopy", "wyświetlacze"];
export const FORM_ITEMS_CONFIG: IFormItemConfig[] = [
  {
    name: "Nazwa",
    propName: "name",
    inputType: "text",
    type: "input",
  },
  {
    name: "Cena",
    propName: "price",
    inputType: "number",
    type: "input",
  },
  {
    name: "Ilość w magazynie",
    propName: "count",
    inputType: "number",
    type: "input",
  },
  {
    name: "Data produkcji",
    propName: "date",
    inputType: "date",
    type: "input",
  },
  {
    name: "Kategoria",
    propName: "category",
    type: "select",
  },
  {
    name: "Opis",
    propName: "description",
    inputType: "text",
    type: "input",
  },
];
