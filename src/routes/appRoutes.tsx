import { hubRoutes } from "./hubRoutes";
import { userRoutes } from "./userRoutes";
import { postRoutes } from "./postRoutes";
import { topicRoutes } from "./topicRoutes";
import { HUBS } from "../constants";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import UserSearchPage from "../pages/UserSearchPage";
import TopicSearchPage from "../pages/TopicSearchPage";
import PostSearchPage from "../pages/PostSearchPage";
import SignupPage from "../pages/auth/SignupPage";
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
        element: <UserSearchPage />,
      },
      {
        path: "/users/:username",
        children: userRoutes,
      },
      {
        path: "/posts",
        element: <PostSearchPage />,
      },
      {
        path: "/posts/:postId",
        children: postRoutes,
      },
      {
        path: "/topics",
        element: <TopicSearchPage />,
      },
      {
        path: "/topics/:topicId",
        children: topicRoutes,
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
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
