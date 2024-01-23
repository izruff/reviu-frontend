import { Button, Container, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SignupPage = () => {
  const [emailErrStatus, setEmailErrStatus] = React.useState("test");
  const [usernameErrStatus, setUsernameErrStatus] = React.useState("");
  const [passwordErrStatus, setPasswordStatus] = React.useState("");


  return (
    <Container>
      <Paper sx={{padding:8, margin: "auto"}}>
        <Stack direction="column" spacing={4} alignItems="center">
          <Typography variant="h2">Signup</Typography>
          <TextField error={emailErrStatus !== ""} id="email" label="Email" variant="outlined" helperText={emailErrStatus} />
          <Divider />
          <TextField error={usernameErrStatus !== ""} id="username" label="Username" variant="outlined" helperText={usernameErrStatus} />
          <TextField error={passwordErrStatus !== ""} id="password" label="Password" variant="outlined" helperText={passwordErrStatus} />
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained">Signup</Button>
            <Button variant="text">Already have an account? Login</Button>
          </Stack>
        </Stack>        
      </Paper>
    </Container>
  );
};

export default SignupPage;
