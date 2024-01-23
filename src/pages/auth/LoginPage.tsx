import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Container>
      <Paper sx={{padding:8, margin: "auto"}}>
        <Stack direction="column" spacing={4} alignItems="center">
          <Typography variant="h2">Login</Typography>
          <TextField id="email-or-username" label="Email/Username" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained">Login</Button>
            <Button variant="text">Forgot password?</Button>
          </Stack>
        </Stack>        
      </Paper>
    </Container>
  );
};

export default LoginPage;
