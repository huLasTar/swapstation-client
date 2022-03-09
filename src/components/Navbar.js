import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-dark bg-dark border-0 m-0">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand m-0">SwapStation</h1>
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

            <button className="btn btn-outline-danger" onClick={logOutUser}>
              Logout
            </button>
            <span className="badge bg-secondary text-dark">
              Welcome, {user && user.username}
            </span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/signup" className="btn btn-outline-success">
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
