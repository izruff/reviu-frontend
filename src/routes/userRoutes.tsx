import TestPage from "../pages/TestPage";

export const userRoutes = [
  {
    index: true,
    element: <TestPage />,
  },
  {
    path: "edit",
    element: <TestPage />,
  },
  {
    path: "follows",
    element: <TestPage />,
  },
  {
    path: "notifications",
    element: <TestPage />,
  },
  {
    path: "settings",
    element: <TestPage />,
  },
];
