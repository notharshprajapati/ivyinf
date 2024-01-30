// AppRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/";
import AccessoriesPage from "../Pages/AccessoriesPage";
import CartMenuPage from "../Pages/CartMenuPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/cart" element={<CartMenuPage />} />
    </Routes>
  );
};

export default AppRouter;
