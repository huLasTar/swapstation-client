import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-dark bg-dark border-0 m-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          SwapStation
        </Link>

        <Link to="#about">About</Link>
        <Link to="#faq">FAQ</Link>
        <Link to="#contact">Contact</Link>

        {isLoggedIn && (
          <>
            <Link to="/products">Products</Link>
            <Link to="/products/create" className="btn btn-outline-success">
              New Product
            </Link>
            <Link to="/profile" className="btn btn-outline-success">
              Profile
            </Link>
            <button className="btn btn-outline-danger" onClick={logOutUser}>
              Logout
            </button>
            <span className="badge bg-success text-dark">
              Welcome, {user && user.username}
            </span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup" className="btn btn-success">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-outline-success">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
