import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-3 m-0 bg-dark text-white">
      <img
        src="https://res.cloudinary.com/hulastar/image/upload/v1646911790/SwapStation/swapstation_logo_qscp3u.png"
        alt=""
      />
      <ul className="nav justify-content-center mb-3">
        <li className="nav-item">
          <Link to="#" className="nav-link px-2">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2">
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link px-2">
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-center text-muted">
        Created by László Tarnai - Ironhack, 2022
      </p>
    </footer>
  );
}

export default Footer;
