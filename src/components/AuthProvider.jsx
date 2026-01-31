import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkSession } from "../redux/features/auth/actions";

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { checkSessionStatus, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  console.log("currently logged in user", user);

  useEffect(() => {
    // Check if we have a token in localStorage
    const token = localStorage.getItem("token");

    if (token && checkSessionStatus === "idle") {
      // If we have a token but haven't checked session yet, check it
      dispatch(checkSession());
    }
  }, [dispatch, checkSessionStatus]);

  // Show loading while checking session
  // if (checkSessionStatus === "loading") {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  //     </div>
  //   );
  // }

  // Render children regardless of auth status
  // The ProtectedRoute component will handle redirects
  return children;
};

export default AuthProvider;
