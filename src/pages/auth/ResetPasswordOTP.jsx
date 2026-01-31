import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import {
  AUTH_LABEL_CLASS,
  AUTH_OTP_INPUT_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
  AUTH_PRIMARY_BUTTON_STYLE,
  AUTH_BACK_LINK_CLASS,
  AUTH_FOOTER_LINK_CLASS,
} from "@/lib/authStyles";

const OTP_LENGTH = 6;

const ResetPasswordOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email ?? "";

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      const digits = value.replace(/\D/g, "").slice(0, OTP_LENGTH).split("");
      const next = [...otp];
      digits.forEach((d, i) => {
        if (index + i < OTP_LENGTH) next[index + i] = d;
      });
      setOtp(next);
      const lastIdx = Math.min(index + digits.length, OTP_LENGTH - 1);
      const el = document.getElementById(`otp-${lastIdx}`);
      if (el) el.focus();
      return;
    }
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < OTP_LENGTH - 1) {
      const el = document.getElementById(`otp-${index + 1}`);
      if (el) el.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const el = document.getElementById(`otp-${index - 1}`);
      if (el) el.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    const next = [...otp];
    pasted.split("").forEach((d, i) => {
      next[i] = d;
    });
    setOtp(next);
    const lastIdx = Math.min(pasted.length, OTP_LENGTH) - 1;
    const el = document.getElementById(`otp-${lastIdx}`);
    if (el) el.focus();
  };

  const otpValue = otp.join("");
  const isComplete = otpValue.length === OTP_LENGTH;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isComplete) return;
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/reset-password/new", {
        state: { email: email || undefined, otp: otpValue },
        replace: true,
      });
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <>
      <div className="mb-8">
        <Link to="/forgot-password" className={AUTH_BACK_LINK_CLASS}>
          <ArrowLeft className="size-4" aria-hidden />
          Back
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Enter verification code
        </h1>
        <p className="text-sm text-gray-500">
          We sent a 6-digit code to{" "}
          {email ? (
            <span className="font-semibold text-gray-900">{email}</span>
          ) : (
            "your email"
          )}
          . Enter it below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2" role="group" aria-label="Verification code">
          <label htmlFor="otp-0" className={`${AUTH_LABEL_CLASS} text-center mb-3`}>
            Verification code
          </label>
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={AUTH_OTP_INPUT_CLASS}
                aria-label={`Digit ${index + 1} of 6`}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isComplete || isSubmitting}
          className={AUTH_PRIMARY_BUTTON_CLASS}
          style={AUTH_PRIMARY_BUTTON_STYLE}
        >
          {isSubmitting ? "Verifying…" : "Verify code"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Didn&apos;t receive the code?{" "}
        <button
          type="button"
          className="font-semibold text-primary hover:text-primary/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 rounded px-1 py-0.5 -m-0.5 hover:bg-primary/5 active:scale-95 transition-colors"
          aria-label="Resend verification code"
        >
          Resend
        </button>
      </p>

      <p className="mt-6 text-center text-sm text-gray-500">
        <Link to="/login" className={AUTH_FOOTER_LINK_CLASS}>
          Back to sign in
        </Link>
      </p>
    </>
  );
};

export default ResetPasswordOTP;
