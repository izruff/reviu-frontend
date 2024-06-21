import TestPage from "../pages/TestPage";

export const commentsRoutes = [
  {
    index: true,
    element: <TestPage />,
  },
  {
    path: ":commentId",
    element: <TestPage />,
  },
];
