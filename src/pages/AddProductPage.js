import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import service from "../api/service";

const API_URL = "https://swapstation.herokuapp.com";

function AddProductPage(props) {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("PS5");
  const [condition, setCondition] = useState("new");
  const [description, setDescription] = useState("");
  const [purchasable, setPurchasable] = useState(false);
  const [price, setPrice] = useState(0);
  const [reported, setReported] = useState(false);
  const [seller, setSeller] = useState("");

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => setImageUrl(response.fileUrl))
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
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
      seller: user._id,
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
        setImageUrl("");
        setCategory("");
        setCondition("");
        setDescription("");
        setPurchasable(false);
        setPrice(0);
        setReported(false);
        setSeller("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id="AddProduct">
      <div className="container">
        <div className="row">
          <div className="card card-addproduct bg-primary text-white border border-success shadow-sm my-5">
            <div className="card-body py-5">
              <form onSubmit={handleSubmit}>
                <div className="col-12">
                  <div className="p-5">
                    <h3 className="fw-normal mb-5">
                      Add <span className="text-success">Product</span>
                    </h3>
                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="title" className="form-label my-1">
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
                          <label htmlFor="category" className="form-label my-1">
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
                          <label
                            htmlFor="condition"
                            className="form-label my-1"
                          >
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
                          <label
                            htmlFor="description"
                            className="form-label my-1"
                          >
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
                          <label
                            htmlFor="purchasable"
                            className="form-label my-1"
                          >
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
                          <label htmlFor="price" className="form-label my-1">
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
                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="imageUrl" className="form-label my-1">
                            Image
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileUpload(e)}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    {!imageUrl && (
                      <div className="row">
                        <div className="col-12">
                          <button
                            className="btn btn-success btn-lg mt-5"
                            type="submit"
                            disabled={true}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                    {imageUrl && (
                      <div className="row">
                        <div className="col-12">
                          <button
                            className="btn btn-success btn-lg text-primary fw-bold mt-5"
                            type="submit"
                            disabled={false}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddProductPage;
