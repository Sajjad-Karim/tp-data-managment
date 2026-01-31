/**
 * Application routes.
 * - Dashboard routes: /, /drivers, /documents, etc. (use DashboardLayout)
 * - Auth routes: /login, /register, /forgot-password, etc. (use AuthLayout)
 * - NotFound: catch-all for unknown paths
 */
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard";
import Drivers from "../pages/drivers";
import DriverDetail from "../pages/drivers/DriverDetail";
import PassengerAssistants from "../pages/passenger-assistants";
import PADetail from "../pages/passenger-assistants/PADetail";
import Documents from "../pages/documents";
import Reports from "../pages/reports";
import UserManagement from "../pages/users";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPasswordOTP from "../pages/auth/ResetPasswordOTP";
import ResetPasswordNew from "../pages/auth/ResetPasswordNew";
import ResetPasswordSuccess from "../pages/auth/ResetPasswordSuccess";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "drivers", element: <Drivers /> },
      { path: "drivers/:id", element: <DriverDetail /> },
      { path: "passenger-assistants", element: <PassengerAssistants /> },
      { path: "passenger-assistants/:id", element: <PADetail /> },
      { path: "documents", element: <Documents /> },
      { path: "reports", element: <Reports /> },
      { path: "users", element: <UserManagement /> },
    ],
  },
  {
    path: "login",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "register",
    element: <AuthLayout />,
    children: [{ index: true, element: <Register /> }],
  },
  {
    path: "forgot-password",
    element: <AuthLayout />,
    children: [{ index: true, element: <ForgotPassword /> }],
  },
  {
    path: "reset-password/otp",
    element: <AuthLayout />,
    children: [{ index: true, element: <ResetPasswordOTP /> }],
  },
  {
    path: "reset-password/new",
    element: <AuthLayout />,
    children: [{ index: true, element: <ResetPasswordNew /> }],
  },
  {
    path: "reset-password/success",
    element: <AuthLayout />,
    children: [{ index: true, element: <ResetPasswordSuccess /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
