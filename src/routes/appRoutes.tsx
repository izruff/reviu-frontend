import { hubRoutes } from "./hubRoutes";
import { userRoutes } from "./userRoutes";
import { HUBS } from "../constants";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CombinedSearchPage from "../pages/CombinedSearchPage";
import TopicsPage from "../pages/TopicsPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import RecoverPage from "../pages/auth/RecoverPage";
import ErrNotFoundPage from "../pages/errors/ErrNotFoundPage";
import ErrUnknownPage from "../pages/errors/ErrUnknownPage";

export const appRoutes = [
  {
    element: <Layout />,
    children: [
      ...HUBS.map((hub) => ({
        path: "/" + hub,
        children: hubRoutes(hub),
      })),
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/users/:username",
        children: userRoutes,
      },
      {
        path: "/topics",
        element: <TopicsPage />,
      },
      {
        path: "/search",
        element: <CombinedSearchPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        Element: <LoginPage />,
      },
      {
        path: "/recover",
        element: <RecoverPage />,
      },
      {
        path: "/moderator", // TODO: moderatorRoute.tsx
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrNotFoundPage />,
      },
    ],
    errorElement: <ErrUnknownPage />,
  },
];
