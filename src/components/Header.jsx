/**
 * Site header. Used with Layout for non-dashboard pages.
 */
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-lg font-semibold text-primary">
          TP Data Mgmt
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium text-primary hover:text-primary/90"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
