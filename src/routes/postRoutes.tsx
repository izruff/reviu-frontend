import PostPage from "../pages/PostPage";
import PostEditPage from "../pages/PostEditPage";
import TestPage from "../pages/TestPage";

export const postRoutes = [
  {
    index: true,
    element: <PostPage />,
  },
  {
    path: "comment/:commentId",
    element: <TestPage />,
  },
  {
    path: "edit",
    element: <PostEditPage />,
  },
];
