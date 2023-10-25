import React from "react";
import {
  Button,
  Content,
  Header,
  HeaderContent,
  List,
  Spinner,
} from "../components";
import useProductsData from "../hooks/useProductsData";
import ListItem from "./ListItem";

const ProductsList = () => {
  const { products, isLoading } = useProductsData();

  return (
    <>
      <Header>
        <HeaderContent>
          Lista produktów
          <Button>Dodaj product</Button>
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
