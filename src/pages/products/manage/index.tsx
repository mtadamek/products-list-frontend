import React from "react";
import { Button, Content, Header, HeaderContent } from "../components";
import { Form, Spinner } from "./components";
import useProductManageData from "./hooks";
import { FORM_ITEMS_CONFIG } from "../../../constants";
import FormItem from "./FormItem";

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
          <Form onSubmit={formik.handleSubmit}>
            {FORM_ITEMS_CONFIG.map((item) => (
              <FormItem
                key={item.propName}
                name={item.name}
                propName={item.propName}
                inputType={item.inputType}
                type={item.type}
                formik={formik}
              />
            ))}
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
