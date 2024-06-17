import PostSearchPage from "../pages/PostSearchPage";
import PostCreatePage from "../pages/PostCreatePage";
import PostPage from "../pages/PostPage";
import PostEditPage from "../pages/PostEditPage";

export const postsRoutes = [
  {
    index: true,
    element: <PostSearchPage />,
  },
  {
    path: "create",
    element: <PostCreatePage />,
  },
  {
    path: ":postId",
    children: [
      {
        index: true,
        element: <PostPage />,
      },
      {
        path: "edit",
        element: <PostEditPage />,
      },
    ],
  },
];
