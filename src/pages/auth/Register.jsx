import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import {
  AUTH_INPUT_CLASS,
  AUTH_INPUT_WITH_ICON_CLASS,
  AUTH_LABEL_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
  AUTH_PRIMARY_BUTTON_STYLE,
  AUTH_PASSWORD_TOGGLE_BUTTON_CLASS,
  AUTH_FOOTER_LINK_CLASS,
} from "@/lib/authStyles";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit handled by Redux/API when wired
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Create account
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Create an account to access TP Data Management.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="register-name" className={AUTH_LABEL_CLASS}>
            Full name
          </label>
          <input
            id="register-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Enter your full name"
            className={AUTH_INPUT_CLASS}
            aria-required="true"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="register-email" className={AUTH_LABEL_CLASS}>
            Email address
          </label>
          <input
            id="register-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            className={AUTH_INPUT_CLASS}
            aria-required="true"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="register-password" className={AUTH_LABEL_CLASS}>
            Password
          </label>
          <div className="relative">
            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              placeholder="Enter your password"
              className={AUTH_INPUT_WITH_ICON_CLASS}
              aria-required="true"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={AUTH_PASSWORD_TOGGLE_BUTTON_CLASS}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" aria-hidden />
              ) : (
                <Eye className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="register-confirm" className={AUTH_LABEL_CLASS}>
            Confirm password
          </label>
          <input
            id="register-confirm"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Confirm your password"
            className={AUTH_INPUT_CLASS}
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          className={AUTH_PRIMARY_BUTTON_CLASS}
          style={AUTH_PRIMARY_BUTTON_STYLE}
        >
          Sign up
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className={AUTH_FOOTER_LINK_CLASS}>
          Sign in
        </Link>
      </p>
    </>
  );
};

export default Register;
