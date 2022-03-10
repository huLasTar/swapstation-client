// We are deconstructing props object directly in the parentheses of the function
function ExchangeCard({
  buyer,
  seller,
  buyerItem,
  sellerItem,
  dateOfSwap,
  comment,
  status,
  _id,
}) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body ExchangeCard bg-primary text-white text-start border border-primary shadow-sm p-0">
          <div className="card-title p-3">
            <h5 className="m-0">{_id}</h5>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Buyer: {buyer}</p>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Buyer's Item: {buyerItem}</p>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Seller: {seller}</p>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Seller's Item: {sellerItem}</p>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Date Of Swap: {dateOfSwap}</p>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Comments: {comment}</p>
          </div>
          <div className="card-text p-3">
            <p className="m-1">Status: {status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeCard;
