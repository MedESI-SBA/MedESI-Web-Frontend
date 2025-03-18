import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
