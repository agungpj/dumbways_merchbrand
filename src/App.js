import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homescreen from "../src/screen/Homescreen";
import PrivateRoute from "./private/PrivateRoute";
import PrivateScreen from "./screen/PrivateScreen";
import DetailProduct from "./screen/DetailProduct";
import Profile from "./screen/Profile";
import Complain from "./screen/Complain";
import ProductAdmin from "./screen/ProductAdmin";
import CategoryAdmin from "./screen/CategoryAdmin";
import EditProductAdmin from "./screen/EditProductAdmin";
import EditCategoryAdmin from "./screen/EditCategoryAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} exact></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/private" element={<PrivateScreen />}></Route>
          <Route path="/product/:id" element={<DetailProduct />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/category" element={<CategoryAdmin />}></Route>
          <Route path="/complain" element={<Complain />}></Route>
          <Route path="/list-product" element={<ProductAdmin />}></Route>

          <Route path="/update-product" element={<EditProductAdmin />}></Route>
          <Route
            path="/update-category"
            element={<EditCategoryAdmin />}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
