import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AddProduct from "../components/AddProduct";

const API_URL = "http://localhost:5005";

function ProductListPage() {
  const navigate = useNavigate();

  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/products/create`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/products/create");
      })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProducts();
    // console.log();
  }, []);

  return (
    <div className="album py-5 ProductListPage">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <AddProduct refreshProducts={getAllProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
