import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductsPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default ProductsPage;
