import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import {
  AUTH_PRIMARY_BUTTON_CLASS,
  AUTH_PRIMARY_BUTTON_STYLE,
} from "@/lib/authStyles";

const ResetPasswordSuccess = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-lg shadow-green-200/50"
          aria-hidden
        >
          <CheckCircle2 className="h-10 w-10" strokeWidth={2.5} />
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
        Password changed
      </h1>
      <p className="text-sm text-gray-500 max-w-[280px] mx-auto">
        Your password has been updated successfully. You can now sign in with
        your new password.
      </p>

      <Link
        to="/login"
        className={`mt-10 inline-flex justify-center items-center w-full ${AUTH_PRIMARY_BUTTON_CLASS}`}
        style={AUTH_PRIMARY_BUTTON_STYLE}
      >
        Go to Login
      </Link>
    </div>
  );
};

export default ResetPasswordSuccess;
