import SignupPage from "../pages/auth/SignupPage";
import RecoverPage from "../pages/auth/RecoverPage";
import LoginPage from "../pages/auth/LoginPage";

export const accountRoutes = [
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "recover",
    element: <RecoverPage />,
  },
];
