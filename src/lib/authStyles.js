/**
 * Shared styles for auth forms.
 * Keeps login, register, forgot-password, and reset-password pages consistent.
 */

export const AUTH_INPUT_CLASS =
  "w-full min-w-0 rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

export const AUTH_INPUT_WITH_ICON_CLASS =
  "w-full min-w-0 rounded-lg border border-gray-200 bg-gray-50/50 pl-4 pr-11 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

export const AUTH_LABEL_CLASS = "block text-sm font-medium text-gray-700";

export const AUTH_PRIMARY_BUTTON_CLASS =
  "w-full rounded-lg py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg";

export const AUTH_PRIMARY_BUTTON_STYLE = {
  background: "linear-gradient(135deg, #c41e3a 0%, #ea580c 100%)",
};

export const AUTH_BACK_LINK_CLASS =
  "inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 rounded-md mb-8";

export const AUTH_FOOTER_LINK_CLASS =
  "font-semibold text-primary hover:text-primary/90 hover:underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 rounded";

export const AUTH_PASSWORD_TOGGLE_BUTTON_CLASS =
  "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1.5 rounded-md hover:bg-gray-100 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0";

export const AUTH_OTP_INPUT_CLASS =
  "w-12 h-14 sm:w-14 sm:h-16 rounded-lg border-2 border-gray-200 bg-gray-50/50 text-center text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";
