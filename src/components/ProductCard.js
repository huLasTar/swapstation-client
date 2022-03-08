import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProductCard({
  title,
  imageUrl,
  category,
  condition,
  description,
  purchasable,
  seller,
  _id,
}) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body ProductCard bg-primary text-white text-start p-0">
          <img className="card-img-top" src={imageUrl} alt={title} />
          <Link to={`/products/${_id}`}>
            <div className="card-title p-3">
              <h5 className="m-0">{title}</h5>
            </div>
          </Link>
          <div className="card-text p-3">
            {category === "PS5" && (
              <p className="badge bg-success text-primary">PlayStation 5</p>
            )}
            {category === "PS4" && (
              <p className="badge bg-success text-primary">PlayStation 4</p>
            )}
            {category === "PS3" && (
              <p className="badge bg-success text-primary">PlayStation 3</p>
            )}
            {category === "PS2" && (
              <p className="badge bg-success text-primary">PlayStation 2</p>
            )}
            {category === "PS1" && (
              <p className="badge bg-success text-primary">PlayStation 1</p>
            )}
            {category === "PSVita" && (
              <p className="badge bg-success text-primary">PlayStation Vita</p>
            )}
            {category === "PSP" && (
              <p className="badge bg-success text-primary">
                PlayStation Portable
              </p>
            )}
            {condition === "new" && (
              <p className="badge bg-warning text-primary">New</p>
            )}
            {condition === "usednew" && (
              <p className="badge bg-warning text-primary">Used - Like New</p>
            )}
            {condition === "usedgood" && (
              <p className="badge bg-warning text-primary">Used - Good</p>
            )}
            {condition === "usedfair" && (
              <p className="badge bg-warning text-primary">Used - Fair</p>
            )}
            {purchasable && (
              <p className="badge bg-warning text-dark">Swap / Buy</p>
            )}
            {!purchasable && (
              <p className="badge bg-danger text-white">Swap Only</p>
            )}
            <Link
              className="btn btn-success text-primary fw-bold d-block"
              to={`/products/${_id}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
