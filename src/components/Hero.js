import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Hero() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section id="hero">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://res.cloudinary.com/hulastar/image/upload/v1646932321/SwapStation/heroimg_kam29j.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Welcome to SwapStation!"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-end">
            <h2 className="display-5 fw-bold lh-1 mb-3">
              Swap free,{" "}
              <span className="text-success">just pay shipping!</span>
            </h2>
            <p className="lead">
              Browse our collection and get a fair exchange!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-end">
              {!isLoggedIn && (
                <>
                  <Link
                    to="/signup"
                    className="btn btn-success btn-lg px-4 me-md-2"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-outline-success btn-lg px-4"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
