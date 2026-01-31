import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

import {
  AUTH_INPUT_CLASS,
  AUTH_INPUT_WITH_ICON_CLASS,
  AUTH_LABEL_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
  AUTH_PRIMARY_BUTTON_STYLE,
  AUTH_PASSWORD_TOGGLE_BUTTON_CLASS,
  AUTH_BACK_LINK_CLASS,
  AUTH_FOOTER_LINK_CLASS,
} from "@/lib/authStyles";

const ResetPasswordNew = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;
  const isValid = password.length >= 8 && passwordsMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/reset-password/success", { replace: true });
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Link to="/reset-password/otp" className={AUTH_BACK_LINK_CLASS}>
        <ArrowLeft className="size-4" aria-hidden />
        Back
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Create new password
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Choose a strong password. Use at least 8 characters.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="new-password" className={AUTH_LABEL_CLASS}>
            New password
          </label>
          <div className="relative">
            <input
              id="new-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={AUTH_INPUT_WITH_ICON_CLASS}
              aria-required="true"
              minLength={8}
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
          {password && password.length < 8 && (
            <p className="mt-1 text-xs text-muted-foreground">
              At least 8 characters required
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="confirm-password" className={AUTH_LABEL_CLASS}>
            Confirm new password
          </label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {confirmPassword && !passwordsMatch && (
            <p className="mt-1 text-xs text-destructive">
              Passwords do not match
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={AUTH_PRIMARY_BUTTON_CLASS}
          style={AUTH_PRIMARY_BUTTON_STYLE}
        >
          {isSubmitting ? "Updating…" : "Update password"}
        </button>
      </form>

      {email && (
        <p className="mt-4 text-xs text-gray-500 text-center">
          Resetting password for {email}
        </p>
      )}

      <p className="mt-8 text-center text-sm text-gray-500">
        <Link to="/login" className={AUTH_FOOTER_LINK_CLASS}>
          Back to sign in
        </Link>
      </p>
    </>
  );
};

export default ResetPasswordNew;
