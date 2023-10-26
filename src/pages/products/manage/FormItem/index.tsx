import React from "react";
import { Input, InputContainer, Select, ValidationError } from "../components";
import { IFormItemProps } from "./FormItem.d";
import { CATEGORIES } from "../../../../constants";

const FormItem = ({
  name,
  propName,
  inputType,
  type,
  formik,
}: IFormItemProps) => {
  return (
    <>
      <label htmlFor="name">{name}</label>
      <InputContainer>
        {type === "input" && (
          <Input
            id={propName}
            name={propName}
            type={inputType}
            onChange={formik.handleChange}
            value={formik.values[propName]}
          />
        )}
        {type === "select" && propName === "category" && (
          <Select
            id={propName}
            name={propName}
            onChange={formik.handleChange}
            value={formik.values[propName]}
          >
            {CATEGORIES.map((category, index) => (
              <option key={category} value={index}>
                {category}
              </option>
            ))}
          </Select>
        )}
        {formik.errors[propName] && formik.touched[propName] ? (
          <ValidationError>{formik.errors[propName]}</ValidationError>
        ) : null}
      </InputContainer>
    </>
  );
};

export default FormItem;
