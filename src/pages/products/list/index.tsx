import React from "react";
import {
  Button,
  Content,
  Header,
  HeaderContent,
  List,
  Spinner,
} from "../components";
import { useProductsData } from "./hooks";
import ListItem from "./ListItem";

const ProductsList = () => {
  const { products, isLoading, handleAddProduct } = useProductsData();

  return (
    <>
      <Header>
        <HeaderContent>
          Lista produktów
          <Button onClick={handleAddProduct}>Dodaj product</Button>
        </HeaderContent>
      </Header>
      <Content>
        {isLoading ? (
          <Spinner />
        ) : (
          <List>
            {products.map((product) => (
              <ListItem key={product.id} product={product} />
            ))}
          </List>
        )}
      </Content>
    </>
  );
};

export default ProductsList;
