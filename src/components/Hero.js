import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Hero() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section id="hero" className="bg-ps">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://gmedia.playstation.com/is/image/SIEPDC/ps-now-overview-featured-image-block-01-en-27jan22?$native--t$"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Pay once, <span className="text-success">play twice!</span>
            </h1>
            <p className="lead">
              Browse our collection and get a fair exchange!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
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
