import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ phoneBrand }) => {
  const { name, image } = phoneBrand;
  return (
    <Link to={`/carcollections/${name}`}>
      <div className="bg-white rounded-lg hover:bg-blue-50 shadow-md p-4">
        <p className="text-xl font-bold pb-5 text-center">{name}</p>

        <img className="h-60 mx-auto pb-3" src={image} alt="phone" />
      </div>
    </Link>
  );
};

BrandCard.propTypes = {
  phoneBrand: PropTypes.object,
};

export default BrandCard;
