import SearchBar from "../components/SearchBar";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  IconButton,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="inherit">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                reviu
              </Typography>
            </Stack>
            <SearchBar />
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
      <Container sx={{ paddingY: 8 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
