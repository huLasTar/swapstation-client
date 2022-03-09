import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = "https://swapstation.herokuapp.com";

function SwapOffer(props) {
  const { user } = useContext(AuthContext);

  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");
  const [buyerItem, setBuyerItem] = useState("");
  const [sellerItem, setSellerItem] = useState("");
  const [dateOfSwap, setDateOfSwap] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      buyer,
      seller,
      buyerItem,
      sellerItem,
      dateOfSwap,
      comment,
      status,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/exchanges`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setBuyer(user._id);
        setSeller();
        setBuyerItem("");
        setSellerItem("");
        setDateOfSwap(Date.now);
        setComment("");
        setStatus("Pending");
        // props.refreshExchanges();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container SwapOffer">
      <div className="row">
        <div className="card card-registration my-5">
          <div className="card-body py-5">
            <form onSubmit={handleSubmit}>
              <div className="col-12">
                <div className="p-2">
                  <h3 className="fw-normal mb-2">
                    Make An <span className="text-success">Offer</span>
                  </h3>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="buyerItem" className="form-label">
                          My item for swap
                        </label>
                        <input
                          type="text"
                          name="buyerItem"
                          value={buyerItem}
                          onChange={(e) => setBuyerItem(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="comment" className="form-label">
                          Comments to seller
                        </label>
                        <input
                          type="text"
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        className="btn btn-success btn-lg mt-5"
                        type="submit"
                      >
                        Send Offer
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

export default SwapOffer;
