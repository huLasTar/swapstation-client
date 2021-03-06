import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fw-bold border-0 m-0">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand m-0">
            <img
              src="https://res.cloudinary.com/hulastar/image/upload/v1646911790/SwapStation/swapstation_logo_qscp3u.png"
              alt=""
              width="56"
              height="75"
            />
            Swap<span className="text-success">Station</span>
          </h1>
        </Link>

        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <HashLink smooth className="nav-link text-success" to="/#about">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/#products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link text-success" to="/#faq">
                FAQ
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link text-success" to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {isLoggedIn && (
          <>
            <div className="btn-group">
              <Link to="/products/create" className="btn btn-success text-dark">
                New Product
              </Link>
              <button className="btn btn-outline-success" onClick={logOutUser}>
                Logout
              </button>
            </div>
            <span className="badge bg-secondary text-dark fw-normal mx-2">
              Welcome, {user && user.username}
            </span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <div className="btn-group">
              <Link to="/signup" className="btn btn-outline-success">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-outline-success">
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
