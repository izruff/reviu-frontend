import { appRoutes } from "./routes/appRoutes";
import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(appRoutes);

const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7f7"
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Helvetica",
      "Arial",
    ].join(","),
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
    },
    h6: {
      fontSize: 12,
      fontWeight: 600
    },
    subtitle1: {
      fontSize: 16
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 16
    }
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};

export default App;
