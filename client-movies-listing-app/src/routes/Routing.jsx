import "react-toastify/dist/ReactToastify.css";
import DashBoard from "../components/DashBoard";
import MovieProvider from "../utils/MovieContext";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import {
  LoginProtectedRoute,
  ProtectedRoutes,
  VerificationRouts,
} from "../routes/ProtectedRoutes";
import WatchLater from "../pages/WatchLater";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import ConfirmOtp from "../pages/forgotPassword/ConfirmOtp";
import ResetPassword from "../pages/forgotPassword/ResetPassword";
// AppLayout has been moved to a separate file for fast refresh compatibility.

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <MovieProvider>
        <DashBoard>
          <ErrorPage />
        </DashBoard>
      </MovieProvider>
    ),
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "",
        element: <ProtectedRoutes />,
        children: [{ path: "/watch-later", element: <WatchLater /> }],
      },
      {
        path: "",
        element: <LoginProtectedRoute />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
      {
        path: "/user/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "",
        element: <VerificationRouts />,
        children: [
          {
            path: "/user/forgot-password/otp",
            element: <ConfirmOtp />,
          },
          {
            path: "/user/forgot-password/otp/confirm",
            element: <ResetPassword />,
          }
        ],
      },
    ],
  },
]);
