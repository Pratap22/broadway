import { Navigate, Outlet, useLocation } from "react-router";

const AuthLayout = () => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?to=${location.pathname}`} replace />
  );
};

export default AuthLayout;
