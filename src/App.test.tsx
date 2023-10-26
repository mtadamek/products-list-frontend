import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import FormItem from "./pages/products/manage/FormItem";
import { useFormik } from "formik";
import formValidations from "./utils/formValidations";

it("render name form input", () => {
  const formik = { handleChange: () => {}, values: {}, errors: {} };

  render(
    <FormItem
      name={"Nazwa"}
      propName={"name"}
      inputType={"text"}
      type={"input"}
      formik={formik}
    />
  );

  const nameLabel = screen.getByText(/Nazwa/i);
  expect(nameLabel).toBeInTheDocument();
});

it("render name required error message ", () => {
  const formik = {
    handleChange: () => {},
    values: {},
    errors: { name: "Pole nazwa jest wymagane" },
    touched: { name: true },
  };

  render(
    <FormItem
      name={"Nazwa"}
      propName={"name"}
      inputType={"text"}
      type={"input"}
      formik={formik}
    />
  );

  const nameRequiredError = screen.getByText(/Pole nazwa jest wymagane/i);
  expect(nameRequiredError).toBeInTheDocument();
});

it("render name required error message ", () => {
  const formik = {
    handleChange: () => {},
    values: {},
    errors: { name: "Nazwa może posiadać maksymalnie 100 znaków" },
    touched: { name: true },
  };

  render(
    <FormItem
      name={"Nazwa"}
      propName={"name"}
      inputType={"text"}
      type={"input"}
      formik={formik}
    />
  );

  const nameRequiredError = screen.getByText(
    /Nazwa może posiadać maksymalnie 100 znaków/i
  );
  expect(nameRequiredError).toBeInTheDocument();
});
