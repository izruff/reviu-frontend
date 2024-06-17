import TopicSearchPage from "../pages/TopicSearchPage";

import TestPage from "../pages/TestPage";


export const topicsRoutes = [
  {
    index: true,
    element: <TopicSearchPage />,
  },
  {
    path: ":topicId",
    children: [
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
    ],
  },
];
