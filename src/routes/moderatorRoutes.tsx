import TestPage from "../pages/TestPage";

export const moderatorRoutes = [
  {
    index: true,
    element: <TestPage />,
  },
  {
    path: "/ban",
    element: <TestPage />,
  },
  {
    path: "/delete",
    element: <TestPage />,
  },
];
