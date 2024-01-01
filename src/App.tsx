import { appRouter } from "./routes/appRoutes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
