import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

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
        <div className="card card-product my-5 p-0">
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
                      <h5 className="fw-normal mb-3">
                        Category: {product.category}
                      </h5>
                      <h5 className="fw-normal mb-3">
                        Condition: {product.condition}
                      </h5>
                      <h5 className="fw-normal mb-3">
                        Uploaded by: {product.seller.username}
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
                  <Link
                    to={`/exchange/${id}`}
                    className="btn btn-success btn-lg text-primary fw-bold d-block mt-5"
                  >
                    Make an offer
                  </Link>
                  <Link
                    to={`/reports/${id}`}
                    className="btn btn-danger btn-lg text-white fw-bold d-block mt-5"
                  >
                    Report Product
                  </Link>
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
            <Link
              to="/products"
              className="btn btn-outline-primary btn-lg text-primary fw-bold my-5"
            >
              Back to products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
