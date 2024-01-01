import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import HubPage from "../pages/HubPage";
import UsersPage from "../pages/UsersPage";
import CombinedSearchPage from "../pages/CombinedSearchPage";
import TopicsPage from "../pages/TopicsPage";
import ErrNotFoundPage from "../pages/errors/ErrNotFoundPage";
import ErrUnknownPage from "../pages/errors/ErrUnknownPage";
import { HUBS } from "../constants";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...HUBS.map((hub) => ({
        path: "/" + hub,
        element: <HubPage hub={hub} />,
      })),
      {
        path: "/users",
        element: <UsersPage />,
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
]);
