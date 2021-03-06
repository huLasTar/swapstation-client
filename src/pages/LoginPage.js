import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "https://swapstation.herokuapp.com";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section id="LoginPage">
      <div className="container">
        <div className="row">
          <div className="card card-login bg-primary text-white border border-success shadow-sm my-5">
            <div className="card-body py-5">
              <h3 className="fw-bold mb-5">
                Sign <span className="text-success">In</span>
              </h3>

              <form onSubmit={handleLoginSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <div className="form-group">
                      <label htmlFor="username" className="form-label my-1">
                        Username
                      </label>
                      <input
                        className="form-control"
                        type="username"
                        name="username"
                        value={username}
                        onChange={handleUsername}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="form-label my-1">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <button
                      className="btn btn-success btn-lg text-primary fw-bold mt-4"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>

              {errorMessage && (
                <p className="error-message d-inline-block bg-danger text-white fw-bold px-5 py-2 m-5">
                  {errorMessage}
                </p>
              )}

              <h3 className="fw-bold my-4">
                Don't have an <span className="text-success">account yet?</span>
              </h3>
              <Link
                className="btn btn-success btn-lg text-primary fw-bold"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
