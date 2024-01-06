import TestPage from "../pages/TestPage";

export const topicRoutes = [
  {
    index: true,
    element: <TestPage />,
  },
  {
    path: "search",
    element: <TestPage />,
  },
  {
    path: "follows",
    element: <TestPage />,
  },
  {
    path: "report",
    element: <TestPage />,
  },
];
