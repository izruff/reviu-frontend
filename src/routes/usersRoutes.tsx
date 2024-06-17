import UserSearchPage from "../pages/UserSearchPage";
import UserPage from "../pages/UserPage";

export const usersRoutes = [
  {
    index: true,
    element: <UserSearchPage />,
  },
  {
    path: ":username",
    element: <UserPage />,
  },
];
