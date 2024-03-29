import { API_URL } from "../../constants";
import V from "../../utils/validation";
import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailErrStatus, setEmailErrStatus] = React.useState("");
  const [usernameErrStatus, setUsernameErrStatus] = React.useState("");
  const [passwordErrStatus, setPasswordErrStatus] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    setEmailErrStatus(V.validateEmail(email));
    setUsernameErrStatus(V.validateUsername(username));
    setPasswordErrStatus(V.validatePassword(password));
  }, [email, username, password]);

  function handleSubmit() {
    const data = { email, username, password };

    fetch(`${API_URL}/account/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = (await res.json()) as { error: string }; // TODO: handle other types of error
          throw new Error(data.error);
        }
        navigate(`/users/${username}`);
      })
      .catch((error: Error) => {
        // TODO: better error display
        console.log(error);
        setEmailErrStatus(error.message);
        setUsernameErrStatus(error.message);
        setPasswordErrStatus(error.message);
      });
  }

  return (
    <Container>
      <Paper sx={{ padding: 8, margin: "auto" }}>
        <Stack direction="column" spacing={4} alignItems="center">
          <Typography variant="h2">Signup</Typography>
          <TextField
            error={emailErrStatus !== ""}
            id="email"
            label="Email"
            variant="outlined"
            helperText={emailErrStatus}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Divider />
          <TextField
            error={usernameErrStatus !== ""}
            id="username"
            label="Username"
            variant="outlined"
            helperText={usernameErrStatus}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            error={passwordErrStatus !== ""}
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            helperText={passwordErrStatus}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained" onClick={handleSubmit}>
              Signup
            </Button>
            <Button
              variant="text"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account? Login
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default SignupPage;
