import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://swapstation.herokuapp.com";

function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleZipCode = (e) => setZipCode(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      username,
      password,
      email,
      firstName,
      lastName,
      address,
      city,
      zipCode,
      phoneNumber,
    };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section id="SignupPage">
      <div className="container">
        <div className="row">
          <div className="card card-registration bg-primary text-white border border-success shadow-sm my-5">
            <div className="card-body py-5">
              <form className="row" onSubmit={handleSignupSubmit}>
                <div className="col-6">
                  <div className="p-5">
                    <h3 className="fw-normal mb-5">
                      General <span className="text-success">Infomation</span>
                    </h3>

                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstName}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastName}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleUsername}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password" className="form-label">
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
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-5">
                    <h3 className="fw-normal mb-5">
                      Contact <span className="text-success">Details</span>
                    </h3>

                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            value={address}
                            onChange={handleAddress}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="city"
                            value={city}
                            onChange={handleCity}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="zipCode" className="form-label">
                            Zip Code
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            name="zipCode"
                            value={zipCode}
                            onChange={handleZipCode}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handlePhoneNumber}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button
                          className="btn btn-success btn-lg fw-bold mt-5"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {errorMessage && (
                <p className="error-message d-inline-block bg-danger text-white fw-bold px-5 py-2 m-5">
                  {errorMessage}
                </p>
              )}

              <h3 className="fw-normal m-0">
                Already have <span className="text-success">account?</span>
              </h3>
              <Link
                className="btn btn-success btn-lg fw-bold mt-5"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
