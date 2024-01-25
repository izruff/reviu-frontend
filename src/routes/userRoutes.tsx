import UserPage from "../pages/UserPage";
import UserEditPage from "../pages/UserEditPage";
import TestPage from "../pages/TestPage";

export const userRoutes = [
  {
    index: true,
    element: <UserPage />,
  },
  {
    path: "edit",
    element: <UserEditPage />,
  },
  {
    path: "follows",
    element: <TestPage />,
  },
  {
    path: "activity",
    element: <TestPage />,
  },
  {
    path: "saved",
  },
  {
    path: "settings",
    element: <TestPage />,
  },
];
