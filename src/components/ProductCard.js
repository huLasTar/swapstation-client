import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ title, category, condition, description, _id }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body ProductCard">
          <Link to={`/products/${_id}`}>
            <h4 className="card-title">{title}</h4>
          </Link>
          <p className="card-text">{category}</p>
          <p className="card-text">{condition}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
