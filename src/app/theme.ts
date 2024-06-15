import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    background: {
      default: "#f7f7f7",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Helvetica", "Arial"].join(","),
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
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
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 300,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 16,
      color: "#1661c4",
    },
  },
});
