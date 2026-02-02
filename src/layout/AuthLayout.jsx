import { Outlet } from "react-router-dom";

import loginImage from "@/assets/banners/authBanner8.jpeg";

const AUTH_BG_COLOR = "#F9FAFB";

const AuthLayout = () => {
  return (
    <div
      className="relative min-h-screen h-screen overflow-hidden flex flex-col lg:flex-row"
      style={{
        background: AUTH_BG_COLOR,
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Left: full-height image — hidden on small screens, visible from lg up */}
      <aside
        className="hidden lg:block relative w-full lg:w-[55%] lg:h-screen shrink-0 overflow-hidden lg:rounded-r-none"
        aria-hidden
      >
        {/* Top-left brand area (reserved space for logo) */}
        <div
          className="absolute top-0 left-0 z-10 p-3 lg:p-4"
          aria-label="Brand"
        >
          <div className="inline-flex items-center gap-3 rounded-sm border border-white/35 bg-white/90 backdrop-blur-md px-2 py-1.5 ">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #c41e3a 0%, #ea580c 100%)",
              }}
              aria-hidden
            />
            <span className="text-sm font-bold tracking-tight text-gray-900">
              Logo Here.......
            </span>
          </div>
        </div>

        <img
          src={loginImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden
        />
        {/* <div className="absolute inset-0 bg-black/40" aria-hidden /> */}
      </aside>

      {/* Right: auth form card — full width on small, 45% on lg+ */}
      <main
        className="relative z-10 w-full lg:w-[45%] flex flex-col items-center justify-start lg:justify-center flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-5 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-12 xl:px-16"
        role="main"
      >
        <div className="w-full max-w-[480px] sm:max-w-[520px] min-w-0 flex flex-col shrink-0 bg-white rounded-xl shadow-xl shadow-gray-200/60 border border-gray-100 p-4 sm:p-8 lg:p-10 my-auto lg:my-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
