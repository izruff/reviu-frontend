import { postRoutes } from "./postRoutes";
import HubPage from "../pages/HubPage";
import TestPage from "../pages/TestPage";

export const hubRoutes = (hub: string) => [
  {
    index: true,
    element: <HubPage hub={hub} />,
  },
  {
    path: "p/:postId",
    children: postRoutes,
  },
  {
    path: "t/:topicId",
    element: <TestPage />,
  },
  {
    path: "create",
    element: <TestPage />,
  },
  {
    path: "search",
    element: <TestPage />,
  },
];
