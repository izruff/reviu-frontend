import { API_URL } from "../../constants";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameOrEmailErrStatus, setusernameOrEmailErrStatus] =
    React.useState("");
  const [passwordErrStatus, setPasswordStatus] = React.useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password,
    };

    fetch(`${API_URL}/account/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("invalid credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    navigate(-1);
  }

  return (
    <Container>
      <Paper sx={{ padding: 8, margin: "auto" }}>
        <Stack direction="column" spacing={4} alignItems="center">
          <Typography variant="h2">Login</Typography>
          <TextField
            error={usernameOrEmailErrStatus !== ""}
            id="email-or-username"
            value={usernameOrEmail}
            label="Email/Username"
            variant="outlined"
            helperText={usernameOrEmailErrStatus}
            onChange={(e) => {
              setUsernameOrEmail(e.target.value);
            }}
          />
          <TextField
            error={passwordErrStatus !== ""}
            id="password"
            type="password"
            value={password}
            label="Password"
            variant="outlined"
            helperText={passwordErrStatus}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained" onClick={handleSubmit}>
              Login
            </Button>
            <Button variant="text">Forgot password?</Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default LoginPage;
