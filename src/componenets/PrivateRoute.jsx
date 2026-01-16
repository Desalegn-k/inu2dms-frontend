import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";

export default function PrivateRoute({ children }) {
  const valid = isTokenValid();

  if (!valid) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
