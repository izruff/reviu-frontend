import { hubRoutes } from "./hubRoutes";
import { userRoutes } from "./userRoutes";
import { postRoutes } from "./postRoutes";
import { topicRoutes } from "./topicRoutes";
import { HUBS } from "../constants";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostPage";
import TopicsPage from "../pages/TopicsPage";
import CombinedSearchPage from "../pages/CombinedSearchPage";
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
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/posts/:postId",
        children: postRoutes,
      },
      {
        path: "/topics",
        element: <TopicsPage />,
      },
      {
        path: "/topics/:topicId",
        children: topicRoutes,
      },
      {
        path: "/search",
        element: <CombinedSearchPage />,
      },
      {
        path: "/moderator", // TODO: moderatorRoute.tsx
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <ErrUnknownPage />,
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
    path: "*",
    element: <ErrNotFoundPage />,
  },
];
