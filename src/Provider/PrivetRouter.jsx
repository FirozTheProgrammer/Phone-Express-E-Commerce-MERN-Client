import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="grid  place-content-center h-48 ">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }
  if (!isLoading && !user?.email) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};
PrivetRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivetRoute;
