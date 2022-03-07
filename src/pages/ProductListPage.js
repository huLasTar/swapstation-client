import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./../components/ProductCard";

const API_URL = "http://localhost:5005";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/products`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setProducts(response.data))
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
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
