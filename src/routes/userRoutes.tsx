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
