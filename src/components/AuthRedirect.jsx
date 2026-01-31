import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const AuthRedirect = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, checkSessionStatus } = useSelector(
    (state) => state.auth
  );

  // Define public routes that don't require authentication
  const publicRoutes = ["/", "/login", "/register", "/forgot-password"];
  const currentPath = location.pathname;
  const isPublicRoute = publicRoutes.includes(currentPath);

  useEffect(() => {
    // Don't redirect while checking session
    if (checkSessionStatus === "loading") return;

    // If user is not authenticated and trying to access protected route
    if (!isAuthenticated && !isPublicRoute) {
      navigate("/login", {
        replace: true,
        state: { from: currentPath }, // Save intended destination
      });
      return;
    }

    // If user is authenticated and trying to access auth pages, redirect to home
    if (
      isAuthenticated &&
      (currentPath === "/login" || currentPath === "/register")
    ) {
      navigate("/", { replace: true });
      return;
    }

    // If user is authenticated and was redirected from a protected route
    const from = location.state?.from;
    if (isAuthenticated && from && from !== currentPath) {
      navigate(from, { replace: true });
    }
  }, [
    isAuthenticated,
    checkSessionStatus,
    currentPath,
    navigate,
    isPublicRoute,
    location.state,
  ]);

  // Show loading while checking session
  if (checkSessionStatus === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        <span className="ml-4 text-lg text-gray-600">Checking session...</span>
      </div>
    );
  }

  return children;
};

export default AuthRedirect;
