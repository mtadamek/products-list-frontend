import { createBrowserRouter, redirect } from "react-router-dom";
import ProductsPage from "../pages/products";
import ProductsManage from "../pages/products/manage";
import ProductsList from "../pages/products/list";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage />,
    children: [
      {
        path: "",
        element: <ProductsList />,
      },
      {
        path: "add",
        element: <ProductsManage />,
      },
      {
        path: ":productId/edit",
        element: <ProductsManage />,
      },
    ],
  },
  { path: "*", loader: () => redirect("/products") },
]);

export default router;
