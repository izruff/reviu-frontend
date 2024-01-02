import { appRoutes } from "./routes/appRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(appRoutes);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
