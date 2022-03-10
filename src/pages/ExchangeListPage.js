import { useState, useEffect } from "react";
import axios from "axios";

import ExchangeCard from "./../components/ExchangeCard";

const API_URL = "https://swapstation.herokuapp.com";

function ExchangeListPage() {
  const [exchanges, setExchanges] = useState([]);

  const getAllExchanges = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/exchanges`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setExchanges(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllExchanges();
  }, []);

  return (
    <section id="ExchangeList">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <h2 className="display-5 fw-bold lh-1 mb-3">
            Check <span className="text-success">Exchanges</span>
          </h2>
          <div className="album py-5 ExchangeListPage">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {exchanges.map((exchange) => (
                  <ExchangeCard key={exchange._id} {...exchange} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangeListPage;
