import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import SwapOffer from "../components/SwapOffer";

const API_URL = "https://swapstation.herokuapp.com";

function ProductDetailsPage(props) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const getProduct = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProduct = response.data;
        setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container ProductDetails">
      <div className="row">
        <div className="card card-product border border-success my-5 p-0">
          <div className="card-body p-0 m-0">
            <div className="row">
              <div className="col-6">
                <div className="p-0">
                  {product && (
                    <img
                      className="img-fluid rounded-start"
                      src={product.imageUrl}
                      alt={product.title}
                    />
                  )}
                </div>
              </div>
              <div className="col-6 text-start">
                <div className="p-5">
                  {product && (
                    <>
                      <h3 className="fw-normal mb-3">{product.title}</h3>
                      <hr />
                      {product.category === "PS5" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation 5
                        </h5>
                      )}
                      {product.category === "PS4" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation 4
                        </h5>
                      )}
                      {product.category === "PS3" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation 3
                        </h5>
                      )}
                      {product.category === "PS2" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation 2
                        </h5>
                      )}
                      {product.category === "PS1" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation 1
                        </h5>
                      )}
                      {product.category === "PSVita" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation Vita
                        </h5>
                      )}
                      {product.category === "PSP" && (
                        <h5 className="fw-normal mb-3">
                          Category: PlayStation Portable
                        </h5>
                      )}
                      {product.condition === "new" && (
                        <h5 className="fw-normal mb-3">Condition: New</h5>
                      )}
                      {product.condition === "usednew" && (
                        <h5 className="fw-normal mb-3">
                          Condition: Used - Like New
                        </h5>
                      )}
                      {product.condition === "usedgood" && (
                        <h5 className="fw-normal mb-3">
                          Condition: Used - Good
                        </h5>
                      )}
                      {product.condition === "usedfair" && (
                        <h5 className="fw-normal mb-3">
                          Condition: Used - Fair
                        </h5>
                      )}
                      <h5 className="fw-normal mb-3">
                        Seller: {product.seller.username}
                      </h5>
                      <h5 className="fw-normal mb-3">
                        Location: {product.seller.city}
                      </h5>
                      <h5 className="fw-normal mb-3">
                        Purchasable: {product.purchasable ? "Yes" : "No"}
                      </h5>
                      {product.purchasable && product.price > 0 && (
                        <h5 className="fw-normal mb-3">
                          Price: {product.price} HUF
                        </h5>
                      )}
                      <hr />
                      <h5 className="fw-normal mb-3">Description:</h5>
                      <p className="lead">{product.description}</p>
                    </>
                  )}

                  {product && product.seller._id !== user._id && <SwapOffer />}

                  {product && product.seller._id !== user._id && (
                    <Link
                      to={`/reports/${id}`}
                      className="btn btn-danger btn-lg text-white fw-bold d-block mt-5"
                    >
                      Report Product
                    </Link>
                  )}
                  {product && product.seller._id === user._id && (
                    <Link
                      to={`/products/edit/${id}`}
                      className="btn btn-warning btn-lg text-dark fw-bold d-block mt-5"
                    >
                      Edit Product
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center fs-3 d-block">
          <Link to="/products" className="text-white fw-bold my-5">
            &laquo; Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
