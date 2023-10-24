import React from "react";
import {
  Actions,
  Button,
  Content,
  Header,
  List,
  ListItem,
  RemoveButton,
  Spinner,
} from "../components";
import useProductsData from "../hooks/useProductsData";

const ProductsList = () => {
  const { products, isLoading } = useProductsData();

  return (
    <>
      <Header>
        Lista produktów
        <Button>Dodaj product</Button>
      </Header>
      <Content>
        {isLoading ? (
          <Spinner />
        ) : (
          <List>
            {products.map((product) => (
              <ListItem key={product.id}>
                {product.name}
                <Actions>
                  <Button>Edytuj</Button>
                  <RemoveButton>Usuń</RemoveButton>
                </Actions>
              </ListItem>
            ))}
          </List>
        )}
      </Content>
    </>
  );
};

export default ProductsList;
