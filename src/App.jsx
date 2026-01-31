import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import ReduxProvider from "./redux/slicer/Provider";
// import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <>
      {/* Site-wide background: neutral base + single brand accent — modern, professional */}
      <div className="fixed inset-0 -z-10" aria-hidden>
        {/* Base: soft top-to-bottom gradient (neutral, non-distracting) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #ffffff 100%)",
          }}
        />
        {/* Single brand glow: primary red, top-center, very subtle */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% -20%, rgba(196,30,58,0.06) 0%, transparent 55%)",
          }}
        />
        {/* Depth: very subtle dark wash bottom-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 100% 100%, rgba(26,26,46,0.03) 0%, transparent 60%)",
          }}
        />
      </div>

      <ReduxProvider>
        {/* <AuthProvider> */}
        <RouterProvider router={router} />
        {/* </AuthProvider> */}
      </ReduxProvider>
    </>
  );
}

export default App;
