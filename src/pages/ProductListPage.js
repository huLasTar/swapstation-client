import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./../components/ProductCard";

const API_URL = "https://swapstation.herokuapp.com";

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
  }, []);

  return (
    <section id="products" className="bg-primary text-white">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <h2 className="display-5 fw-bold lh-1 mb-3">
            Browse <span className="text-success">Products</span>
          </h2>
          <div className="album py-5 ProductListPage">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {products.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductListPage;
