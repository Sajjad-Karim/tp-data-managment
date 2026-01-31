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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit handled by Redux/API when wired
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Welcome back
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Sign in to access TP Data Management. You&apos;ll be up & running in 2
        minutes.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="login-email" className={AUTH_LABEL_CLASS}>
            Email address
          </label>
          <input
            id="login-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            className={AUTH_INPUT_CLASS}
            aria-required="true"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="login-password" className={AUTH_LABEL_CLASS}>
            Password
          </label>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
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

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary hover:text-primary/90 hover:underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 rounded"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className={AUTH_PRIMARY_BUTTON_CLASS}
          style={AUTH_PRIMARY_BUTTON_STYLE}
        >
          Sign in
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link to="/register" className={AUTH_FOOTER_LINK_CLASS}>
          Create account
        </Link>
      </p>
    </>
  );
};

export default Login;
