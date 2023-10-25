import React from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./components";

const ProductsPage = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default ProductsPage;
