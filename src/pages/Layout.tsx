import SearchBar from "../components/SearchBar";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  getUserData,
  getUserDataFailure,
  getUserDataSuccess,
} from "../slices/auth";
import { UserType } from "../types/User";
import { API_URL } from "../constants";
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
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Avatar,
  Skeleton,
  Menu,
  MenuItem,
  Divider,
  Popover,
} from "@mui/material";
import {
  CreateRounded,
  Menu as MenuIcon,
  Notifications,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import React from "react";

const Layout = () => {
  const [profileAnchorEl, setProfileAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const shortcutActions = [
    { icon: <CreateRounded />, name: "Create new post", path: "/posts/create" },
  ];

  const userData = useAppSelector((state) => state.auth.userData);
  const userDataLoading = useAppSelector((state) => state.auth.loading);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (userData === null) {
      fetch(`${API_URL}/account/check-token`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 401) {
            throw new Error("Unauthorized");
          } else {
            throw new Error("Unknown error");
          }
        })
        .then((data: { status: string; userId?: number }) => {
          if (data.status === "success") {
            dispatch(getUserData());
            fetch(`${API_URL}/public/users/id/${data.userId}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            })
              .then((res) => {
                return res.json();
              })
              .then((rawData) => {
                /* eslint-disable */
                rawData.createdAt = new Date(rawData.createdAt);
                return rawData;
                /* eslint-enable */
              })
              .then((userData: UserType) => {
                dispatch(getUserDataSuccess({ username: userData.username }));
              })
              .catch((error) => {
                dispatch(getUserDataFailure());
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch]);

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
              {userDataLoading ? (
                <Skeleton variant="rectangular" height={36} />
              ) : userData ? (
                <>
                  <IconButton
                    onClick={(event) => {
                      setNotificationAnchorEl(event.currentTarget);
                    }}
                  >
                    <Notifications />
                  </IconButton>
                  <IconButton
                    onClick={(event) => {
                      setProfileAnchorEl(event.currentTarget);
                    }}
                  >
                    <Avatar sx={{ width: 36, height: 36 }} />
                  </IconButton>
                  <Popover
                    id="notification-menu"
                    anchorEl={notificationAnchorEl}
                    open={Boolean(notificationAnchorEl)}
                    onClose={() => {
                      setNotificationAnchorEl(null);
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    No new notifications.
                  </Popover>
                  <Menu
                    id="profile-menu"
                    anchorEl={profileAnchorEl}
                    open={Boolean(profileAnchorEl)}
                    onClose={() => {
                      setProfileAnchorEl(null);
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      onClick={() => {
                        setProfileAnchorEl(null);
                        navigate(`/users/${userData.username}`);
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setProfileAnchorEl(null);
                        navigate("/chat");
                      }}
                    >
                      Chat
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        setProfileAnchorEl(null);
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
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
                </>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
      <Container sx={{ paddingY: 8 }}>
        <Outlet />
      </Container>
      <SpeedDial
        ariaLabel="Shortcuts"
        sx={{ position: "fixed", bottom: 48, right: 48 }}
        icon={<SpeedDialIcon />}
      >
        {shortcutActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            FabProps={{
              href: action.path,
            }}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Layout;
