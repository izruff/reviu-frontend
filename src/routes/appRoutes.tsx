import { accountRoutes } from "./accountRoutes";
import { usersRoutes } from "./usersRoutes";
import { postsRoutes } from "./postsRoutes";
import { commentsRoutes } from "./commentsRoutes";
import { topicsRoutes } from "./topicsRoutes";
import { moderatorRoutes } from "./moderatorRoutes";
import { HUBS } from "../constants";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import HubPage from "../pages/HubPage";
import ErrNotFoundPage from "../pages/errors/ErrNotFoundPage";
import ErrUnknownPage from "../pages/errors/ErrUnknownPage";

export const appRoutes = [
  {
    element: <Layout />,
    children: [
      ...HUBS.map((item) => ({
        path: "/" + item.key,
        element: <HubPage hub={item} />,
      })),
      {
        path: "/users",
        children: usersRoutes,
      },
      {
        path: "/posts",
        children: postsRoutes,
      },
      {
        path: "/comments",
        children: commentsRoutes,
      },
      {
        path: "/topics",
        children: topicsRoutes,
      },
      {
        path: "/moderator",
        children: moderatorRoutes,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <ErrUnknownPage />,
  },
  {
    path: "/",
    children: accountRoutes,
  },
  {
    path: "*",
    element: <ErrNotFoundPage />,
  },
];
