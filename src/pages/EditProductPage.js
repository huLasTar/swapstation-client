import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import service from "../api/service";

const API_URL = "https://swapstation.herokuapp.com";

function EditProductPage(props) {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [purchasable, setPurchasable] = useState("");
  const [price, setPrice] = useState("");
  const [reported, setReported] = useState("");
  const [seller, setSeller] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProduct = response.data;
        setTitle(oneProduct.title);
        setImageUrl(oneProduct.setImageUrl);
        setCategory(oneProduct.category);
        setCondition(oneProduct.condition);
        setDescription(oneProduct.description);
        setPurchasable(oneProduct.purchasable);
        setPrice(oneProduct.price);
        setReported(oneProduct.reported);
        setSeller(oneProduct.seller);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => setImageUrl(response.fileUrl))
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      imageUrl,
      category,
      condition,
      description,
      purchasable,
      price,
      reported,
      seller,
    };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/products/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/products/${id}`);
      });
  };

  const deleteProduct = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container EditProductPage">
      <div className="row">
        <div className="card card-editproduct my-5">
          <div className="card-body py-5">
            <form onSubmit={handleFormSubmit}>
              <div className="col-12">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">Edit Product</h3>

                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
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
                          <option value="PSVite">PlayStation Vita</option>
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
                          className="form-control"
                          type="text"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
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
                          className="form-control"
                          type="number"
                          name="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="imageUrl" className="form-label">
                          Image
                        </label>
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e)}
                          className="form-control"
                        />
                        <small>Current image: {imageUrl}</small>
                      </div>
                    </div>
                  </div>

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

            <button
              className="btn btn-danger btn-lg mt-5"
              onClick={deleteProduct}
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductPage;
