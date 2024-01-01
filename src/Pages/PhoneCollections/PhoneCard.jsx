import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { _id, image, name, brand, type, price, description, rating } = phone;
  return (
    <div className="m-4">
      <div className="card lg:card-side bg-base-100 shadow-xl my-5">
        <figure className=" md:w-3/6 ">
          <img src={image} alt="car" />
        </figure>
        <div className="card-body md:w-3/6">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <h3 className="text-lg font-medium">
            <span className="text-xl font-bold">Brand-Name: </span>
            {brand}
          </h3>
          <h3 className="text-lg font-medium">
            <span className="text-xl font-bold">Type: </span>
            {type}
          </h3>
          <h3 className="text-lg font-medium">
            <span className="text-xl font-bold">Price: </span>
            {price} $
          </h3>
          <p className="text-lg font-normal">
            <span className="text-xl font-bold">Discription: </span>
            {description.slice(0, 200)} ...
          </p>
          <p>
            <span className="text-xl font-bold">Rating: </span>
            {rating}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/viewdetails/${_id}`}>
              <button className="btn bg-gray-200">View Details</button>
            </Link>
            <Link to={`/updateproduct/${_id}`}>
              <button className="btn bg-gray-200">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.object,
};

export default PhoneCard;
