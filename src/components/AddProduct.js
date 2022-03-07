import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddProduct(props) {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [purchasable, setPurchasable] = useState("");
  const [price, setPrice] = useState("");
  const [reported, setReported] = useState("");
  const [seller, setSeller] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      category,
      condition,
      description,
      purchasable,
      price,
      reported,
      seller,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/products`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setCategory("");
        setCondition("");
        setDescription("");
        setPurchasable(false);
        setPrice(0);
        setReported(false);
        setSeller("");
        props.refreshProducts();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container AddProduct">
      <div className="row">
        <div className="card card-registration my-5">
          <div className="card-body py-5">
            <form onSubmit={handleSubmit}>
              <div className="col-12">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">Add Product</h3>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="category" className="form-label">
                          Category
                        </label>
                        <select
                          name="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="form-control"
                        >
                          <option value="PS5">PlayStation 5</option>
                          <option value="PS4">PlayStation 4</option>
                          <option value="PS3">PlayStation 3</option>
                          <option value="PS2">PlayStation 2</option>
                          <option value="PS1">PlayStation 1</option>
                          <option value="PSVita">PlayStation Vita</option>
                          <option value="PSP">PlayStation Portable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="condition" className="form-label">
                          Condition
                        </label>
                        <select
                          name="condition"
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                          className="form-control"
                        >
                          <option value="new">New</option>
                          <option value="usednew">Used - Like new</option>
                          <option value="usedgood">Used - Good</option>
                          <option value="usedfair">Used - Fair</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="purchasable" className="form-label">
                          Purchasable
                        </label>
                        <select
                          name="purchasable"
                          value={purchasable}
                          onChange={(e) => setPurchasable(e.target.value)}
                          className="form-control"
                        >
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="price" className="form-label">
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="seller"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    className="form-control"
                    readOnly
                  />
                  <div className="row">
                    <div className="col-12">
                      <button
                        className="btn btn-success btn-lg mt-5"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
