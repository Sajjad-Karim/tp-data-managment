import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ACTIVE_STYLES = {
  background: "linear-gradient(135deg, #c41e3a 0%, #ea580c 100%)",
};

const AuthTabs = ({ variant = "default" }) => {
  const location = useLocation();

  const tabBaseClass =
    "rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2";

  const activeClass =
    "text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]";
  const inactiveClass =
    "text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:scale-[0.98]";

  const isLoginActive = location.pathname === "/login";
  const isRegisterActive = location.pathname === "/register";

  const containerClass =
    variant === "overlay"
      ? "w-fit inline-flex rounded-lg border border-white/40 bg-white/95 backdrop-blur-md p-1.5 shadow-xl shadow-black/10"
      : "w-fit inline-flex rounded-lg border border-gray-200 bg-gray-50/80 p-1.5 mb-6 shadow-sm";

  return (
    <div
      className={containerClass}
      role="tablist"
      aria-label="Auth tabs"
    >
      <Link
        to="/login"
        role="tab"
        aria-selected={isLoginActive}
        tabIndex={isLoginActive ? 0 : -1}
        className={cn(
          tabBaseClass,
          isLoginActive ? activeClass : inactiveClass
        )}
        style={isLoginActive ? ACTIVE_STYLES : undefined}
      >
        Login
      </Link>
      <Link
        to="/register"
        role="tab"
        aria-selected={isRegisterActive}
        tabIndex={isRegisterActive ? 0 : -1}
        className={cn(
          tabBaseClass,
          isRegisterActive ? activeClass : inactiveClass
        )}
        style={isRegisterActive ? ACTIVE_STYLES : undefined}
      >
        Register
      </Link>
    </div>
  );
};

export default AuthTabs;
