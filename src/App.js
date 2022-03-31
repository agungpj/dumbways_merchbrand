import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homescreen from "../src/screen/Homescreen";
import PrivateRoute from "./private/PrivateRoute";
import PrivateScreen from "./screen/PrivateScreen";
import DetailProduct from "./screen/DetailProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} exact></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/product/:id" element={<DetailProduct />} exact></Route>
          <Route path="/private" element={<PrivateScreen />} exact></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
