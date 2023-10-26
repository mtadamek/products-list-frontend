import React from "react";
import { Button, Content, Header, HeaderContent } from "../components";
import { Form, Input, Select, Spinner } from "./components";
import useProductManageData from "./hooks";
import { CATEGORIES } from "../../../constants";

const ProductsManage = () => {
  const { formik, isInted, isSaveing, handleBackClick } =
    useProductManageData();

  return (
    <>
      <Header>
        <HeaderContent>
          <Button onClick={handleBackClick}>Wróć</Button>Dodaj product
        </HeaderContent>
      </Header>
      <Content>
        {!isInted ? (
          <Spinner />
        ) : (
          <Form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="name">Nazwa</label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <label htmlFor="price">Cena</label>
            <Input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
            />

            <label htmlFor="count">Ilość w magazynie</label>
            <Input
              id="count"
              name="count"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.count}
            />

            <label htmlFor="date">Data produkcji</label>
            <Input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />

            <label htmlFor="category">Kategoria</label>
            <Select
              value={formik.values.category}
              onChange={formik.handleChange}
              name="category"
              id="category"
            >
              {CATEGORIES.map((category, index) => (
                <option key={category} value={index}>
                  {category}
                </option>
              ))}
            </Select>

            <label htmlFor="description">Opis</label>
            <Input
              id="description"
              name="description"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <Button type="submit">
              {isSaveing && <Spinner />}
              Zapisz
            </Button>
          </Form>
        )}
      </Content>
    </>
  );
};

export default ProductsManage;
