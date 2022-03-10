import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark fw-bold border-0 m-0">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand m-0">
            <img
              src="https://res.cloudinary.com/hulastar/image/upload/v1646911790/SwapStation/swapstation_logo_qscp3u.png"
              alt=""
              width="56"
              height="75"
            />
            SwapStation
          </h1>
        </Link>

        <HashLink smooth to="#about">
          About
        </HashLink>
        <HashLink smooth to="#faq">
          FAQ
        </HashLink>
        <HashLink smooth to="#contact">
          Contact
        </HashLink>

        {isLoggedIn && (
          <>
            <Link to="/products">Products</Link>
            <Link
              to="/products/create"
              className="btn btn-outline-success fw-normal"
            >
              New Product
            </Link>

            <button
              className="btn btn-outline-danger fw-normaol"
              onClick={logOutUser}
            >
              Logout
            </button>
            <span className="badge bg-secondary text-dark fw-normal">
              Welcome, {user && user.username}
            </span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup" className="btn btn-outline-success fw-normal">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-outline-success fw-normal">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
