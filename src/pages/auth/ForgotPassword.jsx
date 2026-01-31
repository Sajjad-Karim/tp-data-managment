import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
  AUTH_PRIMARY_BUTTON_STYLE,
  AUTH_BACK_LINK_CLASS,
  AUTH_FOOTER_LINK_CLASS,
} from "@/lib/authStyles";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value?.trim();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/reset-password/otp", { state: { email }, replace: true });
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Link to="/login" className={AUTH_BACK_LINK_CLASS}>
        <ArrowLeft className="size-4" aria-hidden />
        Back to sign in
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Reset password
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Enter your email and we&apos;ll send you a code to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="forgot-email" className={AUTH_LABEL_CLASS}>
            Email address
          </label>
          <input
            id="forgot-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            className={AUTH_INPUT_CLASS}
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={AUTH_PRIMARY_BUTTON_CLASS}
          style={AUTH_PRIMARY_BUTTON_STYLE}
        >
          {isSubmitting ? "Sending…" : "Send reset code"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Remember your password?{" "}
        <Link to="/login" className={AUTH_FOOTER_LINK_CLASS}>
          Sign in
        </Link>
      </p>
    </>
  );
};

export default ForgotPassword;
