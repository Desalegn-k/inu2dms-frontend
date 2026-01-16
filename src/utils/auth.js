import { jwtDecode } from "jwt-decode";

export function isTokenValid() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // seconds

    if (decoded.exp < currentTime) {
      localStorage.removeItem("token"); // remove expired token
      return false;
    }

    return true; // token is valid
  } catch (error) {
    localStorage.removeItem("token"); // invalid token
    return false;
  }
}
