import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProductCard({
  title,
  imageUrl,
  category,
  condition,
  purchasable,
  _id,
}) {
  return (
    <div className="col">
      <div className="card bg-primary text-white border border-success shadow-sm">
        <div className="card-body ProductCard p-0">
          <img className="card-img-top" src={imageUrl} alt={title} />
          <Link to={`/products/${_id}`}>
            <div className="card-title m-0 p-3">
              <h5 className="m-0">{title}</h5>
            </div>
          </Link>
          <div className="card-text p-0">
            <div className="badges my-2">
              {category === "PS5" && (
                <p className="text-white m-1">PlayStation 5</p>
              )}
              {category === "PS4" && (
                <p className="text-white m-1">PlayStation 4</p>
              )}
              {category === "PS3" && (
                <p className="text-white">PlayStation 3</p>
              )}
              {category === "PS2" && (
                <p className="text-white m-1">PlayStation 2</p>
              )}
              {category === "PS1" && (
                <p className="text-white m-1">PlayStation 1</p>
              )}
              {category === "PSVita" && (
                <p className="text-white m-1">PlayStation Vita</p>
              )}
              {category === "PSP" && (
                <p className="text-white m-1">PlayStation Portable</p>
              )}
              {condition === "new" && <p className="text-white m-1">New</p>}
              {condition === "usednew" && (
                <p className="text-white m-1">Used - Like New</p>
              )}
              {condition === "usedgood" && (
                <p className="text-white m-1">Used - Good</p>
              )}
              {condition === "usedfair" && (
                <p className="text-white m-1">Used - Fair</p>
              )}
              {purchasable && <p className="text-white m-1">Swap & Buy</p>}
              {!purchasable && <p className="text-white m-1">Swap Only</p>}
            </div>
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
